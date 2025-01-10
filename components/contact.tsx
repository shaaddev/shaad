import Theme from "./Theme";

export function Contact() {
  const links = [
    { name: "Github", url: "https://github.com/shaaddev" },
    { name: "Linkedin", url: "https://www.linkedin.com/in/rleehue-joseph/" },
    { name: "Medium", url: "https://medium.com/@shaaddev" },
  ];

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center items-center space-x-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary/80 transition-colors duration-200 "
          >
            {link.name}
          </a>
        ))}
        <Theme />
      </div>
    </footer>
  );
}
