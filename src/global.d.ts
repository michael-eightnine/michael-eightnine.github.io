export {};

declare global {
  type ChildrenProps = {
    children: React.ReactNode | React.ReactNode[];
  };

  type SVGProps = {
    className?: string;
  };
}
