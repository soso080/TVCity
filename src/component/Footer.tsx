import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <footer className="bg-black text-white py-4">
      <p className="text-center">&copy; TVCity {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
