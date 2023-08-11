import { BigaardSliderType, SelectedPage } from "@/shared/types";
import image1 from "@/assets/slides/bier.png";
import image2 from "@/assets/slides/bikasser.png";
import image3 from "@/assets/slides/flereglas.png";
import image4 from "@/assets/slides/honning-glas-lys.png";
import image5 from "@/assets/slides/honning-glas-mork.png";
import image6 from "@/assets/slides/honningtavle.png";
import image7 from "@/assets/slides/honningtavleBakke.png";
import image8 from "@/assets/slides/tavler.png";
import image9 from "@/assets/slides/skilt2.png";
import { motion } from "framer-motion";
import PageTile from "@/components/generic/HText-Titles/PageTitle";
import SliderImage from "@/components/image-slider/SliderImage";

const billeder: Array<BigaardSliderType> = [
  {
    // name: "",
    description: "Skønne bier i tavlen",
    image: image1,
  },
  {
    // name: "",
    description: "Vores bifamilier, placeret i haven",
    image: image2,
  },
  {
    // name: "",
    description: "Vores 2 varianter af honning",
    image: image3,
  },
  {
    // name: "",
    description: "Vores forårshonning i smørbar konsistens",
    image: image4,
  },
  {
    // name: "",
    description: "Vores dejlige sensommerhonning, flydende",
    image: image5,
  },
  {
    // name: "",
    description: "Tjek af tavlerne",
    image: image6,
  },
  {
    // name: "",
    description: "Smuk honningtavle klar til at blive skrællet",
    image: image7,
  },
  {
    // name: "",
    description: "Honnningtavler, som skal skrælles",
    image: image8,
  },
  {
    // name: "",
    description: "Enhver biavlers motto!",
    image: image9,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OmBigaarden: React.FC<Props> = ({ setSelectedPage }) => {
  return (
    <section id="ombigaarden" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OmBigaarden)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/6">
            <PageTile title="Om Bigården" />
            <p className="py-5">
              Velkommen til <br />
              Jeg hedder Hamid, og jeg driver en mindre biavl på ca. 5
              bifamilier. <br />
              Vores bistader står ude i vores have og ude i nature omkring
              Over-Holluf/Fraugde på Fyn. <br />
              Vi driver vores biavl efter det som Danmarks Biavlerforening
              kalder "Den sikre strategi", og det betyder en naturlig biavl,
              uden brug af pesticider og andre sprøjtegifte, kun 100 % ren dansk
              honning, fra egen avl. <br />
              <br />
              Tak fordi du kiggede forbi!
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {billeder.map((item: BigaardSliderType, index) => (
              <SliderImage
                key={`${item.description}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OmBigaarden;
