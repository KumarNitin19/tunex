type Props = {
  children: React.ReactNode;
};

const CardWithGradientBorder = ({ children }: Props) => {
  return (
    <div
      className="gradient-border-card border border-transparent rounded-3xl backdrop-blur-3xl"
      style={{
        background:
          "linear-gradient(#f9fafd 0 0) padding-box, linear-gradient(rgb(11 11 15 / 3%), rgb(11 11 15 / 57%), rgb(11 11 15 / 6%)) border-box",
      }}>
      {children}
    </div>
  );
};

export default CardWithGradientBorder;
