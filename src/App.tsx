import About from "./content/about.mdx";
import { mdxComponents } from "./components/mdx";

function App() {
  return (
    <main className="flex min-h-[100dvh] w-full items-center justify-center bg-neutral-950 text-neutral-300">
      <article className="prose prose-invert prose-neutral w-full max-w-2xl px-6 py-16 prose-headings:font-medium prose-h1:text-2xl prose-h2:text-base prose-h2:text-neutral-500 prose-a:text-white prose-a:decoration-neutral-600 prose-a:underline-offset-4 prose-a:transition-colors prose-a:hover:decoration-white">
        <About components={mdxComponents} />
      </article>
    </main>
  );
}

export default App;
