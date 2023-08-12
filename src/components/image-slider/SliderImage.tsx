type Props = {
  name?: string;
  description?: string;
  image: string;
};

const SliderImage: React.FC<Props> = ({ name, description, image }) => {
  const overlayStyles =
    "p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90";
  return (
    <li className="relative mx-5 inline-block h-[380px] w-[450px]">
      <div className={overlayStyles}>
        <p className="text-lg flex justify-center mt-20">{description}</p>
        <p>{name}</p>
      </div>
      <img alt={`${image}`} src={image} />
    </li>
  );
};

export default SliderImage;
