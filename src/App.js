import { useState } from "react";
import FormModal from "./components/FormModal";

function App() {
  const [showFormModal, setShowFormModal] = useState(false);

  const formModalDisplayHandler = () => {
    setShowFormModal(true);
  };

  return (
    <div>
      {showFormModal && <FormModal />}
      <button onClick={formModalDisplayHandler}>Submit Property</button>
    </div>
  );
}

export default App;
