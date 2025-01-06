import React, { useState } from 'react';

function Header() {

  return (
    <header>
      <div>
        <h1>
          Dave's <a href="https://www.adventofcode.com/">Advent of Code</a> Solutions
        </h1>
      </div>
      <div>
        <h1></h1>
        <nav>
          <ul>
            <li><a href='/'>[2022]</a></li>
            <li><a href='/'>[2023]</a></li>
            <li><a href='/'>[2024]</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
