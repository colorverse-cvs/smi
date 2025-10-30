export default function OurFounderSection() {
  return (
    <section className="w-full bg-[#F6F6F7] py-16 px-6 md:px-12 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#111111]">
            Our Founders
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The driving force behind Sai Maulty International lies in the shared
            vision of our Founder,{" "}
            <span className="font-semibold text-black">Jack Daniels</span> and
            Co-Founder,{" "}
            <span className="font-semibold text-black">Mary Sitaraman</span>.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Together, they bring decades of combined experience in global trade,
            logistics, and business strategy — united by a single mission: to
            redefine reliability and trust in international commerce.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Through their guidance, Sai Maulty International has evolved from a
            promising venture into a trusted global network that connects
            industries, strengthens trade relationships, and delivers value
            beyond borders.
          </p>
        </div>

        {/* Right Side - Founder Cards */}
        <div className="w-full md:w-1/2 bg-white rounded-2xl shadow-sm p-8 flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Founder 1 */}
          <div className="text-center">
            <img
              src="/images/owner-1.png"
              alt="Jack Daniels"
              className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-[#111111]">
              Jack Daniels
            </h3>
            <p className="text-gray-600 text-sm">Founder, and CEO</p>
          </div>

          {/* Founder 2 */}
          <div className="text-center">
            <img
              src="/images/owner-2.png"
              alt="Mary Sitaraman"
              className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-[#111111]">
              Mary Sitaraman
            </h3>
            <p className="text-gray-600 text-sm">Co-Founder, and CTO</p>
          </div>
        </div>
      </div>
    </section>
  );
}
