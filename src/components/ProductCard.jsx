export default function ProductCard({ item }) {
  return (
    <div className="relative group rounded-2xl overflow-hidden w-full transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
      <div className="relative h-[320px] w-full">
        {/* Product Image */}
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover rounded-2xl"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600/85 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl">
          {/* Description */}
          <div className="absolute bottom-4 left-4 right-4 text-white text-sm leading-snug">
            {item.description}
          </div>

          {/* External Link Icon */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition duration-300">
            <button
              className="bg-blue-600 hover:bg-gray-400 text-white p-2 rounded-lg transition"
              aria-label="Open product"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 14L21 3m0 0v7m0-7h-7M5 5v14a2 2 0 002 2h14"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Title below image */}
      <h3 className="text-center text-base sm:text-lg font-semibold mt-3 text-gray-900">
        {item.title}
      </h3>
    </div>
  );
}
