import { ErrorIcon } from "@/components/icons";

export const ErrorInfo = () => (
  <div className="mt-20 flex flex-col items-center gap-4">
    <ErrorIcon className="fill-red-accent-700" />
    <p className="text-lg text-center">
      Ups, coś poszło nie tak &#128543;
      <br />
      Prosimy odświeżyć stronę i spróbować ponownie.
    </p>
  </div>
);
