import ActionButton from "@/components/generic/buttons/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import HBottle from "@/assets/honey-bottle.png";
import H1Bottle from "@/assets/home-page-imgs/honeybHero.png";
import spons1 from "@/assets/spons-logo-folder/logo1_92x68.png";
import spons2 from "@/assets/spons-logo-folder/logo2_92x68.png";
import spons3 from "@/assets/spons-logo-folder/logo3_92x68.png";
import spons4 from "@/assets/spons-logo-folder/logo4_92x68.png";
import spons5 from "@/assets/spons-logo-folder/logo5_92x68.png";
import HPageText from "@/assets/home-page-imgs/HomePageText.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home: React.FC<Props> = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="forside" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/* Image and main header */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Forside)}
      >
        {/* Main header */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* Headings */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-10 before:-left-20 before:z-[-1] md:before:content-logotext">
                <img src={HPageText} alt="homepage-text" />
              </div>
            </div>
            <p className="mt-8 text-sm">
              Honning tekst beskrivelse etc.......... Honning tekst beskrivelse
              etc.......... Honning tekst beskrivelse etc.......... Honning
              tekst beskrivelse etc.......... Honning tekst beskrivelse
              etc.......... Honning tekst beskrivelse etc.......... Honning
              tekst beskrivelse etc..........
            </p>
          </motion.div>

          {/* Action Button */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Køb i dag!
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.KontaktOs)}
              href={`#${SelectedPage.KontaktOs}`}
            >
              <p>Læs mere</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <img alt="forsideimg" src={H1Bottle} className="rounded-full mt-16" />
          {/* <img alt="forsideimg" src={hpImg} className="rounded-lg" /> */}
        </motion.div>
      </motion.div>

      {/* Sponsor */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <motion.div
              className="flex w-3/5 items-center justify-between gap-32"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              {/* <img src={spons1} alt="sponsFlere" /> */}
              <img src={spons1} alt="biforeningLogo1" />
              <img src={spons2} alt="biforeningLogo2" />
              <img src={spons3} alt="biforeningLogo3" />
              <img src={spons4} alt="biforeningLogo3" />
              <img src={spons5} alt="biforeningLogo3" />
            </motion.div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
