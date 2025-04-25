
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-primary">
              Hareesh Karni
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-muted-foreground">
              &copy; {currentYear} Hareesh Karni. All rights reserved.
            </p>
            {/* <p className="text-sm text-muted-foreground mt-1">
              Designed and built with ❤️
            </p> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
