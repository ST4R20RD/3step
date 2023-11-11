import { useState, createContext } from "react";

interface FormContextProviderChildren {
  children: JSX.Element;
}

interface FormData {
  step1: string;
  step2: string;
  step3: { adults: number; children: number };
}

export type FormContextType = {
  step: number;
  formData: FormData;
  handleChange: (name: string, value: string) => void;
  increase: (name: string, value: number) => void;
  decrease: (name: string, value: number) => void;
  setStep: (value: React.SetStateAction<number>) => void;
  submitForm: () => void;
  restartForm: () => void;
  result?: {
    date: string;
    time: string;
    guests: { adults: number; children: number };
  };
  isResultOpen: boolean;
  setIsResultOpen: (value: React.SetStateAction<boolean>) => void;
};

export const FormContext = createContext<FormContextType | null>(null);

export function FormContextProvider({ children }: FormContextProviderChildren) {
  const [isResultOpen, setIsResultOpen] = useState<boolean>(false);

  const [result, setResult] = useState<{
    date: string;
    time: string;
    guests: { adults: number; children: number };
  }>();

  const initialFormData: FormData = {
    step1: "",
    step2: "",
    step3: {
      adults: 0,
      children: 0,
    },
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [step, setStep] = useState(1);

  const handleChange = (name: string, value: string) => {
    const intValue = parseInt(value);

    if (step === 3) {
      setFormData((prevData) => ({
        ...prevData,
        step3: {
          ...prevData.step3,
          [name]: intValue,
          total:
            name === "adults"
              ? intValue + prevData.step3.children
              : prevData.step3.adults + intValue,
        },
      }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
      setStep((currentStep) => currentStep + 1);
    }
  };

  const increase = (name: string, value: number) => {
    setFormData((prevData) => ({
      ...prevData,
      step3: {
        ...prevData.step3,
        [name]: value + 1,
        total: name === "adults" ? value + prevData.step3.children : prevData.step3.adults + value,
      },
    }));
  };

  const decrease = (name: string, value: number) => {
    if (value > 0) {
      setFormData((prevData) => ({
        ...prevData,
        step3: {
          ...prevData.step3,
          [name]: value - 1,
          total:
            name === "adults" ? value + prevData.step3.children : prevData.step3.adults + value,
        },
      }));
    }
  };

  const restartForm = () => {
    setFormData(initialFormData);
    setStep(1);
    setIsResultOpen(false);
  };

  const submitForm = () => {
    setResult({ date: formData.step1, time: formData.step2, guests: formData.step3 });
    setIsResultOpen(true);
  };
  const contextValue = {
    step,
    formData,
    handleChange,
    increase,
    decrease,
    setStep,
    submitForm,
    restartForm,
    result,
    isResultOpen,
    setIsResultOpen,
  };
  return <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>;
}
