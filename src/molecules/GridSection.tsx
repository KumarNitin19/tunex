import { GenericObject } from "../commonType";
import GridTile from "./GridTile";

type Props = {
  title: string;
  onViewAll: () => void;
  listItems: GenericObject<string>[];
};

const GridSection: React.FC<Props> = ({ title, onViewAll, listItems }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <button
          onClick={onViewAll}
          className="text-primary font-medium hover:underline">
          View All →
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {listItems.map((item) => (
          <GridTile item={item} />
        ))}
      </div>
    </div>
  );
};

export default GridSection;
