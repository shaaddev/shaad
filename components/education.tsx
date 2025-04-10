import { education, Education } from "@/constants/info";

export function _Education() {
  return (
    <section id="education">
      <div className="flex min-h-0 flex-col gap-y-3 my-12">
        <h2 className="text-xl font-bold mb-5">Education</h2>
        {education.map((e: Education, index) => (
          <div key={index} className="flex flex-row justify-between">
            <div className="flex flex-col items-start leading-8 gap-2 mb-5">
              <h2 className="text-sm sm:text-md font-medium">{e.school}</h2>
              <h3 className="text-sm sm:text-base">{e.title}</h3>
              <p className="text-sm text-muted-foreground">{e.duration}</p>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              {e.degree}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
