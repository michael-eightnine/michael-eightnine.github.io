import { useCallback, useEffect, useState } from 'react';

/**
 * Tracks if the game is active via a query param and syncs the query param
 * value to the game enabled state. Also attaches a `popstate` event listener
 * to enable the browser's back button to exit the game
 */
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
    gameEnabled,
    toggleGameParam
  };
};

export default useGameQueryParam;
