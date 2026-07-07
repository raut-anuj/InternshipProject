import React from "react";

export default function NameCard({ src }) {
  return (
    <div className="logo-card">
      <img className="logo-img" src={src} draggable={false} />
    </div>
  );
}
