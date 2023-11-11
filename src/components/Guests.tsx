import { useContext } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { FormContext, FormContextType } from "../context/FormContext";

interface InputProps {
  name: string;
  value: number;
  description: string;
}

function Input({ name, value, description }: InputProps) {
  const label = name.charAt(0).toUpperCase() + name.slice(1);
  const { handleChange, increase, decrease } = useContext(FormContext) as FormContextType;

  return (
    <div className="flex justify-between mt-4">
      <div>
        <label className="text-white">{label}</label>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
      <span className="flex items-center">
        <button
          className="bg-teal-900 disabled:bg-teal-950 border border-zinc-500 text-zinc-500 py-2 px-2 rounded-full"
          onClick={() => {
            decrease(name, value);
          }}
          disabled={value <= 0}
        >
          <FaMinus />
        </button>
        <input
          className="w-5 text-center bg-transparent text-white"
          type="number"
          name={name}
          value={value}
          min="0"
          onChange={(e) => handleChange(name, e.target.value)}
        />
        <button
          className="bg-teal-900 border border-zinc-500 text-zinc-500 py-2 px-2 rounded-full"
          onClick={() => {
            increase(name, value);
          }}
        >
          <FaPlus />
        </button>
      </span>
    </div>
  );
}

export default function Guests() {
  const { formData, step, setStep } = useContext(FormContext) as FormContextType;
  const total = formData.step3.adults + formData.step3.children;

  return (
    <div className="p-5">
      <p className="text-white">
        {total === 0 ? (
          "Guests"
        ) : (
          <button onClick={() => setStep(3)}>
            {total} {total === 1 ? `Guest` : `Guests`}
          </button>
        )}
      </p>
      <p className="text-gray-400">Add Guests</p>
      {step === 3 && (
        <div className="flex flex-col justify-center bg-Midnight p-5 rounded-3xl mt-4 min-h-[250px]">
          <Input name={"adults"} value={formData.step3.adults} description="Ages 13 or above" />
          <Input name={"children"} value={formData.step3.children} description="Ages 0–12" />
        </div>
      )}
    </div>
  );
}
