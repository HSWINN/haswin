import { PlayIcon } from '@heroicons/react/24/solid';

const videos = [
  {
    id: '1',
    title: 'Introduction to React',
    embedId: 'dGcsHMXbSOA',
    description: 'A comprehensive guide to getting started with React development.',
  },
  {
    id: '2',
    title: 'Modern Web Development',
    embedId: 'w7ejDZ8SWv8',
    description: 'Learn about the latest trends and best practices in web development.',
  },
  {
    id: '3',
    title: 'UI/UX Design Principles',
    embedId: 'c9Wg6Cb_YlU',
    description: 'Essential design principles for creating better user experiences.',
  },
  {
    id: '4',
    title: 'Responsive Design Tutorial',
    embedId: 'srvUrASNj0s',
    description: 'Master the art of creating responsive websites that work on all devices.',
  },
  {
    id: '5',
    title: 'Web Performance Optimization',
    embedId: 'AQqFZ5t8uNc',
    description: 'Tips and techniques for improving website performance.',
  },
];

function Videos() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8">Educational Videos</h1>
      <div className="grid gap-8">
        {videos.map((video) => (
          <div key={video.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${video.embedId}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-[400px]"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 flex items-center">
                <PlayIcon className="h-6 w-6 text-red-600 mr-2" />
                {video.title}
              </h2>
              <p className="text-gray-700">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}