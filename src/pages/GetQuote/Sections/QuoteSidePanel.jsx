import { useState, useRef, useEffect } from "react";
import CategoryDropdown from "../../../components/CategoryDropdown";
import SubCategoryDropdown from "../../../components/SubCategoryDropdown";
import MultiSelectProductDropdown from "../../../components/MultiSelectProductDropdown";
import SuccessPopup from "../../../components/SuccessPopup";
import Data from "../../../Data.json";

export default function QuoteSidePanel({ isOpen, onClose, productData }) {
    const drawerRef = useRef(null);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        companyName: "",
        email: "",
        country: "",
        phoneNumber: "",
        additionalRequirement: "",
    });

    // Initialize with the selected product if available
    const [productItems, setProductItems] = useState([
        {
            id: 1,
            category: productData?.category || "",
            subCategory: productData?.sub_category || "",
            productNames: productData?.product_name ? [productData.product_name] : [],
            quantity: "",
        },
    ]);

    // Handle click outside to close drawer
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (drawerRef.current && !drawerRef.current.contains(event.target) && isOpen) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen, onClose]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleProductChange = (id, field, value) => {
        setProductItems((prev) =>
            prev.map((item) => {
                if (item.id === id) {
                    // Reset dependent fields when category or subcategory changes
                    if (field === "category") {
                        return { ...item, category: value, subCategory: "", productNames: [] };
                    } else if (field === "subCategory") {
                        return { ...item, subCategory: value, productNames: [] };
                    }
                    return { ...item, [field]: value };
                }
                return item;
            })
        );
    };

    const handleAddMoreItem = () => {
        const newId = productItems.length + 1;
        setProductItems((prev) => [
            ...prev,
            {
                id: newId,
                category: "",
                subCategory: "",
                productNames: [],
                quantity: "",
            },
        ]);
    };

    const resetForm = () => {
        setFormData({
            name: "",
            companyName: "",
            email: "",
            country: "",
            phoneNumber: "",
            additionalRequirement: "",
        });
        setProductItems([
            {
                id: 1,
                category: "",
                subCategory: "",
                productNames: [],
                quantity: "",
            },
        ]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const quoteData = {
            ...formData,
            products: productItems,
            timestamp: new Date().toISOString(),
        };

        try {
            // TODO: Replace with your actual email API endpoint
            // Example: await fetch('/api/send-quote-email', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(quoteData)
            // });

            console.log("Quote submitted:", quoteData);

            // Close the drawer
            onClose();

            // Show success popup after a brief delay
            setTimeout(() => {
                setShowSuccessPopup(true);
            }, 300); // Wait for drawer to close

            // Reset form
            resetForm();

            // Auto-close popup after 3 seconds
            setTimeout(() => {
                setShowSuccessPopup(false);
            }, 3300); // 300ms drawer close + 3000ms display

        } catch (error) {
            console.error("Error submitting quote:", error);
            // Handle error (you can add error popup here)
        }
    };

    return (
        <>
            {/* Drawer Panel */}
            <div
                ref={drawerRef}
                className={`fixed top-0 right-0 h-full w-full md:w-[400px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto scrollbar-hide ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                style={{
                    scrollbarWidth: "none", // Firefox
                    msOverflowStyle: "none", // IE and Edge
                }}
            >
                <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

                <div className="p-6">
                    {/* Header */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-900">Request a Quote</h2>
                        <p className="text-sm text-gray-500 mt-2">
                            Fill in the details below and our team will provide you with product pricing, shipping, and availability information tailored to your country.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Name */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#077CEB] focus:border-transparent bg-gray-50"
                                required
                            />
                        </div>

                        {/* Company Name (Optional) */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Company Name (Optional)
                            </label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#077CEB] focus:border-transparent bg-gray-50"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#077CEB] focus:border-transparent bg-gray-50"
                                required
                            />
                        </div>

                        {/* Country */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Country
                            </label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#077CEB] focus:border-transparent bg-gray-50"
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#077CEB] focus:border-transparent bg-gray-50"
                                required
                            />
                        </div>

                        {/* Product Details Section */}
                        <div className="pt-4">
                            <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Product Details
                            </h3>

                            {/* Dynamic Product Items */}
                            {productItems.map((item, index) => (
                                <div key={item.id} className="mb-6">
                                    {index > 0 && (
                                        <div className="border-t border-gray-200 pt-4 mb-4"></div>
                                    )}

                                    {/* Category and Sub Category in a row */}
                                    <div className="mb-4">
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Category
                                            </label>
                                            <CategoryDropdown
                                                value={item.category}
                                                onChange={(value) => handleProductChange(item.id, "category", value)}
                                                data={Data.product_catalog}
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                                Sub Category
                                            </label>
                                            <SubCategoryDropdown
                                                value={item.subCategory}
                                                onChange={(value) => handleProductChange(item.id, "subCategory", value)}
                                                data={Data.product_catalog}
                                                selectedCategory={item.category}
                                            />
                                        </div>
                                    </div>

                                    {/* Product Name - Multi Select */}
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Product Name
                                        </label>
                                        <MultiSelectProductDropdown
                                            selectedProducts={item.productNames}
                                            onChange={(value) => handleProductChange(item.id, "productNames", value)}
                                            data={Data.product_catalog}
                                            selectedCategory={item.category}
                                            selectedSubCategory={item.subCategory}
                                        />
                                    </div>

                                    {/* Quantity */}
                                    <div className="mb-4">
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Quantity
                                        </label>
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="number"
                                                value={item.quantity}
                                                onChange={(e) =>
                                                    handleProductChange(item.id, "quantity", e.target.value)
                                                }
                                                placeholder="100"
                                                className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#077CEB] focus:border-transparent bg-gray-50"
                                                required
                                            />
                                            <span className="text-sm text-gray-600 font-medium">Liter</span>
                                        </div>
                                        <p className="text-xs text-blue-500 mt-1">
                                            Minimum Order Quantity (MOQ): 100-Bag
                                        </p>
                                    </div>
                                </div>
                            ))}

                            {/* Add More Item Button */}
                            <button
                                type="button"
                                onClick={handleAddMoreItem}
                                className="
                                mb-4
                                inline-flex
                                items-center
                                justify-center
                                px-4
                                py-1.5
                                text-sm
                                font-medium
                                text-blue-500
                                border
                                border-blue-400
                                rounded-md
                                bg-transparent
                                hover:bg-blue-50
                                transition-colors
                                duration-200
                                cursor-pointer
                            "
                            >
                                Add More Item
                            </button>


                            {/* Additional Requirement */}
                            <div className="mt-4">
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Additional Requirement
                                </label>
                                <textarea
                                    name="additionalRequirement"
                                    value={formData.additionalRequirement}
                                    onChange={handleChange}
                                    placeholder="None"
                                    rows="3"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#077CEB] focus:border-transparent bg-gray-50 resize-none"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="pt-4">
                            <button
                                type="submit"
                                className="w-full bg-[#077CEB] hover:bg-[#0666c2] text-white font-semibold py-3 rounded-lg transition-colors duration-200"
                            >
                                Get My Quote
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Success Popup */}
            <SuccessPopup
                isOpen={showSuccessPopup}
                onClose={() => setShowSuccessPopup(false)}
            />
        </>
    );
}
