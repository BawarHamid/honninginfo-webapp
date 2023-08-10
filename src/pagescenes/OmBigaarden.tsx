import PageTile from "@/components/generic/HText-Titles/PageTitle";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OmBigaarden: React.FC<Props> = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="bigaarden" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OmBigaarden)}
        className=""
      >
        {/* Header for section */}
        <div className="md:my-5 md:w-3/5">
          <PageTile title="VORES HELT EGEN BIGÅRD!" />
          <p className="my-5 text-sm">
            Dette er vores bigård Dette er vores bigård Dette er vores bigård
            Dette er vores bigård Dette er vores bigård Dette er vores bigård
            Dette er vores bigård.
          </p>
        </div>

        {/* Bigården */}
        <div className="md:flex items-center justify-between gap-8 mt-5"></div>
      </motion.div>
    </section>
  );
};

export default OmBigaarden;
