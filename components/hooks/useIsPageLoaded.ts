import * as React from 'react';

export const useIsPageLoaded = (): boolean => {
  const [isPageLoaded, setIsPageLoaded] = React.useState(false);
  React.useEffect(() => {
    if (!isPageLoaded) {
      setIsPageLoaded(true);
    }
  }, [isPageLoaded]);
  return isPageLoaded;
};
