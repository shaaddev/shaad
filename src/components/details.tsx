export function Details() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-neutral-950 text-white">
      <div className="flex flex-col items-start justify-start">
        <h1>hello, shaad here</h1>
        <p>
          I am currently building{" "}
          <span className="underline cursor-pointer hover:no-underline transition-all ease-in-out duration-300">
            <a
              href="https://masira.store"
              target="_blank"
              rel="noopener noreferrer"
            >
              Masira
            </a>
          </span>
        </p>
      </div>
    </section>
  );
}
