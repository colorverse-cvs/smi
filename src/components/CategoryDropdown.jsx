import { useState, useRef, useEffect } from "react";

export default function CategoryDropdown({ value, onChange, data }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Extract unique categories from data
    const categories = [...new Set(data.map((item) => item.category))];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (category) => {
        onChange(category);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#077CEB] focus:border-transparent bg-gray-50 text-left flex justify-between items-center"
            >
                <span className={value ? "text-gray-900" : "text-gray-400"}>
                    {value || "Select"}
                </span>
                <svg
                    className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                    {categories.map((category) => (
                        <div
                            key={category}
                            onClick={() => handleSelect(category)}
                            className={`px-4 py-2.5 cursor-pointer hover:bg-blue-50 ${value === category ? "bg-blue-100 text-[#077CEB]" : "text-gray-700"
                                }`}
                        >
                            {category}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
