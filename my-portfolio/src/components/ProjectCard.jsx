export default function ProjectCard({ title, description, tech, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-xl shadow hover:shadow-lg transition transform hover:scale-[1.02] p-6 border hover:border-primary"
    >
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tech.map((item, idx) => (
          <span
            key={idx}
            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
          >
            {item}
          </span>
        ))}
      </div>
    </a>
  );
}
