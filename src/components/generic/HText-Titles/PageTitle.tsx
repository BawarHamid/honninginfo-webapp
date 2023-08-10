type Props = {
  title: React.ReactNode;
};

const PageTile: React.FC<Props> = ({ title }) => {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">{title}</h1>
  );
};

export default PageTile;
