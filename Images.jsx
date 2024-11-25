const images = [
  {
    id: 1,
    title: 'Modern Workspace',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    source: 'https://unsplash.com/photos/modern-workspace',
    description: 'A clean and modern workspace setup for developers.',
  },
  {
    id: 2,
    title: 'Team Collaboration',
    url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c',
    source: 'https://unsplash.com/photos/team-collaboration',
    description: 'Team members collaborating on a project.',
  },
  {
    id: 3,
    title: 'Code Review',
    url: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
    source: 'https://unsplash.com/photos/code-review',
    description: 'Developers conducting a code review session.',
  },
  {
    id: 4,
    title: 'Design Planning',
    url: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8',
    source: 'https://unsplash.com/photos/design-planning',
    description: 'UX designers planning website architecture.',
  },
  {
    id: 5,
    title: 'Mobile Development',
    url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c',
    source: 'https://unsplash.com/photos/mobile-development',
    description: 'Testing responsive design on mobile devices.',
  },
  {
    id: 6,
    title: 'Team Meeting',
    url: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657',
    source: 'https://unsplash.com/photos/team-meeting',
    description: 'Weekly team meeting and project discussion.',
  },
];

function Images() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8">Image Gallery</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image) => (
          <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <a
              href={image.source}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-48 object-cover hover:opacity-75 transition-opacity"
              />
            </a>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{image.title}</h2>
              <p className="text-gray-700">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}