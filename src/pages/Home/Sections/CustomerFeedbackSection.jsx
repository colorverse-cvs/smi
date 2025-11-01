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
          container.scrollLeft += 1;
          // Create seamless infinite scroll by duplicating content
          if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft = 0;
          }
        }
      }, 20);
    }
    return () => {
      if (scrollInterval) clearInterval(scrollInterval);
    };
  }, [isPaused]);

  // Duplicate feedbacks for seamless infinite scroll
  const duplicatedFeedbacks = [...feedbacks, ...feedbacks];

  return (
    <section className="bg-[#f5f5f5] py-20 px-6">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-base">
          Trusted by global partners across industries — from agriculture to healthcare to technology. <br />
          Here's why businesses choose Sai Maulty International.
        </p>
      </div>

      {/* Horizontal Auto-scroll Wrapper */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden scrollbar-hide"
        style={{ scrollBehavior: 'auto' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedFeedbacks.map((item, i) => (
          <div key={`${item.name}-${item.company}-${i}`} className="flex-shrink-0 w-[320px] sm:w-[400px] md:w-[520px]">
            <CustomerFeedbackCard feedback={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
