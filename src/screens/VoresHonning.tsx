import CardView from "@/components/card/CardView";
import PageTile from "@/components/generic/HText-Titles/PageTitle";
import { HonningType, SelectedPage } from "@/shared/types";
import flydendeMork from "@/assets/honninger/flydendehon-removebg.png";
import smorbarLys from "@/assets/honninger/forårshon-removebg.png";
import smorbarMork from "@/assets/honninger/sensommerhon-removebg.png";
import tavlehonning from "@/assets/honninger/tavlehonning2Re-removebg.png";
import { motion } from "framer-motion";

const honninger: Array<HonningType> = [
  {
    image: smorbarLys,
    typeofhoney: "Vores Forårshonning",
    description: (
      <p className="leading-relaxed">
        Vores danske forårshonning, samlet lokalt omkring bistaderne, fanger
        områdets smag. Rig på druesukker, den lyse, faste honning tilbyder en
        blød, smørbart konsistens.
      </p>
    ),
  },
  {
    image: smorbarMork,
    typeofhoney: "Vores Smørbar Sensommerhonning",
    description: (
      <p className="leading-relaxed">
        Dansk sensommerhonning, høstet juni til august, rig med frugtsukker.
        Krystalliserer langsommere, blød og intens sommerpalet, fra lys til
        mørk. Blød, smørbart - et delikat vidunder i konsistens og smag.
      </p>
    ),
  },
  {
    image: flydendeMork,
    typeofhoney: "Vores Flydende Sensommerhonning",
    description: (
      <p className="leading-relaxed">
        Dansk flydende sensommerhonning er en gylden skat fra sensommerens
        overgang. Med let konsistens og solrig smag er den perfekt til
        madlavning og sødning. En smagsoplevelse, der indfanger sensommerens
        magi.
      </p>
    ),
  },
  {
    image: tavlehonning,
    typeofhoney: "Vores Lækre Tavlehonning",
    description: (
      <p className="leading-relaxed">
        Tavlehonningen er det fuldstændigt ubehandlet, flydende honning i
        bivoks. Nyd den behagelige honningsmag, voks som karamel. Honningtavlen
        er nøje udvalgt på baggrund af udseende af biavleren selv. Den er det
        ypperste produkt fra honningbierne.
      </p>
    ),
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const VoresHonning: React.FC<Props> = ({ setSelectedPage }) => {
  return (
    <section id="voreshonning" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.VoresHonning)}
      >
        {/* Header for section */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <PageTile title="Vores Sæsonhonning" />
          <p className="my-5 text-sm">
            Alt honning fra Hamids Biavl er lækkert, naturligt og ikke mindst
            højkvalitets honning! <br />
            hvor alle bier altid er passet og plejet efter de bedste mulige
            forhold.
          </p>
        </motion.div>

        {/* Vores honning */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {honninger.map((honning: HonningType) => (
            <CardView
              key={honning.typeofhoney}
              image={honning.image}
              typeofhoney={honning.typeofhoney}
              description={honning.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default VoresHonning;
