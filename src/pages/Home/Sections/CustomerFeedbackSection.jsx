import { useEffect, useRef, useState } from "react";
import CustomerFeedbackCard from "../../../components/CustomerFeedbackCard";

export default function CustomerFeedbackSection({ feedbacks }) {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    let scrollInterval;

    if (!isPaused && !userInteracted && scrollRef.current) {
      scrollInterval = setInterval(() => {
        const container = scrollRef.current;
        if (container) {
          container.scrollLeft += 1;
          // Loop scroll seamlessly
          if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft = 0;
          }
        }
      }, 20);
    }

    return () => clearInterval(scrollInterval);
  }, [isPaused, userInteracted]);

  // Detect manual swipe/scroll and pause auto scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let timeoutId;

    const handleUserScroll = () => {
      setUserInteracted(true);
      clearTimeout(timeoutId);
      // resume after 5 seconds of inactivity (optional)
      timeoutId = setTimeout(() => setUserInteracted(false), 5000);
    };

    container.addEventListener("touchstart", handleUserScroll);
    container.addEventListener("wheel", handleUserScroll);
    container.addEventListener("mousedown", handleUserScroll);

    return () => {
      container.removeEventListener("touchstart", handleUserScroll);
      container.removeEventListener("wheel", handleUserScroll);
      container.removeEventListener("mousedown", handleUserScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  // Duplicate feedbacks for seamless infinite scroll
  const duplicatedFeedbacks = [...feedbacks, ...feedbacks];

  return (
    <section className="bg-[#f5f5f5] py-20 px-6">
      {/* Heading */}
      <div className="md:text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 text-base">
          Trusted by global partners across industries from agriculture to healthcare to technology. <br />
          Here's why businesses choose Sai Maulty International.
        </p>
      </div>

      {/* Horizontal Auto-scroll Wrapper */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{ scrollBehavior: "smooth" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {duplicatedFeedbacks.map((item, i) => (
          <div
            key={`${item.name}-${item.company}-${i}`}
            className="flex-shrink-0 w-[320px] sm:w-[400px] md:w-[520px]"
          >
            <CustomerFeedbackCard feedback={item} />
          </div>
        ))}
      </div>
    </section>
  );
}

