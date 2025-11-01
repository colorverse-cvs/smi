import ProductCard from "../../../components/ProductCard";


const products = [
  {
    id: 1,
    title: "Chemicals & Fertilizers",
    description:
      "Connecting businesses with advanced consumer and industrial electronics sourced from trusted global manufacturers.",
    image: "/images/pharma-cat-poster.png"
  },
  {
    id: 2,
    title: "Pharmacuiticals",
    description:
      "Providing high-quality pharmaceutical ingredients and products that meet international compliance and safety standards.",
    image: "/images/pharma-cat-poster.png"
  },
  {
    id: 3,
    title: "Chemicals & Fertilizers",
    description:
      "Connecting businesses with advanced consumer and industrial electronics sourced from trusted global manufacturers.",
    image: "/images/pharma-cat-poster.png"
  },
  {
    id: 4,
    title: "Agriculture",
    description:
      "Providing a wide range of essential Agriculture Products to support global food production and farming enterprises.",
    image: "/images/pharma-cat-poster.png"
  },
  
];

export default function ProductCategoriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Centered heading and description */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
          Explore Our Product Categories
        </h2>
        <p className="text-gray-600 mt-3">
          We offer a wide range of products across seven major categories.
        </p>

        {/* Grid of four cards (no scroll, perfectly aligned) */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        {/* Button below text, aligned to the right */}
        <div className="mt-6 flex justify-end">
        <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all whitespace-nowrap cursor-pointer">
            <span className="font-medium">Explore products</span>
            <img
                src="/icons/right-arrow.svg"
                alt="Jack Daniels"
                className="w-5 h-5"
            />
        </button>
        </div>

      </div>
    </section>
  );
}
