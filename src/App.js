import { useState } from "react";
import FormModal from "./components/FormModal";

function App() {
  const [showFormModal, setShowFormModal] = useState(false);

  const formModalDisplayHandler = () => {
    setShowFormModal(!showFormModal);
  };

  return (
    <div>
      {showFormModal && <FormModal isShowing={showFormModal} showModal={formModalDisplayHandler} />}
      <button onClick={formModalDisplayHandler}>Submit Property</button>
    </div>
  );
}

export default App;
