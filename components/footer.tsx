import Link from "next/link";

export function Copyright() {
  return (
    <div className="fixed bottom-2 left-5 z-20 hidden lg:block font-medium">
      <p className="text-sm text-slate-800 dark:text-slate-300">
        &copy; {new Date().getFullYear()} Made by{" "}
        <Link
          href="https://github.com/shaaddev"
          className="text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          @shaaddev
        </Link>
      </p>
    </div>
  );
}
