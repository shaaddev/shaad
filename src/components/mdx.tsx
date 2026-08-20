import type { MDXComponents } from "mdx/types";

/**
 * Prose-level overrides. Anything not listed here falls through to
 * @tailwindcss/typography's defaults, applied via the `prose` class in App.
 */
export const mdxComponents: MDXComponents = {
  a: ({ href, children, ...props }) => {
    const external = !!href && !href.startsWith("/") && !href.startsWith("#");
    return (
      <a
        href={href}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      >
        {children}
      </a>
    );
  },
};
