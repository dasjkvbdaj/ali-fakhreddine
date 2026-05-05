import { useState } from "react";
import { Section } from "./Section";
import { projects } from "@/data/portfolio";
import { ProjectPanel } from "./ProjectPanel";

export const Projects = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Projects"
      description="A showcase of my recent work and projects">

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectPanel
            key={p.id}
            project={p}
            open={openId === p.id}
            onToggle={() => setOpenId(openId === p.id ? null : p.id)}
            index={i}
          />
        ))}
      </div>
    </Section>
  );
};