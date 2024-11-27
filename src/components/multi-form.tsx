"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";

import { useMultiContext } from "@/contexts/multistep-form-context";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { StepOne } from "@/components/step_one";
import { StepTwo } from "@/components/step_two";
import { StepThree } from "@/components/step_three";
import { StepFour } from "@/components/step_four";

const formSchema = z.object({
  name: z.string().min(1, { message: "This field is required" }),
  email: z.string().email({ message: "This field is required" }),
  phone: z.string().min(8, { message: "This field is required" }),
});

type NewFormData = z.infer<typeof formSchema>;

export function MultiForm() {
  const { step, nextStep, prevStep, createUserData } = useMultiContext();
  const form = useForm<NewFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "test",
      email: "test@example.com",
      phone: "123123123",
    },
  });
  function onSubmit(values: NewFormData) {
    nextStep();
    if (step === 4) {
      createUserData(values);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 lg:relative lg:flex-1 pt-8"
      >
        <FormProvider {...form}>
          {step === 1 && <StepOne />}
          {step === 2 && <StepTwo />}
          {step === 3 && <StepThree />}
          {step === 4 && <StepFour />}
        </FormProvider>
        {step < 5 && (
          <div className="bottom-0 left-0 flex w-full justify-between bg-white p-4 lg:bottom-0">
            <Button
              type="button"
              variant={"outline"}
              className={`${step === 1 ? "invisible" : ""}`}
              onClick={() => prevStep()}
            >
              Go Back
            </Button>
            <Button type="submit">
              {step === 4 ? "Confirm" : "Next Step"}
            </Button>
          </div>
        )}
      </form>
    </Form>
  );
}
