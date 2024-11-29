import FormValues from "@/types/form.types";
import { useFormContext } from "react-hook-form";

export default function Step4() {
  const { getValues } = useFormContext<FormValues>();
  const allValues = getValues();
  const summaryData = {
    ...allValues,
    media: {
      fileName: allValues.media?.name || "No file uploaded",
    },
  };

  return (
    <>
      <h1 className="my-3 md:mt-8">Finishing up</h1>
      <p className="mb-5 md:mb-10">
        Double-check everything looks OK before confirming.
      </p>
      <div className="bg-brand-magnolia p-5 rounded-xl flex flex-col">
        {Object.entries(summaryData).map(([key, value]) =>
          value !== null ? (
            <div
              key={key}
              className="flex justify-between items-center gap-3 mb-5"
            >
              <h6 className="capitalize">{key}</h6>
              <span>
                {typeof value === "object"
                  ? JSON.stringify(value)
                  : String(value)}
              </span>
            </div>
          ) : (
            <span>Null</span>
          )
        )}
      </div>
    </>
  );
}
