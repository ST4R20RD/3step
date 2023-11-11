import { useContext } from "react";
import { FormContext, FormContextType } from "../context/FormContext";

const AVAILABLETIMES = ["10:30", "12:30", "14:30", "16:30"];

export default function ReservationTimes() {
  const { formData, handleChange, step, setStep } = useContext(FormContext) as FormContextType;

  return (
    <div className="flex flex-col items-start p-5">
      <button className="text-white" onClick={() => setStep(2)}>
        {formData.step2 ? formData.step2 : "Time"}
      </button>
      <p className="text-gray-400">Select Start Time</p>
      {step === 2 && (
        <div className="flex items-center mt-4 min-h-[250px]">
          {AVAILABLETIMES.map((time, i) => {
            return (
              <button
                className="bg-primary text-white h-12 py-2 px-4 m-2 rounded-xl"
                key={i}
                onClick={(e) => handleChange("step2", time)}
              >
                {time}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
