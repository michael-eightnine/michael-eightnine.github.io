type Props = {
  title: string;
  yearsActive: string;
};

const RoleEntry: React.FC<Props & ChildrenProps> = ({
  children,
  title,
  yearsActive
}) => (
  <div>
    <div className="flex items-start lg:items-baseline lg:justify-between lg:gap-4 gap-0 mb-2 flex-col lg:flex-row">
      <h2 className="lg:text-lg text-base text-primary font-mono font-bold leading-[1.25]">
        {title}
      </h2>
      <p className="font-mono text-sm text-dark">{yearsActive}</p>
    </div>
    <div className="[&>p+p]:mt-4">{children}</div>
  </div>
);

export default RoleEntry;
