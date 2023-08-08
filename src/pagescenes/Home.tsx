import ActionButton from "@/components/generic/buttons/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HBottle from "@/assets/honey-bottle.png";
import spons1 from "@/assets/spons1.png";
import spons2 from "@/assets/sposn2.png";
import spons3 from "@/assets/spons3.png";
import HPageText from "@/assets/HomePageeText.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home: React.FC<Props> = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="forside" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image and main header */}
      <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
        {/* Main header */}
        <div className="z-10 mt-32 md:basis-3/5 ">
          {/* Headings */}
          <div className="md:-mt-20">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:content-evolvetext">
                <img src={HPageText} alt="homepage-text" />
              </div>
            </div>
            <p>
              Honning tekst beskrivelse etc.......... Honning tekst beskrivelse
              etc.......... Honning tekst beskrivelse etc.......... Honning
              tekst beskrivelse etc.......... Honning tekst beskrivelse
              etc.......... Honning tekst beskrivelse etc.......... Honning
              tekst beskrivelse etc..........
            </p>
          </div>
          <ActionButton setSelectedPage={setSelectedPage}>
            Køb i dag!
          </ActionButton>
          <AnchorLink
            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.KontaktOs)}
            href={`#${SelectedPage.KontaktOs}`}
          >
            <p>Læs mere!</p>
          </AnchorLink>
        </div>

        {/* Image */}
        <div>
          <img alt="forsideimg" src={HBottle} />
        </div>
      </div>
      {/* Sponsor */}
      {isAboveMediumScreens && (
        <div>
          <div>
            <img src={spons1} alt="sponsFlere" />
            <img src={spons2} alt="sponsHoney" />
            <img src={spons3} alt="SponsArabisk" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
