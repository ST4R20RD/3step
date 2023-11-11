import { useContext } from "react";
import { FormContext, FormContextType } from "../context/FormContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/* https://reactdatepicker.com/ */

export default function Calendar() {
  const { formData, handleChange, step, setStep } = useContext(FormContext) as FormContextType;
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let startDate = new Date(`${year}/${month}/${day}`);

  const selectedDate = new Date(formData.step1);
  const selectedMonth = selectedDate.toLocaleString("default", { month: "short" });
  const selectedDay = selectedDate.getDate();
  const formattedDate = `${selectedMonth.toUpperCase()} ${selectedDay}`;

  const DatePick = (date: Date) => {
    const originalDate = new Date(date);
    const year = originalDate.getFullYear();
    const month = String(originalDate.getMonth() + 1).padStart(2, "0"); // Adding 1 because months are zero-based
    const day = String(originalDate.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;

    return handleChange("step1", formattedDate);
  };

  return (
    <div className="flex flex-col items-start p-5">
      <button className="text-white" onClick={() => setStep(1)}>
        {formData.step1 ? formattedDate : "Date"}
      </button>
      <label className="text-sm text-gray-400">Select Date</label>
      {step === 1 && (
        <div className="flex justify-center w-full mt-4 min-h-[250px]">
          <DatePicker
            selected={startDate}
            onChange={DatePick}
            startDate={startDate}
            showPopperArrow={false}
            minDate={startDate}
            inline
          />
        </div>
      )}
    </div>
  );
}
