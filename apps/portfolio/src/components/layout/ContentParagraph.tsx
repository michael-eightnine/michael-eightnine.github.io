type Props = {
  className?: string;
};

const ContentParagraph: React.FC<ChildrenProps & Props> = ({
  children,
  className = ''
}) => (
  <p className={`${className} leading-6 text-dark font-serif text-base`}>
    {children}
  </p>
);

export default ContentParagraph;
