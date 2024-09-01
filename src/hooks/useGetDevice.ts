import { useEffect, useState } from 'react';

export const useDeviceType = () => {
  const [isMobile, setIsMobile] = useState(false);

  const checkDevice = () => {
    setIsMobile(window.innerWidth <= 768); // Define o limite de largura para mobile
  };

  useEffect(() => {
    checkDevice();
    window.addEventListener('resize', checkDevice);

    return () => {
      window.removeEventListener('resize', checkDevice);
    };
  }, []);

  return {
    isMobile,
  }
};

