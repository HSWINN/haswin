const relatedLinks = [
  {
    title: 'MDN Web Docs',
    url: 'https://developer.mozilla.org',
    description: 'Comprehensive resource for web development documentation and learning materials.',
  },
  {
    title: 'React Documentation',
    url: 'https://react.dev',
    description: 'Official React documentation with guides, tutorials, and API references.',
  },
  {
    title: 'Tailwind CSS',
    url: 'https://tailwindcss.com',
    description: 'A utility-first CSS framework for rapidly building custom user interfaces.',
  },
  {
    title: 'GitHub',
    url: 'https://github.com',
    description: 'The world's leading software development platform for open source and private projects.',
  },
];

function Links() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8">Related Links</h1>
      <div className="grid gap-6">
        {relatedLinks.map((link) => (
          <div key={link.title} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                {link.title}
              </a>
            </h2>
            <p className="text-gray-700">{link.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}