export default function CustomerFeedbackCard({ feedback }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Feedback text */}
      <p className="text-gray-900 text-base leading-relaxed mb-8">
        {feedback.text}
      </p>

      {/* Bottom section */}
      <div className="flex items-center gap-4">
        {/* Profile image */}
        <img
          src={feedback.image}
          alt={feedback.name}
          className="w-12 h-12 rounded-full object-cover"
        />

        <div className="flex flex-col">
          {/* Stars */}
          <div className="flex mb-1">
            {Array.from({ length: feedback.rating }).map((_, i) => (
              <svg
                key={feedback.id}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="#FACC15"
                className="w-5 h-5"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.463a1 1 0 00-.364 1.118l1.287 3.974c.3.921-.755 1.688-1.54 1.118l-3.388-2.462a1 1 0 00-1.175 0l-3.388 2.462c-.785.57-1.84-.197-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L2.045 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
              </svg>
            ))}
          </div>

          {/* Name + Company */}
          <p className="text-sm md:text-base">
            {feedback.name}
            <span className="font-normal">, {feedback.company}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
