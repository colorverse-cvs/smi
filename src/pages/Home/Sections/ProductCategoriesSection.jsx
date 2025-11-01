import ProductCard from "../../../components/ProductCard";


const products = [
  {
    id: 1,
    title: "Chemicals & Fertilizers",
    description:
      "Supplying dependable chemicals and fertilizers that enhance productivity and promote sustainable agriculture.",
    image: "/images/mission-handshake.svg"
  },
  {
    id: 2,
    title: "Pharmaceuticals",
    description:
      "Delivering high-quality pharmaceutical ingredients that support global healthcare industries.",
    image: "/images/mission-handshake.svg"
  },
  {
    id: 3,
    title: "Electronics & Equipment",
    description:
      "Providing precision-engineered components that power innovation across industries.",
    image: "/images/mission-handshake.svg"
  },
  {
    id: 4,
    title: "Metals & Minerals",
    description:
      "Offering a diverse range of metals and minerals essential for modern manufacturing.",
    image: "/images/mission-handshake.svg"
  },
];

export default function ProductCategoriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Centered heading and description */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Explore Our Product Categories
        </h2>
        <p className="text-gray-600 mt-3">
          We offer a wide range of products across seven major categories.
        </p>

        {/* Button below text, aligned to the right */}
        <div className="mt-6 flex justify-end">
        <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all whitespace-nowrap">
            <span className="font-medium">Explore products</span>
            <img
                src="/icons/right-arrow.svg"
                alt="Jack Daniels"
                className="w-5 h-5"
            />
        </button>
        </div>

        {/* Grid of four cards (no scroll, perfectly aligned) */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
