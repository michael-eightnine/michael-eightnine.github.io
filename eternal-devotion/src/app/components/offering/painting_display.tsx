type Props = {
  className: React.HTMLProps<HTMLElement>['className'];
};

const PaintingDisplay = ({ className }: Props) => {
  return <div className={className} />;
};

export default PaintingDisplay;
