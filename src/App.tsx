import { useEffect, useState } from "react";
import Navbar from "@/components/generic/navbar/Navbar";
import { SelectedPage } from "@/shared/types";
import Home from "@/pagescenes/Home";
import OmBigaarden from "@/pagescenes/OmBigaarden";

const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Forside
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Forside);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <OmBigaarden setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default App;
