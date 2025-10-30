import { useEffect, useRef, useState } from "react";
import CustomerFeedbackCard from "../../../components/CustomerFeedbackCard";

export default function CustomerFeedbackSection({ feedbacks }) {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let scrollInterval;
    if (!isPaused && scrollRef.current) {
      scrollInterval = setInterval(() => {
        const container = scrollRef.current;
        if (container) {
          container.scrollLeft += 1; // control speed here
          if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollLeft = 0; // loop scroll
          }
        }
      }, 20);
    }
    return () => clearInterval(scrollInterval);
  }, [isPaused]);

  return (
    <section className="bg-[#f5f5f5] py-20 px-6">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          Trusted by global partners across industries — from agriculture to healthcare to technology. <br />
          Here’s why businesses choose Sai Maulty International.
        </p>
      </div>

      {/* Horizontal Auto-scroll Wrapper */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {feedbacks.map((item, i) => (
          <div key={i} className="flex-shrink-0 w-[320px] sm:w-[400px] md:w-[520px]">
            <CustomerFeedbackCard feedback={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
