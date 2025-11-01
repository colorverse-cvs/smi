export default function OurCommitmentSection() {
  return (
    <section className="w-full bg-[#0D0D0D] text-white py-16 px-4 md:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left: Feature Cards */}
        <div className="flex-1 w-full bg-[#141414] rounded-2xl border border-gray-700 overflow-hidden flex flex-col justify-between">
          
          {/* Feature 1 */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-700 p-6 sm:p-10 text-center sm:text-left">
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-2">Serving 50+ Countries</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Expanding trade networks across continents with trusted global partnerships.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6 flex justify-center sm:justify-end w-full sm:w-auto">
              <img
                src="/images/setting-icon.svg"
                alt="Global reach"
                className="w-32 h-28 sm:w-48 sm:h-40 object-contain opacity-80"
              />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-gray-700 p-6 sm:p-10 text-center sm:text-left">
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-2">Fast & Secure Shipping</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Efficient logistics solutions ensuring timely and safe product deliveries.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6 flex justify-center sm:justify-end w-full sm:w-auto">
              <img
                src="/images/fast-shipping-icon.svg"
                alt="Shipping"
                className="w-32 h-28 sm:w-48 sm:h-40 object-contain opacity-80"
              />
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-6 sm:p-10 text-center sm:text-left">
            <div className="flex-1">
              <h4 className="font-semibold text-lg mb-2">Certified & Trusted Products</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Quality assurance backed by international certifications and compliance.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6 flex justify-center sm:justify-end w-full sm:w-auto">
              <img
                src="/images/setting-gear.svg"
                alt="Certified Products"
                className="w-32 h-28 sm:w-48 sm:h-40 object-contain opacity-80"
              />
            </div>
          </div>
        </div>

        {/* Right: Commitment Text */}
        <div className="ps-2 md:ps-0 w-full md:w-1/2 md:text-left">
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
