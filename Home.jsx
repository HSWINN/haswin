const teamMembers = [
  {
    name: 'John Doe',
    role: 'Team Lead',
    image: 'https://via.placeholder.com/150',
    description: 'Experienced developer with 10+ years in web development.',
  },
  {
    name: 'Jane Smith',
    role: 'Designer',
    image: 'https://via.placeholder.com/150',
    description: 'Creative designer specializing in user interface design.',
  },
  {
    name: 'Mike Johnson',
    role: 'Developer',
    image: 'https://via.placeholder.com/150',
    description: 'Full-stack developer with expertise in React and Node.js.',
  },
];

function Home() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Team</h1>
        <p className="text-xl text-gray-600">
          We're a passionate group of developers and designers creating amazing web experiences.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div key={member.name} className="bg-white rounded-lg shadow-md p-6">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h2 className="text-xl font-bold text-center">{member.name}</h2>
            <p className="text-gray-600 text-center mb-2">{member.role}</p>
            <p className="text-gray-700">{member.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}