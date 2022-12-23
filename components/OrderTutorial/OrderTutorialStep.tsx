interface OrderTutorialStepProps {
  title: string;
  text: string;
  isFinal?: boolean;
}

export const OrderTutorialStep = ({
  title,
  text,
  isFinal = false,
}: OrderTutorialStepProps) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <p className="text-2xl font-bold">{title}</p>
        {isFinal ? (
          <svg
            className="w-8 text-indigo-accent-400"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <polyline
              fill="none"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              points="6,12 10,16 18,8"
            />
          </svg>
        ) : (
          <svg
            className="w-6 text-gray-700 transform rotate-90 sm:rotate-0 text-indigo-accent-400"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <line
              fill="none"
              strokeMiterlimit="10"
              x1="2"
              y1="12"
              x2="22"
              y2="12"
            />
            <polyline
              fill="none"
              strokeMiterlimit="10"
              points="15,5 22,12 15,19 "
            />
          </svg>
        )}
      </div>
      <p className="text-gray-600">{text}</p>
    </div>
  );
};
