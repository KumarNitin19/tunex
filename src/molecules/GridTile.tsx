import { GenericObject } from "../commonType";

type Props = {
  item: GenericObject<string>;
};

const GridTile: React.FC<Props> = ({ item }) => {
  return (
    <div
      key={item.id}
      className="group flex rounded-xl relative h-[200px] shadow-md transition-shadow duration-300 z-[11]"
      role="button">
      <img
        loading="lazy"
        src={item?.image}
        alt={item.name}
        className="absolute w-full h-full object-cover rounded-xl mb-2 shadow-3xl "
      />
      <div className="relative w-full p-3 flex justify-start items-end">
        <p className="text-white font-medium z-[4]">{item.name}</p>
        <div className="absolute rounded-xl inset-0 bg-gradient-to-t from-black/70 to-transparent shadow-3xl"></div>
      </div>
    </div>
  );
};

export default GridTile;
