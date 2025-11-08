import { useState, useEffect, useContext } from "react";


import GrowBeyondSection from "../../CommonSections/GrowBeyond";
import { ProductContext } from "../../ProductContext/ProductContext";

const allProducts = {
  All: [
    { id: 1, name: "Paraffin Wax", img: "/petro1.png" },
    { id: 2, name: "Naphtha", img: "/petro2.png" },
  ],
  Pharmaceuticals: [
    { id: 1, name: "Microcrystalline Cellulose", img: "/img1.png" },
    { id: 2, name: "LACTOSE MONOHYDRATE", img: "/img2.png" },
    { id: 3, name: "Powder White Npk 15:15:15", img: "/img3.png" },
    { id: 4, name: "Ibuprofen Powder Api", img: "/img4.png" },
    { id: 5, name: "Ketoprofen Powder Api", img: "/img5.png" },
  ],
  Petrochemical: [
    { id: 1, name: "Paraffin Wax", img: "/petro1.png" },
    { id: 2, name: "Naphtha", img: "/petro2.png" },
  ],
  Agro: [
    { id: 1, name: "Urea Fertilizer", img: "/agro1.png" },
    { id: 2, name: "DAP Fertilizer", img: "/agro2.png" },
  ],
  Petrochemical: [
    { id: 1, name: "Paraffin Wax", img: "/petro1.png" },
    { id: 2, name: "Naphtha", img: "/petro2.png" },
  ],
  fertilzers: [
    { id: 1, name: "Paraffin Wax", img: "/petro1.png" },
    { id: 2, name: "Naphtha", img: "/petro2.png" },
  ],

};

export default function ExploreProduct() {
  const categories = Object.keys(allProducts);
  const [selectedCategory, setSelectedCategory] = useState("Pharmaceuticals");
  const [search, setSearch] = useState("");
  const { product } = useContext(ProductContext);

  const productsDetails = allProducts[selectedCategory].filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );


  useEffect(()=>{
    console.log("ProductData ", product);
  },[])

  return (
    <>
        <div className="w-full px-32 py-10">
        {/* --- TOP SECTION --- */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
            {/* Left: Breadcrumb + Title */}
            <div>
                <div className="text-sm text-gray-400 mb-2">
                Home &gt; Explore Product &gt; Pharmaceuticals
                </div>
                <h1 className="text-3xl font-semibold">Pharmaceuticals</h1>
            </div>

            {/* Right: Search + Tags */}
            <div className="flex flex-col w-full md:w-auto">
                {/* Search Bar */}
                <input
                type="text"
                placeholder="Search product"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-gray-50 p-3 mb-4 focus:outline-none focus:ring-2 focus:ring--[#077CEB]"
                />

                {/* Category Tags */}
                <div className="flex flex-wrap justify-end gap-3">
                {categories.map((cat) => (
                    <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-1 rounded-full border text-sm transition ${
                        selectedCategory === cat
                        ? "bg-[#077CEB] text-white border-[#077CEB]"
                        : "bg-gray-100 text-gray-700 hover:bg-blue-50"
                    }`}
                    >
                    {cat}
                    </button>
                ))}
                </div>
            </div>
            </div>

        {/* --- FILTER + PRODUCT GRID + PAGINATION SECTIONS (same as before) --- */}
            <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar Filters */}
            <aside className="w-full md:w-1/5 bg-gray-50 border-gray-50 rounded-lg p-5">
                <div className="flex justify-between items-center mb-3">
                <h3 className="font-semibold">Filters</h3>
                <button className="text--[#077CEB] text-sm">Clear filter</button>
                </div>

                <div className="mb-5">
                <label className="block text-sm font-medium mb-1">Price Range</label>
                <input type="range" min="10" max="1000" className="w-full" />
                </div>

                <div className="mb-5">
                <label className="block text-sm font-medium mb-1">Country of Origin</label>
                {["India", "Dubai", "China", "Japan"].map((c) => (
                    <div key={c} className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span className="text-sm">{c}</span>
                    </div>
                ))}
                </div>

                <div>
                <label className="block text-sm font-medium mb-1">Certification</label>
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
                {productsDetails.length === 0 ? (
                <p className="text-gray-500 text-center mt-10">No products found</p>
                ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {productsDetails.map((p) => (
                    <div
                        key={p.id}
                        className="
                            border border-transparent 
                            rounded-xl bg-white shadow-sm 
                            hover:shadow-lg hover:border--[#077CEB] 
                            transition-all duration-200 p-4 
                            flex flex-col items-center
                            "

                    >
                        <img
                        src={p.img}
                        alt={p.name}
                        className="h-40 w-40 object-contain mb-4"
                        />
                        <h4 className="text-center text-sm font-medium mb-3">
                        {p.name}
                        </h4>
                        <button className="w-full py-2 text-sm text-[#077CEB] border border--[#077CEB] rounded-md hover:bg-[#077CEB] hover:text-white cursor-pointer">
                        View Details
                        </button>
                    </div>
                    ))}
                </div>
                )}
            </section>
            </div>
        
        {/* Pagination */}

            <div className="flex justify-center items-center gap-3 mt-10">
                <button className="bg-gray-100 px-3 py-1 rounded-md">Prev</button>
                {[1, 2, 3].map((n) => (
                <button
                    key={n}
                    className={`w-8 h-8 flex items-center justify-center rounded-full border-gray-50 ${
                    n === 1
                        ? "bg-[#077CEB] text-white"
                        : "bg-gray-100 text-gray-700"
                    }`}
                >
                    {n}
                </button>
                ))}
                <button className="bg-gray-100 px-3 py-1 rounded-md">Next</button>
            </div>
        </div>

        <GrowBeyondSection />
    </>
  );
}
