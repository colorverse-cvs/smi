import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import GrowBeyondSection from "../../CommonSections/GrowBeyond";
import Data from "../../Data.json";

export default function ExploreProduct() {
  const location = useLocation();
  const { category } = location.state || {}; // received from navigate()

  const [search, setSearch] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Extract unique subcategories from the JSON based on selected category
  const uniqueSubCategories = [];
  Data.product_catalog.forEach((item) => {
    if (
      item.category === category &&
      !uniqueSubCategories.includes(item.sub_category)
    ) {
      uniqueSubCategories.push(item.sub_category);
    }
  });

  // Filter products based on selected subcategory or show all for category
  useEffect(() => {
    if (!category) return;
    let products = Data.product_catalog.filter(
      (item) => item.category === category
    );

    if (selectedSubCategory) {
      products = products.filter(
        (item) => item.sub_category === selectedSubCategory
      );
    }

    // Apply search filter
    if (search.trim() !== "") {
      products = products.filter((item) =>
        item.product_name.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredProducts(products);
    setCurrentPage(1); // reset to first page when filters change
  }, [category, selectedSubCategory, search]);

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <>
      <div className="w-full px-32 py-10">
        {/* --- TOP SECTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
          {/* Left: Breadcrumb + Title */}
          <div>
            <div className="text-sm text-gray-400 mb-2">
              Home &gt; Explore Product &gt; {category}
            </div>
            <h1 className="text-3xl font-semibold">{category}</h1>
          </div>

          {/* Right: Search + Tags */}
          <div className="flex flex-col w-full md:max-w-[40%]">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search product"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-[#077CEB]"
            />

            {/* Subcategory Tags */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedSubCategory("")}
                className={`px-4 py-1 rounded-full border text-sm transition ${
                  selectedSubCategory === ""
                    ? "bg-[#077CEB] text-white border-[#077CEB]"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:border-[#077CEB]"
                }`}
              >
                All
              </button>

              {uniqueSubCategories.map((subCat) => (
                <button
                  key={subCat}
                  onClick={() => setSelectedSubCategory(subCat)}
                  className={`px-4 py-1 rounded-full border text-sm transition ${
                    selectedSubCategory === subCat
                      ? "bg-[#077CEB] text-white border-[#077CEB]"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:border-[#077CEB]"
                  }`}
                >
                  {subCat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- FILTER + PRODUCT GRID SECTION --- */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar Filters */}
          <aside className="w-full md:w-1/5 bg-gray-50 border-gray-50 rounded-lg p-5">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold">Filters</h3>
              <button className="text-[#077CEB] text-sm">Clear filter</button>
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium mb-1">
                Price Range
              </label>
              <input type="range" min="10" max="1000" className="w-full" />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium mb-1">
                Country of Origin
              </label>
              {["India", "Dubai", "China", "Japan"].map((c) => (
                <div key={c} className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span className="text-sm">{c}</span>
                </div>
              ))}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Certification
              </label>
              {["ISO", "CE", "ROHS"].map((c) => (
                <div key={c} className="flex items-center gap-2">
                  <input type="checkbox" />
                  <span className="text-sm">{c}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* Product Grid */}
          <section className="w-full md:w-3/4">
            {currentProducts.length === 0 ? (
              <p className="text-gray-500 text-center mt-10">
                No products found
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentProducts.map((p, index) => (
                  <div
                    key={index}
                    className="border border-transparent rounded-xl bg-white shadow-sm hover:shadow-lg hover:border-[#077CEB] transition-all duration-200 p-4 flex flex-col items-center"
                  >
                    <div className="h-40 w-40 flex items-center justify-center bg-gray-50 rounded-md mb-4">
                      <img
                        src={p.img || "/placeholder.png"}
                        alt={p.product_name}
                        className="h-32 w-32 object-contain"
                      />
                    </div>
                    <h4 className="text-center text-sm font-medium mb-3">
                      {p.product_name}
                    </h4>
                    <button className="w-full py-2 text-sm text-[#077CEB] border border-[#077CEB] rounded-md hover:bg-[#077CEB] hover:text-white cursor-pointer">
                      View Details
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-10">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded-md ${
                currentPage === 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setCurrentPage(n)}
                className={`w-8 h-8 flex items-center justify-center rounded-full transition ${
                  n === currentPage
                    ? "bg-[#077CEB] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-blue-50"
                }`}
              >
                {n}
              </button>
            ))}

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded-md ${
                currentPage === totalPages
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Next
            </button>
          </div>
        )}
      </div>

      <GrowBeyondSection />
    </>
  );
}
