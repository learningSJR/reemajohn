import React from "react";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-primary text-neutral-content items-center p-4 flex justify-center">
      <div className="">
        <p>
          Copyright © {new Date().getFullYear()}
          <span> All right reserved</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
