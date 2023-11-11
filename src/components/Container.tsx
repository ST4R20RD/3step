import { useContext } from "react";
import { FormContext, FormContextType } from "../context/FormContext";
import { StarIcon } from "@heroicons/react/24/solid";

interface Props {
  children: JSX.Element;
}

export default function Container({ children }: Props) {
  const { formData, submitForm } = useContext(FormContext) as FormContextType;
  const { adults: adultsGuests, children: childrenGuests } = formData.step3;
  const readyToSubmit = formData.step1 && formData.step2 && formData.step3.adults;
  const AdultPrice = 10;
  const ChildrenPrice = 7;
  const TotalAdultPrice = AdultPrice * adultsGuests;
  const TotalChildrenPrice = ChildrenPrice * childrenGuests;
  const Total = TotalAdultPrice + TotalChildrenPrice;

  return (
    <div className="py-5 px-10 rounded-3xl border border-Teal">
      <div className="flex justify-between mb-4">
        <div>
          <span className="flex">
            <p className="text-white">{AdultPrice}€</p>
            <p className="text-gray-400">/Per Adult</p>
          </span>
          <span className="flex">
            <p className="text-white">{ChildrenPrice}€</p>
            <p className="text-gray-400">/Per Children</p>
          </span>
        </div>
        <span className="flex items-center">
          <StarIcon className="h-4 w-4 text-yellow-600" />
          <p className="text-white">4.7</p>
          <p className="text-gray-400">(925)</p>
        </span>
      </div>
      <div>{children}</div>
      <div>
        <div className="flex justify-between text-gray-400 py-4">
          <span>
            {AdultPrice} x {adultsGuests} Adult Guests:
          </span>
          <span>{TotalAdultPrice.toFixed(2)} €</span>
        </div>
        {childrenGuests > 0 && (
          <div className="flex justify-between text-gray-400 py-4">
            <span>
              {ChildrenPrice} x {childrenGuests} Child Guests:
            </span>
            <span>{TotalChildrenPrice.toFixed(2)} €</span>
          </div>
        )}
        <div className="flex justify-between text-white py-4 border-t border-Teal">
          <span>Total:</span>
          <span>{Total.toFixed(2)} €</span>
        </div>
      </div>
      <button
        className="bg-primary rounded-full px-4 py-3 mt-4 text-white disabled:bg-opacity-40"
        onClick={submitForm}
        disabled={!readyToSubmit}
      >
        Reserve
      </button>
    </div>
  );
}
