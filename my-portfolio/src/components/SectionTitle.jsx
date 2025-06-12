export default function SectionTitle({ number, title }) {
  return (
    <div className="mb-10">
      <div className="flex items-center space-x-4">
        <span className="text-lg text-primary font-semibold">{number}</span>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h2>
        <div className="flex-grow h-px bg-gray-300" />
      </div>
    </div>
  );
}