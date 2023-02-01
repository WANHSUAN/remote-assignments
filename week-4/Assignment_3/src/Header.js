import React, { useState } from "react";
import { Data } from "./Data";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <header>
      <nav>
        <p className='big-title'>Website Title / Logo</p>
        <a href='#' onClick={() => setIsVisible(!isVisible)}>
          <i className='fa-solid fa-bars'></i>
        </a>
        <Menu />
        {isVisible && (
          <div className='sideMenu'>
            <ul className='column-menu'>
              <Data data={[1, 2, 3, 4]} />
            </ul>
            <button className='menuButton' onClick={() => setIsVisible(!isVisible)}>
              <i className='fa-solid fa-x'></i>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export const Menu = () => {
  return (
    <ul className='menu'>
      <Data data={[1, 2, 3, 4]} />
    </ul>
  );
};
