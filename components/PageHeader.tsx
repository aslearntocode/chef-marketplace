interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-1">{title}</h1>
        <p className="text-gray-600 text-sm">
          {description}
        </p>
      </div>
    </section>
  );
} 