import React, { useState } from "react";
import ToolCard from "./ToolCard";
import "./styles.css";

const tools = [
  {
    name: "LeetCode",
    link: "https://leetcode.com/",
    description:
      "Platform to practice coding problems and prepare for interviews.",
    category: "Code Practice",
  },
  {
    name: "GitHub Copilot",
    link: "https://github.com/features/copilot",
    description: "AI coding assistant that suggests code.",
    category: "AI Tools",
  },
  {
    name: "Figma",
    link: "https://figma.com",
    description: "Design UI/UX collaboratively in the cloud.",
    category: "Hackathon Tools",
  },
  {
    name: "Netlify",
    link: "https://netlify.com",
    description: "Fast hosting for frontend projects with CI/CD.",
    category: "Hosting & Deployment",
  },
  {
    name: "Notion",
    link: "https://notion.so",
    description: "Collaborative workspace for notes and tasks.",
    category: "Collaboration Tools",
  },
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredTools = tools.filter((tool) =>
    (tool.name + tool.description + tool.category)
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>🚀 Developer Toolbox</h1>

      <input
        type="text"
        placeholder="Search tools..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid">
        {filteredTools.map((tool, index) => (
          <ToolCard key={index} tool={tool} />
        ))}
      </div>
    </div>
  );
}
