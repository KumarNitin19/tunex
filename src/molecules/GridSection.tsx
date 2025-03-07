import { GenericObject } from "../commonType";
import GridTile from "./GridTile";

type Props = {
  title: string;
  onViewAll: () => void;
  listItems: GenericObject<string>[];
  handleClick?: (item: GenericObject<string>) => void;
};

const GridSection: React.FC<Props> = ({
  title,
  onViewAll,
  listItems,
  handleClick,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-main-text-light dark:text-main-text-dark text-2xl font-semibold">
          {title}
        </h2>
        <button
          onClick={onViewAll}
          className="text-primary font-medium hover:underline">
          View All →
        </button>
      </div>
      {listItems?.length ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {listItems.map((item) => (
            <GridTile
              key={item?.id as string}
              item={item}
              handleClick={handleClick}
            />
          ))}
        </div>
      ) : (
        <p className="text-main-text-light dark:text-main-text-dark font-medium text-sm md:text-sm truncate">
          No data found.
        </p>
      )}
    </div>
  );
};

export default GridSection;
