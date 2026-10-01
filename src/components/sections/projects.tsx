import { LuArrowUpRight, LuCodeXml } from "react-icons/lu";

import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section id="projects" index="04" eyebrow="Projects" title="Things I've built.">
      <ol className="border-t">
        {projects.map((project, i) => (
          <li
            key={project.id}
            className="group grid gap-3 border-b py-8 md:grid-cols-[56px_1fr] md:gap-6 md:py-12"
          >
            <span className="type-label text-primary md:pt-4">
              {String(i + 1).padStart(2, "0")}
            </span>

            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h3 className="font-display text-4xl leading-none transition-colors group-hover:text-primary md:text-5xl">
                  {project.name}
                </h3>
                <span className="type-label text-muted-foreground">{project.role}</span>
              </div>

              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tools.map((tool) => (
                  <li key={tool} className="border px-2.5 py-1.5 type-label">
                    {tool}
                  </li>
                ))}
              </ul>

              {(project.demo || project.code) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.demo && (
                    <Button asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        Live demo
                        <LuArrowUpRight aria-hidden />
                      </a>
                    </Button>
                  )}
                  {project.code && (
                    <Button asChild variant="outline">
                      <a href={project.code} target="_blank" rel="noopener noreferrer">
                        Source
                        <LuCodeXml aria-hidden />
                      </a>
                    </Button>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
