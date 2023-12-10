import React, { useState, useEffect } from 'react';

interface NotificationProps {
  message: string;
  onTaskCreate: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onTaskCreate }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onTaskCreate();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onTaskCreate]);

  return (
  <div className="notification fixed top-16 right-4 p-10 border-4 border-purple-500 font-bold	bg-[#2B2C37] rounded-md z-100">
    {message}
  </div>
  );
};

export default Notification;
