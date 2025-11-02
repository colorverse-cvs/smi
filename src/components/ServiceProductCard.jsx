export default function ServiceProductCard({ item }) {
  return (
    <div className="relative group rounded-2xl overflow-hidden w-full max-w-[400px] transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-[200px] md:h-[420px] w-full">
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
              <img
                src="/icons/arrow-up-right.svg"
                alt="Global reach"
                className="h-4 w-4 cursor-pointer"
              />
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


