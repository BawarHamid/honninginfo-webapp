import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import RLogo from "@/assets/logoNew.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
// import RLogo from "@/assets/logoNy.png";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar: React.FC<Props> = ({ selectedPage, setSelectedPage }) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediaScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* Left side logo */}
            <img alt="mainLogo" src={RLogo} />
            {/* <img alt="mainLogo" src={Logo} /> */}

            {/* Right side logo */}
            {/* Innerside links/logos */}
            {isAboveMediaScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/* Links - GoTo */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Forside"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Om Bigården"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Vores Honning"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Kontakt os"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                {/* Sign in, Become a Member  */}
                <div className={`${flexBetween} gap-8`}>
                  <p>Log ind</p>
                  <button>Bliv medlem</button>
                </div>
              </div>
            ) : (
              //When user is on mobilescreens
              <button
                className="rounded-full bg-gray-500 p-3"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
