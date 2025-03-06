import { GenericObject } from "../commonType";

type Props = {
  item: GenericObject<string>;
  handleClick?: (item: GenericObject<string>) => void;
};

const GridTile: React.FC<Props> = ({ item, handleClick = () => {} }) => {
  return (
    <div
      key={item.id}
      className="group flex relative rounded-xl h-[200px] cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105"
      role="button"
      onClick={() => handleClick(item)}>
      <img
        loading="lazy"
        src={item?.image}
        alt={item.name}
        className="absolute w-full h-full object-cover rounded-xl mb-2"
      />
      <div className="relative w-full p-3 flex justify-start items-end">
        <p className="text-white font-medium z-[4]">{item.name}</p>
        <div className="absolute rounded-xl inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      </div>
    </div>
  );
};

export default GridTile;
