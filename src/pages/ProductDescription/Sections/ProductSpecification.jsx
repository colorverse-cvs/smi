import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import SmiliarProductSection from './SimilarProduct';

export default function ProductSpecification() {
  const location = useLocation();
  const { currentProduct } = location.state || {};
  const [selectedImage, setSelectedImage] = useState(
    currentProduct?.product_img || "/placeholder.png"
  );

  useEffect(() => {
  }, [currentProduct]);
    console.log("currentProduct", currentProduct);

  if (!currentProduct) {
    return (
      <div className="p-10 text-center text-gray-500">
        Product details not found.
      </div>
    );
    
  }

  return (
    <div className="max-w-6xl mx-24 p-6 md:p-10">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-6">
        Home &nbsp;&gt;&nbsp; {currentProduct.category} &nbsp;&gt;&nbsp; {currentProduct.sub_category} &nbsp;&gt;&nbsp; {currentProduct.product_name}
      </div>

      {/* Layout */}
      <div className="flex flex-col md:flex-row gap-10">
        {/* LEFT: Product Images */}
        <div className="md:w-1/2 flex flex-col items-center">
          {/* Main Image */}
          <div className="border rounded-2xl p-6 bg-white shadow-sm w-full flex justify-center">
            <img
              src={selectedImage}
              alt={currentProduct.product_name}
              className="max-h-[400px] object-contain"
            />
          </div>

          {/* Thumbnail Gallery */}
          {currentProduct?.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              {currentProduct.map((img, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedImage(img)}
                  className={`border rounded-xl p-1 cursor-pointer transition ${
                    selectedImage === img
                      ? "border-[#077CEB]"
                      : "border-gray-200 hover:border-[#077CEB]"
                  }`}
                >
                  <img
                    src={img.product_img}
                    alt={`thumbnail-${i}`}
                    className="h-16 w-16 object-cover rounded-lg"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: Product Info */}
        <div className="md:w-1/2">
          <div className="flex justify-between items-start flex-wrap gap-4">
            <h1 className="text-2xl font-semibold text-gray-800">
              {currentProduct.product_name}
            </h1>
            <button className="bg-[#077CEB] hover:bg-[#0666c2] text-white text-sm px-5 py-2 rounded-lg flex items-center gap-2 transition">
              Get a Quote →
            </button>
          </div>

         {/* Key Specifications */}
            {currentProduct.key_specifications && (
            <div className="mt-6">
                <h2 className="font-semibold mb-1">Key Specifications</h2>

                {typeof currentProduct.key_specifications === "string" ? (
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                    {currentProduct.key_specifications}
                </p>
                ) : (
                <ul className="text-gray-600 text-sm space-y-1">
                    {Object.entries(currentProduct.key_specifications).map(
                    ([key, value], index) => (
                        <li key={index} className="flex">
                        <span className="font-medium capitalize mr-1">
                            {key.replace(/_/g, " ")}:
                        </span>
                        <span>{value}</span>
                        </li>
                    )
                    )}
                </ul>
                )}
            </div>
            )}


          {/* Description */}
          {currentProduct.description && (
            <div className="mt-6">
              <h2 className="font-semibold mb-1">Description</h2>
              <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">
                {currentProduct.description}
              </p>
            </div>
          )}

          {/* Certification */}
          {currentProduct.certification?.length > 0 && (
            <div className="mt-6">
              <h2 className="font-semibold mb-1">Certification</h2>
              <ul className="text-gray-600 text-sm list-disc ml-5">
                {currentProduct.certification.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          )}

          {/* MOQ */}
          {currentProduct.moq && (
            <div className="mt-6">
              <h2 className="font-semibold mb-1">
                Minimum Order Quantity (MOQ)
              </h2>
              <p className="text-gray-600 text-sm">{currentProduct.moq}</p>
            </div>
          )}

            {/* Delivery & Packaging */}

            {currentProduct.delivery_and_packaging && (
            <div className="mt-6">
                <h2 className="font-semibold mb-1">Delivery & Packaging</h2>

                {currentProduct.delivery_and_packaging.delivery_time && (
                <p className="text-gray-600 text-sm">
                    <span className="font-medium">Delivery Time:</span>{" "}
                    {currentProduct.delivery_and_packaging.delivery_time}
                </p>
                )}

                {currentProduct.delivery_and_packaging.packaging && (
                <p className="text-gray-600 text-sm">
                    <span className="font-medium">Packaging:</span>{" "}
                    {currentProduct.delivery_and_packaging.packaging}
                </p>
                )}

                {currentProduct.delivery_and_packaging.packing_standard && (
                <p className="text-gray-600 text-sm">
                    <span className="font-medium">Packing Standard:</span>{" "}
                    {currentProduct.delivery_and_packaging.packing_standard}
                </p>
                )}
            </div>
            )}
        </div>
      </div>
      <SmiliarProductSection productCategory={currentProduct.category} />
    </div>
  );
}
