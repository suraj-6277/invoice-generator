export const ProductBadge = () => {
  return (
    <div className="flex justify-center items-center">
      <svg
        viewBox="0 0 400 150"
        className="w-64 h-24"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background */}
        <rect width="400" height="150" fill="#f0f0f0" rx="8" />

        {/* Left Laurel */}
        <g transform="translate(40, 75)">
          <path
            d="M -15 -20 Q -10 -15 -5 -20 Q 0 -15 5 -20"
            stroke="#4f46e5"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M -15 -10 Q -10 -5 -5 -10 Q 0 -5 5 -10"
            stroke="#4f46e5"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M -15 0 Q -10 5 -5 0 Q 0 5 5 0"
            stroke="#4f46e5"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M -15 10 Q -10 15 -5 10 Q 0 15 5 10"
            stroke="#4f46e5"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M -15 20 Q -10 25 -5 20 Q 0 25 5 20"
            stroke="#4f46e5"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Right Laurel */}
        <g transform="translate(360, 75) scaleX(-1)">
          <path
            d="M -15 -20 Q -10 -15 -5 -20 Q 0 -15 5 -20"
            stroke="#4f46e5"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M -15 -10 Q -10 -5 -5 -10 Q 0 -5 5 -10"
            stroke="#4f46e5"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M -15 0 Q -10 5 -5 0 Q 0 5 5 0"
            stroke="#4f46e5"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M -15 10 Q -10 15 -5 10 Q 0 15 5 10"
            stroke="#4f46e5"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M -15 20 Q -10 25 -5 20 Q 0 25 5 20"
            stroke="#4f46e5"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />
        </g>

        {/* Text */}
        <text
          x="200"
          y="60"
          textAnchor="middle"
          className="font-bold text-sm"
          fill="#4f46e5"
          fontSize="16"
          fontFamily="sans-serif"
        >
          Product of the day
        </text>

        <text
          x="200"
          y="105"
          textAnchor="middle"
          className="font-bold text-3xl"
          fill="#4f46e5"
          fontSize="48"
          fontFamily="sans-serif"
        >
          2nd
        </text>
      </svg>
    </div>
  );
};
