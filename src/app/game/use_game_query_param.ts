import { useCallback, useEffect, useState } from 'react';

const useGameQueryParam = ({
  onGameEnabled
}: {
  onGameEnabled: () => void;
}) => {
  const [gameEnabled, setGameEnabled] = useState(
    new URL(window.location.href).searchParams.get('game') === 'enabled'
  );

  const toggleGameParam = useCallback(() => {
    const url = new URL(window.location.href);
    const params = url.searchParams;
    if (gameEnabled) {
      params.delete('game');
      setGameEnabled(false);
    } else {
      params.set('game', 'enabled');
      setGameEnabled(true);
      onGameEnabled();
    }
    window.history.pushState(null, '', url.toString());
  }, [gameEnabled, onGameEnabled]);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const gameParam = params.get('game');
      if (!gameParam || gameParam !== 'enabled') {
        toggleGameParam();
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [toggleGameParam]);

  return {
    toggleGameParam,
    gameEnabled
  };
};

export default useGameQueryParam;
