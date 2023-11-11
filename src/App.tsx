import { useContext } from "react";
import Wrapper from "./components/Wrapper";
import { FormContext, FormContextType } from "./context/FormContext";
import Result from "./components/Result";
import { Modal } from "./components/Modal";

function App() {
  const { result, isResultOpen, restartForm } = useContext(FormContext) as FormContextType;

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-Charcoal ">
      <Wrapper />
      {result && isResultOpen && (
        <Modal>
          <Result
            date={result.date}
            time={result.time}
            guests={result.guests}
            restart={restartForm}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
