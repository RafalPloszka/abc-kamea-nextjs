import { SuccessIcon } from "@/components/icons";

export const SuccessInfo = () => (
  <div className="mt-20 flex flex-col items-center gap-4">
    <SuccessIcon className="fill-green-accent-700" />
    <p className="text-lg text-center">
      Udało się! &#128524;
      <br />
      Zamówienie zostało przesłane i skontaktujemy się z Tobą w ciągu 24h.
    </p>
  </div>
);
