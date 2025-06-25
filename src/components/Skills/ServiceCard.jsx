const ServiceCard = ({ imageUrl, title, description, tags }) => {
  return (
    <div className="p-6 transition-shadow border rounded-lg shadow-sm bg-card border-border hover:shadow-md">
      <div className="mb-4 text-left text-purple-500">{imageUrl}</div>
      <h3 className="mb-2 text-xl font-bold text-left">{title}</h3>
      <p className="mb-6 text-left text-gray-600 ">{description}</p>
      <div className="flex flex-wrap gap-2 px-3 py-1">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs bg-gray-200 rounded-full dark:bg-gray-600"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
