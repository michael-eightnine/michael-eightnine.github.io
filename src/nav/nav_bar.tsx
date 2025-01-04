import { useCallback } from 'react';
import AnimatedTitle from './animated_title';

type Props = {
  onAnimationEnd: () => void;
};

const NavBar = ({ onAnimationEnd }: Props) => {
  const onTitleAnimationEnd = useCallback(() => {
    console.log('DONE!');
    onAnimationEnd();
  }, [onAnimationEnd]);

  return <AnimatedTitle onAnimationEnd={onTitleAnimationEnd} />;
};

export default NavBar;
