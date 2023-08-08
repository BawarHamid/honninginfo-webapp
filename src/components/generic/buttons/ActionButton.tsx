import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton: React.FC<Props> = ({ children, setSelectedPage }) => {
  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={() => setSelectedPage(SelectedPage.KontaktOs)}
      href={`#${SelectedPage.KontaktOs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
