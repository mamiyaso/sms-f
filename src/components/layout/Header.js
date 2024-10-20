import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Okul Yönetim Sistemi</h1>
      <nav>
        <ul>
          <li><Link to="/">Ana Sayfa</Link></li>
          <li><Link to="/students">Öğrenciler</Link></li>
          <li><Link to="/teachers">Öğretmenler</Link></li>
          <li><Link to="/courses">Dersler</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;