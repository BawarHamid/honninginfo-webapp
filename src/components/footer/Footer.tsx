import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer: React.FC<Props> = ({ setSelectedPage }) => {
  return (
    <footer className="bg-brownish-100 py-16 text-white">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          {/* <img alt="logo" src={} */}
          <h4 className="font-bold">HamidsHonning.dk</h4>
          <p className="my-5 leading-relaxed">
            Over-Holluf-Vej 64 <br />
            5220 Odense Sø <br />
            CVR: 01010101
          </p>
          <p>Copyright © Alle rettigheder forbeholdes</p>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links:</h4>
          <AnchorLink
            className="text-sm font-bold hover:text-yellowgolden-100 underline leading-loose"
            onClick={() => setSelectedPage(SelectedPage.Forside)}
            href={`#${SelectedPage.Forside}`}
          >
            <p>Forside</p>
          </AnchorLink>
          <AnchorLink
            className="text-sm font-bold hover:text-yellowgolden-100 underline leading-loose"
            onClick={() => setSelectedPage(SelectedPage.VoresHonning)}
            href={`#${SelectedPage.VoresHonning}`}
          >
            <p>Honning</p>
          </AnchorLink>
          <AnchorLink
            className="text-sm font-bold hover:text-yellowgolden-100 underline leading-loose"
            onClick={() => setSelectedPage(SelectedPage.OmBigaarden)}
            href={`#${SelectedPage.OmBigaarden}`}
          >
            <p>Bigården</p>
          </AnchorLink>
          <AnchorLink
            className="text-sm font-bold hover:text-yellowgolden-100 underline leading-loose"
            onClick={() => setSelectedPage(SelectedPage.KontaktOs)}
            href={`#${SelectedPage.KontaktOs}`}
          >
            <p>Kontakt Os</p>
          </AnchorLink>
        </div>

        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Kontakt Os</h4>
          <p className="my-4">Tlf: +45 63112255</p>
          <p className="my-4">E-mail: HamidHonning@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
