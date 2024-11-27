import { Footer } from "@/components/footer";
import { Steps } from "@/components/steps";
import { MultiStepContenxtProvider } from "@/contexts/multistep-form-context";
import { ReactNode } from "react";

interface MultiStepFormLayout {
  children: ReactNode;
}

export default function MultiStepFormLayout({ children }: MultiStepFormLayout) {
  return (
    <MultiStepContenxtProvider>
      <div className="lg:flex lg:h-auto lg:justify-center rounded-2xl bg-white shadow-lg mt-28 lg:mt-0 mx-4">
        <Steps />
        {children}
      </div>
      <Footer />
    </MultiStepContenxtProvider>
  );
}
