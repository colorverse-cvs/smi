export default function HomeAboutUsSection() {
  return (
    <section className="w-full bg-[#0d0d0d] text-white px-6 md:px-12 lg:px-20 py-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-12">
        
        {/* --- Left Content --- */}
        <div className="flex-1">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">About Us</h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-blue-500 mb-6">
            Sai Multy International
          </h3>

          {/* Body Text */}
          <p className="text-gray-300 leading-relaxed mb-7 max-w-2xl">
            We connect businesses worldwide with dependable import and export solutions. 
            Backed by decades of expertise and a strong global network, we specialize in 
            Agriculture, Pharmaceuticals, Minerals, and more. Our mission is simple — 
            to deliver quality products, ensure seamless logistics, and help our partners 
            expand in international markets.
          </p>

          {/* Founders Section */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Founders</h4>

            <div className="flex flex-row flex-wrap justify-center sm:justify-start gap-6 sm:gap-8">
              {/* Founder 1 */}
              <div className="text-center sm:text-left">
                <div className="flex justify-center sm:justify-start">
                  <img
                    src="/images/owner-1.png"
                    alt="Jack Daniels"
                    className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-2xl"
                  />
                </div>
                <div className="mt-4">
                  <p className="font-semibold text-base sm:text-lg">Jack Daniels</p>
                  <p className="text-sm text-gray-400">Founder, and CEO</p>
                </div>
              </div>

              {/* Founder 2 */}
              <div className="text-center sm:text-left">
                <div className="flex justify-center sm:justify-start">
                  <img
                    src="/images/owner-2.png"
                    alt="Mary Sitaraman"
                    className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 object-cover rounded-2xl"
                  />
                </div>
                <div className="mt-4">
                  <p className="font-semibold text-base sm:text-lg">Mary Sitaraman</p>
                  <p className="text-sm text-gray-400">Co-Founder, and CTO</p>
                </div>
              </div>
            </div>
          </div>

          
        </div>

        {/* --- Right Feature Boxes --- */}
        <div className="flex-1 w-full bg-[#141414] rounded-2xl border border-gray-700 overflow-hidden flex flex-col justify-between h-full">
          {/* Feature 1 */}
          <div className="flex justify-between items-center border-b border-gray-700 p-10">
            <div>
              <h4 className="font-semibold text-lg">Serving 50+ Countries</h4>
              <p className="text-gray-400 text-sm mt-2 max-w-xs">
                Expanding trade networks across continents with trusted global partnerships.
              </p>
            </div>
            <div className="flex items-end">
              <img
                src="/images/setting-icon.svg"
                alt="Global reach"
                className="w-50 h-40 object-contain opacity-80 -mb-15"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex justify-between items-center border-b border-gray-700 p-10">
            <div>
              <h4 className="font-semibold text-lg">Fast & Secure Shipping</h4>
              <p className="text-gray-400 text-sm mt-2 max-w-xs">
                Efficient logistics solutions ensuring timely and safe product deliveries.
              </p>
            </div>
            <div className="flex items-end">
              <img
                src="/images/fast-shipping-icon.svg"
                alt="Shipping"
                className="w-50 h-40 object-contain opacity-80 -mb-10"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex justify-between items-center p-10 mb-0">
            <div>
              <h4 className="font-semibold text-lg">Certified & Trusted Products</h4>
              <p className="text-gray-400 text-sm mt-2 max-w-xs">
                Quality assurance backed by international certifications and compliance.
              </p>
            </div>
            <div className="flex items-end">
              <img
                src="/images/setting-gear.svg"
                alt="Certified Products"
                className="w-50 h-40 object-contain opacity-80 -mb-11"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
