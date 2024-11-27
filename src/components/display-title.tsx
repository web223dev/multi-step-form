"use client";
import { useMultiContext } from "@/contexts/multistep-form-context";
// import { ThankYouIcon } from './icon/icon'

const titleData = {
  title: [
    "Personal info",
    "Select your plan",
    "Pick add-ons",
    "Finishing up",
    "Thank you!",
  ],
  description: [
    "Please provide your name, email address, and phone number.",
    "You have the option of monthly or yearly billing.",
    "Add-ons help enhance your gaming experience.",
    "Double-check everything looks OK before confirming.",
    "Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please fell free to email us at support@loremgamin.com.",
  ],
};
export function DisplayTitle() {
  const { step } = useMultiContext();

  return (
    <div
      className={`${
        step === 5 &&
        "flex h-full flex-col items-center justify-center gap-5 text-center lg:px-16"
      }`}
    >
      <h1 className={`text-2xl font-bold text-sky-950 lg:text-[32px]`}>
        {titleData.title[step - 1]}
      </h1>
      <p className="text-gray-400 lg:text-lg">
        {titleData.description[step - 1]}
      </p>
    </div>
  );
}
