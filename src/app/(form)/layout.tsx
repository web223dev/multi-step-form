import { Footer } from "@/components/footer";
import { Steps } from "@/components/steps";
import { ReactNode } from "react";

interface MultiStepFormLayout {
  children: ReactNode;
}

export default function MultiStepFormLayout({ children }: MultiStepFormLayout) {
  return (
    <div className="mx-auto flex max-h-min flex-col rounded-md lg:my-40 lg:grid lg:max-w-[850px] lg:grid-cols-3 lg:grid-rows-5 lg:items-center lg:bg-white lg:p-6 lg:shadow-md">
      <Steps />
      {children}
      <Footer />
    </div>
  );
}
