import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-4">
      <p className="mb-0">
        copyright &copy; Desarrollado por Pablo Mellado Risco - {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;