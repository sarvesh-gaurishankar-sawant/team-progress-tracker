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
    <div
      className={`notification ${isVisible ? 'visible' : 'hidden'}`}
      style={{
        position: 'fixed',
        top: '4rem', 
        right: '1rem', 
        padding: '1rem',
        border: '2px solid red',
        backgroundColor: '#FDF8F7', 
        borderRadius: '8px', 
        zIndex: 1000, 
      }}
    >
      {message}
    </div>
  );
};

export default Notification;
