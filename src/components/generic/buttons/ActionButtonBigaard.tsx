import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButtonBigaard: React.FC<Props> = ({
  children,
  setSelectedPage,
}) => {
  return (
    <AnchorLink
      className="rounded-md bg-brownish-100 text-white px-10 py-2 hover:bg-yelloworange-300 hover:text-brownish-300"
      onClick={() => setSelectedPage(SelectedPage.OmBigaarden)}
      href={`#${SelectedPage.OmBigaarden}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButtonBigaard;
