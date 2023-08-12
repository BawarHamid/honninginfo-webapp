import { useEffect, useState } from "react";
import Navbar from "@/components/generic/navbar/Navbar";
import { SelectedPage } from "@/shared/types";
import Forside from "@/pagescenes/Forside";
// import OmBigaarden from "@/pagescenes/OmBigaarden";
import VoresHonning from "@/pagescenes/VoresHonning";
import KontaktOs from "@/pagescenes/KontaktOs";
import Footer from "./components/footer/Footer";
import VoresBigaard from "./pagescenes/VoresBigaard";

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
      <Forside setSelectedPage={setSelectedPage} />
      <VoresHonning setSelectedPage={setSelectedPage} />
      {/* <OmBigaarden setSelectedPage={setSelectedPage} /> */}
      <VoresBigaard setSelectedPage={setSelectedPage} />
      <KontaktOs setSelectedPage={setSelectedPage} />
      <Footer setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default App;
