export default function ProjectCard({ title, description, tech, link, image }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:scale-105 p-8 border-2 hover:border-primary w-full max-w-4xl mx-auto mb-10"
    >
      {image && (
        <img
          src={image}
          alt={title + ' 대표 이미지'}
          className="w-full h-64 object-cover rounded-xl mb-6 border"
        />
      )}
      <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-700 text-base mb-6">{description}</p>
      <div className="flex flex-wrap gap-3">
        {tech.map((item, idx) => (
          <span
            key={idx}
            className="text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded"
          >
            {item}
          </span>
        ))}
      </div>
    </a>
  );
}
