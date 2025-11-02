import ServiceProductCard from "../../../components/ServiceProductCard";

export default function ScrollableProductCardSection() {
  const products = [
    {
      id: 1,
      title: "Chemicals & Fertilizers",
      description:
        "Connecting businesses with advanced consumer and industrial electronics sourced from trusted global manufacturers.",
      image: "/images/chemical-cat-poster-1.png",
    },
    {
      id: 2,
      title: "Pharmaceuticals",
      description:
        "Providing high-quality pharmaceutical ingredients and products that meet international compliance and safety standards.",
      image: "/images/pharma-cat-poster.png",
    },
    {
      id: 3,
      title: "Electronics",
      description:
        "Delivering innovative electronic solutions with top-grade manufacturing and quality assurance.",
      image: "/images/chemical-cat-poster-2.png",
    },
    {
      id: 4,
      title: "Agriculture",
      description:
        "Providing a wide range of essential Agriculture Products to support global food production and farming enterprises.",
      image: "/images/agriculture-cat-poster.png",
    }
  ];

  return (
    <section className="w-full bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row md:items-center gap-10">
        {/* Left - Product Cards */}
        <div className="md:w-2/3 w-full">
          {/* Desktop: Grid with hidden vertical scroll */}
          <div className="hidden md:grid grid-cols-2 gap-6 max-h-[80vh] overflow-y-auto pr-2 scrollbar-hide">
            {products.map((item) => (
              <ServiceProductCard key={item.id} item={item} />
            ))}
          </div>

          {/* Mobile: 2 cards per row */}
          <div className="md:hidden grid grid-cols-2 gap-4">
            {products.map((item) => (
              <ServiceProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* Right - Text Section */}
        <div className="md:w-1/3 md:flex md:flex-col md:justify-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Products</h2>
            <p className="text-gray-700 leading-relaxed text-base">
              At Sai Maulty International, our product categories reflect the
              industries driving global progress. Each offering is carefully
              sourced, quality-checked, and delivered with a commitment to trust
              and excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
