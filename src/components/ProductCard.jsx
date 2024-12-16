export default function ProductCard({ product }) {
  return (
    <div className="rounded-lg shadow-lg max-w-sm flex gap-2">
      <img
        src={product.image.url}
        alt={product.title}
        className="w-48 h-full object-cover"
      />
      <div>
        <h2 className="font-bold text-lg mb-2">{product.title}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-gray-900 font-semibold">{product.price}</p>
      </div>
    </div>
  );
}
