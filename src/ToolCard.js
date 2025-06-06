import React from "react";

export default function ToolCard({ tool }) {
  return (
    <div className="card">
      <h2>{tool.name}</h2>
      <p className="category">{tool.category}</p>
      <p>{tool.description}</p>
      <a href={tool.link} target="_blank" rel="noopener noreferrer">
        Visit Site →
      </a>
    </div>
  );
}
