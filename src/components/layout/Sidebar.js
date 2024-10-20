import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside>
      <nav>
        <ul>
          <li><Link to="/students">Öğrenci Yönetimi</Link></li>
          <li><Link to="/teachers">Öğretmen Yönetimi</Link></li>
          <li><Link to="/courses">Ders Yönetimi</Link></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;