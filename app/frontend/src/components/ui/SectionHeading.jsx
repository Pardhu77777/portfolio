import React from "react";

function SectionHeading({ label, title, subtitle, center = false, action }) {
  return (
    <div className={`reveal flex flex-wrap items-end gap-6 ${center ? "flex-col items-center text-center" : "justify-between"}`}>
      <div className={center ? "flex flex-col items-center" : ""}>
        {label && <span className="pill">{label}</span>}
        <h2 className="heading mt-5">
          <span className="text-gradient">{title}</span>
        </h2>
        <div className="title-bar" />
        {subtitle && <p className="subheading">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export default SectionHeading;
