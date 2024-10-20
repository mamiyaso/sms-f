import React from 'react';

function Home() {
  return (
    <div className="home">
      <h2>Okul Yönetim Sistemine Hoş Geldiniz</h2>
      <p>Bu sistem, okulunuzun öğrenci, öğretmen ve ders yönetimini kolaylaştırmak için tasarlanmıştır.</p>
      <div className="quick-links">
        <h3>Hızlı Bağlantılar</h3>
        <ul>
          <li><a href="/students">Öğrenci Yönetimi</a></li>
          <li><a href="/teachers">Öğretmen Yönetimi</a></li>
          <li><a href="/courses">Ders Yönetimi</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;