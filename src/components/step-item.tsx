"use client";
import { useMultiContext } from "@/contexts/multistep-form-context";

interface StepItemProps {
  infos: {
    num: number;
    title: string;
    description: string;
  };
}
export function StepItem({ infos }: StepItemProps) {
  const { step } = useMultiContext();
  const isFinished = step === 5 && infos.num === 4;
  return (
    <li className="flex items-center gap-4 uppercase">
      <span
        className={`flex size-10 items-center justify-center rounded-full border-2 font-medium ${
          step === infos.num || isFinished
            ? "border-indigo-300 bg-indigo-300 text-black"
            : ""
        }`}
      >
        {infos.num}
      </span>
      <div className="hidden flex-col lg:flex">
        <p className="text-sm text-gray-400">{infos.title}</p>
        <p>{infos.description}</p>
      </div>
    </li>
  );
}
