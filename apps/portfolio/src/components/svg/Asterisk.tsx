type Props = {
  className?: string;
};

const Asterisk: React.FC<Props> = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 13 14"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m12.453 8.953-1.062 1.86L7 7.906l.36 5.344H5.124l.344-5.344-4.485 2.907L0
8.984l4.797-2.359L0 4.219 1.078 2.39 5.5 5.344 5.125 0h2.234l-.39 5.344 4.422-2.985 1.093 1.922-4.812 2.375z"
      fill="currentColor"
    />
  </svg>
);

export default Asterisk;
