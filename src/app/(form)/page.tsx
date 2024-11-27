import { DisplayTitle } from "@/components/display-title";
import { MultiForm } from "@/components/multi-form";

export default function MultiStepForm() {
  return (
    <div className="mx-6 -mt-20 flex h-[450px] flex-col gap-2 rounded-md bg-white p-6 px-4 shadow-md lg:col-span-2 lg:col-start-2 lg:row-span-3 lg:row-start-2 lg:mx-0 lg:-mt-0 lg:h-[540px] lg:px-16 lg:py-0 lg:shadow-none">
      <DisplayTitle />
      <MultiForm />
    </div>
  );
}
