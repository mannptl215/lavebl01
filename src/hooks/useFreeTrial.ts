
import { useState, useEffect } from 'react';

const STORAGE_KEY = 'vizmora_free_uses';
const MAX_FREE_USES = 3;

export const useFreeTrial = () => {
  const [freeUsesRemaining, setFreeUsesRemaining] = useState(MAX_FREE_USES);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authStatus === 'true');

    // Get free uses count
    const storedUses = localStorage.getItem(STORAGE_KEY);
    const usedCount = storedUses ? parseInt(storedUses, 10) : 0;
    setFreeUsesRemaining(Math.max(0, MAX_FREE_USES - usedCount));
  }, []);

  const canUseService = () => {
    return isAuthenticated || freeUsesRemaining > 0;
  };

  const useService = () => {
    if (isAuthenticated) {
      return true; // Authenticated users can always use services
    }

    if (freeUsesRemaining > 0) {
      const currentUses = parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10);
      const newUses = currentUses + 1;
      localStorage.setItem(STORAGE_KEY, newUses.toString());
      setFreeUsesRemaining(Math.max(0, MAX_FREE_USES - newUses));
      return true;
    }

    return false; // No uses remaining and not authenticated
  };

  const needsLogin = () => {
    return !isAuthenticated && freeUsesRemaining === 0;
  };

  return {
    freeUsesRemaining,
    canUseService,
    useService,
    needsLogin,
    isAuthenticated,
    maxFreeUses: MAX_FREE_USES
  };
};
