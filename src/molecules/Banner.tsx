import Button from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { GenericObject } from "../commonType";

type Props = {
  item: GenericObject<string>;
  onListeNow?: (item: GenericObject<string>) => void;
};

const Banner: React.FC<Props> = ({ item, onListeNow = () => {} }) => {
  return (
    <div className="relative w-full h-96 bg-primary rounded-3xl flex items-center justify-center overflow-hidden">
      <div className="absolute p-5 left-0 w-fit h-full flex flex-col justify-between z-[10]">
        <div className="text-white font-medium z-[10] text-4xl uppercase">
          {item?.name}
        </div>
        <Button
          className="flex gap-2 items-center justify-center !text-black rounded-3xl !bg-white hover:!bg-[#ffffffe6] hover:shadow-lg"
          onClick={() => onListeNow(item)}>
          <Icon icon="material-symbols:play-arrow-rounded" />
          Listen Now
        </Button>
      </div>
      <div>
        <img
          loading="lazy"
          src={item?.image as string}
          alt="Most Listened"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
    </div>
  );
};

export default Banner;
