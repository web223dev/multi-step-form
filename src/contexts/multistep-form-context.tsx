"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface UserData {
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface MultiStepContextType {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  createUserData: (data: FormData) => void;
}

export const MultiStepContext = createContext({} as MultiStepContextType);

interface MultiStepContextProviderProps {
  children: ReactNode;
}

export function MultiStepContenxtProvider({
  children,
}: MultiStepContextProviderProps) {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState<UserData[]>([]);

  function createUserData(data: FormData) {
    const newUser: UserData = {
      id: uuidv4(),
      name: data.name,
      email: data.email,
      phone: data.phone,
    };
    setUser([...user, newUser]);
    console.log(newUser);
  }
  function nextStep() {
    if (step === 5) return;
    setStep((prev) => prev + 1);
  }
  function prevStep() {
    if (step === 1) return;
    setStep((prev) => prev - 1);
  }

  return (
    <MultiStepContext.Provider
      value={{
        step,
        nextStep,
        prevStep,
        createUserData,
      }}
    >
      {children}
    </MultiStepContext.Provider>
  );
}

export const useMultiContext = () => useContext(MultiStepContext);
