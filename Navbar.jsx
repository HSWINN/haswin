import { Link } from 'react-router-dom';

function Navbar() {
  const links = [
    { to: '/', text: 'Home' },
    { to: '/links', text: 'Links' },
    { to: '/videos', text: 'Videos' },
    { to: '/documents', text: 'Documents' },
    { to: '/images', text: 'Images' },
    { to: '/contact', text: 'Contact' },
  ];

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">Team Website</Link>
          <div className="hidden md:flex space-x-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="hover:text-gray-300 transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}