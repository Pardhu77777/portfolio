import React, { useEffect, useRef } from "react";

// Animated gradient, adapted from React Bits "Grainient" (MIT).
// Tuned for a full-page background: renders at reduced resolution, caps the
// frame rate, pauses in hidden tabs and draws a single still frame when the
// visitor prefers reduced motion. Without WebGL2 the static CSS aura shows.

const VERTEX = `#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }`;

const FRAGMENT = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
out vec4 fragColor;

#define S(a,b,t) smoothstep(a,b,t)
mat2 Rot(float a){ float s = sin(a), c = cos(a); return mat2(c, -s, s, c); }
vec2 hash(vec2 p){ p = vec2(dot(p, vec2(2127.1, 81.17)), dot(p, vec2(1269.5, 283.37))); return fract(sin(p) * 43758.5453); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p), u = f * f * (3.0 - 2.0 * f);
  float n = mix(mix(dot(-1.0 + 2.0 * hash(i), f),
                    dot(-1.0 + 2.0 * hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
                mix(dot(-1.0 + 2.0 * hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
                    dot(-1.0 + 2.0 * hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x), u.y);
  return 0.5 + 0.5 * n;
}

void main(){
  const float timeSpeed = 0.2;
  const float warpFrequency = 4.0;
  const float warpSpeed = 1.6;
  const float warpAmplitude = 28.0;
  const float rotationAmount = 420.0;
  const float noiseScale = 1.8;
  const float softness = 0.18;
  const float contrast = 1.0;
  const float saturation = 1.05;
  const float zoom = 0.85;

  float t = iTime * timeSpeed;
  vec2 uv = gl_FragCoord.xy / iResolution.xy;
  float ratio = iResolution.x / iResolution.y;
  vec2 tuv = (uv - 0.5) / zoom;

  float degree = noise(vec2(t * 0.4, tuv.x * tuv.y) * noiseScale);
  tuv.y *= 1.0 / ratio;
  tuv *= Rot(radians((degree - 0.5) * rotationAmount + 180.0));
  tuv.y *= ratio;

  float warpTime = t * warpSpeed;
  tuv.x += sin(tuv.y * warpFrequency + warpTime) / warpAmplitude;
  tuv.y += sin(tuv.x * (warpFrequency * 1.5) + warpTime) / (warpAmplitude * 0.5);

  float edge0 = -0.3 - softness;
  float edge1 = 0.2 + softness;
  vec3 layer1 = mix(uColor3, uColor2, S(edge0, edge1, tuv.x));
  vec3 layer2 = mix(uColor2, uColor1, S(edge0, edge1, tuv.x));
  vec3 col = mix(layer1, layer2, S(0.5 + softness, -0.3 - softness, tuv.y));


  col = (col - 0.5) * contrast + 0.5;
  float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(vec3(luma), col, saturation);
  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;

const RENDER_SCALE = 0.5;
const FRAME_INTERVAL = 1000 / 30;

const hexToRgb = (hex) => {
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return m ? [parseInt(m[1], 16) / 255, parseInt(m[2], 16) / 255, parseInt(m[3], 16) / 255] : [1, 1, 1];
};

function compile(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
  gl.deleteShader(shader);
  return null;
}

function GrainientBackground({ color1 = "#0891b2", color2 = "#1d4ed8", color3 = "#0c1f5e" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl2", { alpha: false, antialias: false, depth: false, stencil: false });
    if (!gl) return undefined;

    const vertex = compile(gl, gl.VERTEX_SHADER, VERTEX);
    const fragment = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
    const program = gl.createProgram();
    if (!vertex || !fragment) return undefined;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return undefined;

    const vao = gl.createVertexArray();
    const buffer = gl.createBuffer();
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    gl.useProgram(program);
    const uTime = gl.getUniformLocation(program, "iTime");
    const uResolution = gl.getUniformLocation(program, "iResolution");
    gl.uniform3fv(gl.getUniformLocation(program, "uColor1"), hexToRgb(color1));
    gl.uniform3fv(gl.getUniformLocation(program, "uColor2"), hexToRgb(color2));
    gl.uniform3fv(gl.getUniformLocation(program, "uColor3"), hexToRgb(color3));

    const render = (seconds) => {
      gl.uniform1f(uTime, seconds);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    const resize = () => {
      const width = Math.max(1, Math.round(window.innerWidth * RENDER_SCALE));
      const height = Math.max(1, Math.round(window.innerHeight * RENDER_SCALE));
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
      // Always set: the program may be new while the canvas size is unchanged
      // (e.g. React StrictMode re-running this effect on the same canvas).
      gl.viewport(0, 0, width, height);
      gl.uniform2f(uResolution, width, height);
    };

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();
    let raf = 0;
    let lastFrame = 0;

    const loop = (now) => {
      raf = requestAnimationFrame(loop);
      if (now - lastFrame < FRAME_INTERVAL) return;
      lastFrame = now;
      render((now - start) / 1000);
    };
    const play = () => {
      if (!raf && !document.hidden && !reduceMotion) raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
    const onVisibility = () => (document.hidden ? stop() : play());
    const onResize = () => {
      resize();
      if (!raf) render(reduceMotion ? 20 : (performance.now() - start) / 1000);
    };

    resize();
    render(20);
    canvas.style.opacity = "1";
    play();

    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      stop();
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      gl.deleteBuffer(buffer);
      gl.deleteVertexArray(vao);
      gl.deleteProgram(program);
    };
  }, [color1, color2, color3]);

  return <canvas ref={canvasRef} className="bg-grainient" aria-hidden="true" />;
}

export default GrainientBackground;
