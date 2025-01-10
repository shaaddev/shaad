import { experience, Experience } from "@/constants/info";

export function _Experience() {
  return (
    <section id="experience">
      <div className="flex min-h-0 flex-col gap-y-3 my-12">
        <h2 className="text-xl font-bold mb-5">Experience</h2>
        {experience.map((e, index) => (
          <div key={index} className="flex flex-row justify-between">
            <div className="flex flex-col items-start leading-snug">
              <h2 className="text-sm sm:text-md font-medium">{e.company}</h2>
              <h3 className="text-sm sm:text-sm">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.location}</p>
            </div>
            <p className="text-sm text-muted-foreground">{e.duration}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
