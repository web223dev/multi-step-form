"use client";
import { formDataSchema } from "@/lib/schema";
import FormValues, { Steps } from "@/types/form.types";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import CompleteStep from "./CompleteStep";

const steps: Steps = [
  { id: "complete", name: "Complete", fields: [] },
  // { id: "step-1", name: "Your info", fields: ["name", "email", "phone"] },
  { id: "step-1", name: "Your info", fields: ["name"] },
  { id: "step-2", name: "", fields: [] },
  { id: "step-3", name: "", fields: [] },
  { id: "step-4", name: "", fields: [] },
];

const LAST_STEP = steps.length - 1;
const COMPLETE_STEP = 0;

export default function MultiStepForm() {
  const [currentStep, setCurrentStep] = useState(2);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    mode: "all",
    defaultValues: {
      name: "",
      // email: "",
      // phone: "",
      // address: "",
    },
    resolver: zodResolver(formDataSchema),
  });

  const onSubmit = useCallback((data: FormValues) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    setCurrentStep(COMPLETE_STEP);
  }, []);

  const handleNav = async (index: number) => {
    let isValid = true;
    let failedStep = currentStep;
    for (let i = currentStep; i <= index && isValid; i++) {
      isValid = await form.trigger(steps[i].fields);
      if (!isValid) {
        failedStep = i;
      }
    }
    if (isValid) {
      setCurrentStep(index);
    } else {
      setCurrentStep(failedStep);
    }
  };

  return (
    <>
      <div className="bg-sidebar-mobile w-full h-full bg-contain bg-top bg-no-repeat top-0 fixed flex md:hidden" />
      {/* Steps - mobile */}
      <div className="flex my-5 md:hidden">
        <div className="z-20 my-3 ml-2 flex items-center">
          <Button
            className={`size-9 rounded-full border font-bold text-brand-alabaster`}
          >
            1
          </Button>
        </div>
        <div className="z-20 my-3 ml-2 flex items-center">
          <Button
            className={`size-9 rounded-full border font-bold text-brand-alabaster`}
          >
            2
          </Button>
        </div>
        <div className="z-20 my-3 ml-2 flex items-center">
          <Button
            className={`size-9 rounded-full border font-bold text-brand-alabaster`}
          >
            3
          </Button>
        </div>
        <div className="z-20 my-3 ml-2 flex items-center">
          <Button
            className={`size-9 rounded-full border font-bold text-brand-alabaster`}
          >
            4
          </Button>
        </div>
      </div>
      <div className="z-10 w-full max-w-[350px] md:max-w-[1050px] p-4">
        <div className="bg-white flex md:h-min md:min-h-[600px] rounded-xl md:rounded-2xl p-4 shadow-xl">
          {/* Steps - desktop */}
          <div className="hidden md:visible md:flex flex-col rounded-xl min-w-[274px] bg-sidebar-desktop bg-cover bg-bottom bg-no-repeat p-5 pt-7">
            <div className="my-3 ml-2 flex items-center">
              <Button className="size-8 border rounded-full text-sm font-bold text-brand-alabaster">
                1
              </Button>
              <div className="flex flex-col items-baseline uppercase ml-5">
                <span className="text-xs text-brand-light-gray">Step 1</span>
                <span className="font-bold tracking-wider text-brand-alabaster">
                  Your info
                </span>
              </div>
            </div>
            <div className="my-3 ml-2 flex items-center">
              <Button className="size-8 border rounded-full text-sm font-bold text-brand-alabaster">
                2
              </Button>
              <div className="flex flex-col items-baseline uppercase ml-5">
                <span className="text-xs text-brand-light-gray">Step 1</span>
                <span className="font-bold tracking-wider text-brand-alabaster">
                  Your info
                </span>
              </div>
            </div>
            <div className="my-3 ml-2 flex items-center">
              <Button className="size-8 border rounded-full text-sm font-bold text-brand-alabaster">
                3
              </Button>
              <div className="flex flex-col items-baseline uppercase ml-5">
                <span className="text-xs text-brand-light-gray">Step 1</span>
                <span className="font-bold tracking-wider text-brand-alabaster">
                  Your info
                </span>
              </div>
            </div>
            <div className="my-3 ml-2 flex items-center">
              <Button className="size-8 border rounded-full text-sm font-bold text-brand-alabaster">
                4
              </Button>
              <div className="flex flex-col items-baseline uppercase ml-5">
                <span className="text-xs text-brand-light-gray">Step 1</span>
                <span className="font-bold tracking-wider text-brand-alabaster">
                  Your info
                </span>
              </div>
            </div>
          </div>
          {/* Form */}
          <Form {...form}>
            <form
              className="flex grow flex-col px-4 md:px-12 lg:px-24"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              {currentStep === 1 && <Step1 />}
              {currentStep === 2 && <Step2 />}
              {currentStep === 3 && <Step3 />}
              {currentStep === 4 && <Step4 />}

              {currentStep === COMPLETE_STEP && <CompleteStep />}

              <div className="fixed md:static bottom-0 left-0 right-0 flex w-full justify-between items-center bg-white px-5 py-3 md:mb-4 md:mt-auto md:p-0">
                <Button
                  disabled={currentStep === 1 || currentStep === COMPLETE_STEP}
                  type="button"
                  className="shadow-none flex w-min text-nowrap text-base font-medium text-brand-cool-gray hover:text-brand-marine-blue disabled:invisible"
                  onClick={() => {
                    handleNav(currentStep - 1);
                  }}
                >
                  Go Back
                </Button>
                <Button
                  disabled={
                    currentStep === LAST_STEP || currentStep === COMPLETE_STEP
                  }
                  type="button"
                  className="flex w-min bg-brand-marine-blue hover:bg-blue-900 rounded-md md:rounded-lg h-12 px-6 text-base font-medium text-brand-magnolia disabled:hidden"
                  onClick={() => {
                    handleNav(currentStep + 1);
                  }}
                >
                  Next Step
                </Button>
                <Button
                  disabled={currentStep !== LAST_STEP}
                  type="submit"
                  className="flex w-min rounded-md bg-brand-purplish-blue h-12 px-7 text-base font-medium text-brand-magnolia hover:opacity-70 disabled:hidden md:rounded-lg"
                >
                  Confirm
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
}
