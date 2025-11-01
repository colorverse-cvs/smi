export default function OurCommitmentSection() {
  return (
    <section className="w-full bg-[#0D0D0D] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 mx-32">
        
        {/* Left: Feature Cards */}
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

        {/* Right: Commitment Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Our Commitment</h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-3">
            We are dedicated to being your trusted global partner, focused on providing
            service and reliability you can count on.
          </p>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Every collaboration is guided by transparency, integrity, and a genuine
            commitment to your success in international markets.
          </p>
        </div>
      </div>
    </section>
  );
}
