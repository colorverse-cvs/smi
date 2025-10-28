export default function HomeIntroBanner() {
  return (
    <section className="w-full bg-white px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-row items-center justify-between gap-6 md:gap-12">
        
        {/* --- Left Content --- */}
        <div className="flex-1 text-left">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Connecting the World Through{" "}
            <span className="text-blue-600">Trusted</span> Trade Partnerships
          </h1>

          <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base md:text-lg max-w-md">
            Your reliable partner in international imports and exports, delivering
            quality goods across industries with efficiency and trust.
          </p>

          <div className="mt-6 flex flex-row flex-wrap items-center gap-3 sm:gap-4">
            <button className="px-4 py-2 sm:px-6 sm:py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-700 hover:text-white transition text-sm sm:text-base">
              Explore products
            </button>
            <button className="px-4 py-2 sm:px-6 sm:py-3 bg-blue-600 text-white font-medium rounded-lg flex items-center gap-2 hover:bg-blue-700 transition text-sm sm:text-base">
              Contact us
              <img
                src="/icons/mail-icon.svg"
                alt="mail"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </button>
          </div>
        </div>

        {/* --- Right Image (Large & Responsive) --- */}
        <div className="flex-1 flex justify-center">
          <div className="w-[200px] sm:w-[280px] md:w-[400px] lg:w-[500px] xl:w-[600px]">
            <img
              src="/images/home-banner.svg"
              alt="home-intro-banner"
              className="w-full h-auto rounded-2xl object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
