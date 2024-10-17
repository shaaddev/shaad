import { Link } from "next-view-transitions";
import { notes } from "@/constants/info";
import { Name } from "./name";

export default function Page() {
  return (
    <div className="flex min-h-0 flex-col gap-y-3">
      <h2 className="text-xl font-bold">Notes</h2>
      <Name />
      <div className="flex flex-col items-start gap-5">
        {notes.map((note) => (
          <Link
            key={note.name}
            href={note.link}
            className="rounded-lg p-2 hover:bg-primary/10 w-full transition-all duration-300 ease-in-out"
          >
            <h2 className="text-sm sm:text-md font-bold">{note.name}</h2>
            <p className="text-sm sm:text-sm text-muted-foreground">
              {note.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
