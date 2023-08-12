import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { ReactElement } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
  hidden: { opacaity: 0, scale: 0.9 },
  visible: { opacaity: 0, scale: 1 },
};

type Props = {
  image?: string;
  typeofhoney: string;
  description?: ReactElement;
  text?: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const CardView: React.FC<Props> = ({
  image,
  typeofhoney,
  description,
  text,
  setSelectedPage,
}) => {
  return (
    <motion.div
      className="mt-5 rounded-md border-4 border-gray-20 px-5 py-6 md:h-[600px] md:w-[400px]"
      variants={childVariant}
    >
      <p className="font-normal text-lg text-center">{typeofhoney}</p>
      <div className="mb-4 flex justify-center">
        <div className="">
          <img src={image} alt="honningbilled" />
        </div>
      </div>
      {description ? (
        <div className="my-4 text-center text-sm">{description}</div>
      ) : (
        <div className="my-3">
          {text ? <p className="text-center">{text}</p> : null}
        </div>
      )}

      <AnchorLink
        className="flex justify-center text-xs font-bold text-primary-500 underline hover:text-secondary-500"
        onClick={() => setSelectedPage(SelectedPage.KontaktOs)}
        href={`#${SelectedPage.KontaktOs}`}
      >
        <button className="">Tilføj til kurv</button>
      </AnchorLink>
    </motion.div>
  );
};

export default CardView;
