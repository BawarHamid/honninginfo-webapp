import { useState } from "react";
import Navbar from "./components/generic/navbar/Navbar";
import { SelectedPage } from "@/shared/types";

const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Forside
  );

  return (
    <div className="app bg-gray-20">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default App;
