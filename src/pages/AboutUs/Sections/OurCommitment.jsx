export default function OurCommitmentSection() {
  return (
    <section className="w-full bg-[#0D0D0D] text-white py-16 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left: Feature Cards */}
        <div className="w-full md:w-1/2 space-y-3">
          {/* Card 1 */}
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Serving 50+ Countries</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Expanding trade networks across continents with trusted global partnerships.
              </p>
            </div>
            <img
              src="/images/setting-icon.svg"
              alt="Global Trade"
              className="w-28 h-28 object-contain"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Fast & Secure Shipping</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Efficient logistics solutions ensuring timely and safe product deliveries.
              </p>
            </div>
            <img
              src="/images/fast-shipping-icon.svg"
              alt="Shipping"
              className="w-28 h-28 object-contain"
            />
          </div>

          {/* Card 3 */}
          <div className="bg-[#141414] border border-[#2A2A2A] rounded-lg p-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Certified & Trusted Products</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Quality assurance backed by international certifications and compliance.
              </p>
            </div>
            <img
              src="/images/setting-gear.svg"
              alt="Certified"
              className="w-28 h-28 object-contain"
            />
          </div>
        </div>

        {/* Right: Commitment Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Commitment</h2>
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
