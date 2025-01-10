import { about } from "@/constants/info";
import { Badge } from "./ui/badge";

export function Skills() {
  return (
    <section id="skills">
      <div className="flex min-h-0 flex-col gap-y-3 my-12">
        <h2 className="text-xl font-bold">Skills</h2>
        <div className="flex flex-wrap gap-1">
          {about.skills.map((skill: string, index) => (
            <Badge
              key={skill}
              className="rounded-lg bg-gray-800 dark:bg-gray-400"
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
