import { useState, useRef, useEffect } from "react";

export default function MultiSelectProductDropdown({
    selectedProducts,
    onChange,
    data,
    selectedCategory,
    selectedSubCategory
}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Extract products based on selected category and subcategory
    const products = data.filter((item) => {
        if (!selectedCategory) return false;
        if (selectedSubCategory) {
            return item.category === selectedCategory && item.sub_category === selectedSubCategory;
        }
        return item.category === selectedCategory;
    });

    // Get unique product names
    const uniqueProducts = [...new Set(products.map((item) => item.product_name))];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleToggleProduct = (productName) => {
        if (selectedProducts.includes(productName)) {
            onChange(selectedProducts.filter((p) => p !== productName));
        } else {
            onChange([...selectedProducts, productName]);
        }
    };

    const handleRemoveProduct = (productName, e) => {
        e.stopPropagation();
        onChange(selectedProducts.filter((p) => p !== productName));
    };

    const isDisabled = !selectedCategory;

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => !isDisabled && setIsOpen(!isOpen)}
                disabled={isDisabled}
                className={`w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#077CEB] focus:border-transparent bg-gray-50 text-left flex justify-between items-start ${isDisabled ? "opacity-50 cursor-not-allowed" : ""
                    }`}
            >
                <div className="flex-1 flex flex-wrap gap-1">
                    {selectedProducts.length === 0 ? (
                        <span className="text-gray-400">Select</span>
                    ) : (
                        selectedProducts.map((product) => (
                            <span
                                key={product}
                                className="inline-flex items-center gap-1 px-2 py-1 bg-[#077CEB] text-white text-xs rounded-md"
                            >
                                {product}
                                <button
                                    type="button"
                                    onClick={(e) => handleRemoveProduct(product, e)}
                                    className="hover:bg-[#0666c2] rounded-full p-0.5"
                                >
                                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </span>
                        ))
                    )}
                </div>
                <svg
                    className={`w-4 h-4 transition-transform flex-shrink-0 mt-1 ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && uniqueProducts.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {uniqueProducts.map((productName) => (
                        <div
                            key={productName}
                            onClick={() => handleToggleProduct(productName)}
                            className="px-4 py-2.5 cursor-pointer hover:bg-blue-50 flex items-center gap-2"
                        >
                            <input
                                type="checkbox"
                                checked={selectedProducts.includes(productName)}
                                onChange={() => { }}
                                className="w-4 h-4 text-[#077CEB] border-gray-300 rounded focus:ring-[#077CEB]"
                            />
                            <span className={selectedProducts.includes(productName) ? "text-[#077CEB] font-medium" : "text-gray-700"}>
                                {productName}
                            </span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
