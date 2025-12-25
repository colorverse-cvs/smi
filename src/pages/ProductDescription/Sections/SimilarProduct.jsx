import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Data from "../../../Data.json";

export default function SimilarProductSection({ productCategory }) {
  const [similarProducts, setSimilarProducts] = useState([]);
  const [category, setcurrentProductCategory] = useState(productCategory);
  const navigate = useNavigate();

  useEffect(() => {
    if (!productCategory) return;

    // Filter products of same category and take only first 4
    const filtered = Data.product_catalog.filter((item) =>
      item.category?.toLowerCase().trim() === productCategory?.toLowerCase().trim()
    ).slice(0, 4);

    setSimilarProducts(filtered);
  }, [productCategory]);

  const handleViewProductDetails = (currentProduct) => {
    navigate("/productSpecification", { state: { currentProduct } });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleExplore = () => {
    navigate("/exploreProduct", {
      state: { category },
    });
  };


  if (similarProducts.length === 0) return null;

  return (

    <div className="w-full bg-gray-50 py-10 mt-16 rounded-xl shadow-inner">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold text-gray-800">
            Similar Products
          </h2>
          <button className="text-[#077CEB] text-sm hover:underline"
            onClick={handleExplore}
          >
            View All →
          </button>
        </div>

        {/* Product Row */}
        <div className="flex flex-wrap justify-between gap-6">
          {similarProducts.map((p, index) => (
            <div
              key={index}
              className="w-full sm:w-[48%] lg:w-[23%] border border-transparent rounded-xl bg-white shadow-sm hover:shadow-lg hover:border-[#077CEB] transition-all duration-200 p-4 flex flex-col items-center justify-between"
            >
              <div className="h-40 w-40 flex items-center justify-center bg-gray-50 rounded-md mb-4">
                <img
                  src={p.product_img || "/images/products/placeholder.jpg"}
                  alt={p.product_name}
                  className="h-32 w-32 object-contain"
                />
              </div>
              <h4 className="text-center text-sm font-medium mb-3 line-clamp-1">
                {p.product_name}
              </h4>
              <button
                onClick={() => handleViewProductDetails(p)}
                className="w-full py-2 text-sm text-[#077CEB] border border-[#077CEB] rounded-md hover:bg-[#077CEB] hover:text-white transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
