import React, { useState, useEffect, useRef } from "react";

interface Alprops {
  message: string;
}

export const Alert: React.FC<Alprops> = ({ message }) => {
  const [button, setButton] = useState<boolean>(true);
  const alertRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (alertRef.current && !alertRef.current.contains(e.target as Node)) {
      setButton(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (!button) {
    return null;
  }

  return (
    <>
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 mt-4 z-50">
        <div
          ref={alertRef}
          className="bg-red-400 rounded-lg shadow-lg px-20 py-4 text-center"
        >
          <p className="text-lg font-medium p-2 text-white">{message}</p>
        </div>
      </div>
    </>
  );
};
