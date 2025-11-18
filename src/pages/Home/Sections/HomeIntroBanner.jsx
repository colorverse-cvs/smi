import { useNavigate } from "react-router-dom";

export default function HomeIntroBanner() {
  const navigate = useNavigate();

  const handleExplore = () => {
    navigate("/exploreProduct", {
      state: { category : '' },
    });
  };

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <section className="pe-6 md:pe-0 w-full bg-white px-4 sm:px-6 md:px-10 lg:px-20 py-10 md:py-16 overflow-hidden">
      {/* Use column layout for mobile, row for desktop */}
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-12">
        
        {/* --- Left Content (Text Section) --- */}
        <div className="flex-1 md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Connecting the World Through{" "}
            <span className="text-blue-600">Trusted</span> Trade Partnerships
          </h1>

          <p className="mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto md:mx-0">
            Your reliable partner in international imports and exports, delivering
            quality goods across industries with efficiency and trust.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-5">
            <button className="w-full sm:w-auto px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg hover:bg-blue-700 hover:text-white transition text-base cursor-pointer"
                    onClick={handleExplore}>
              Explore products
            </button>
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition text-base cursor-pointer"
                    onClick={handleContact}>
              Contact us
              <img
                src="/icons/mail-icon.svg"
                alt="mail"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>

        {/* --- Right Image (Top on Mobile) --- */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
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


