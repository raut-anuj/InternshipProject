import React from "react";

export default function NameCard({ src }) {
  return (
    <div className="logo-card">
      <img
        src={src}
        alt="Logo"
        draggable="false"
        className="logo-img"
      />
    </div>
  );
}