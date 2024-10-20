import React, { useState } from 'react';
import { createStudent } from '../../services/studentService';

function StudentForm() {
  const [student, setStudent] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createStudent(student);
      alert('Öğrenci başarıyla eklendi');
      setStudent({ firstName: '', lastName: '', email: '', dateOfBirth: '' });
    } catch (error) {
      console.error('Öğrenci eklenirken hata oluştu:', error);
      alert('Öğrenci eklenirken bir hata oluştu');
    }
  };

  return (
    <div className="student-form">
      <h2>Yeni Öğrenci Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Ad:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={student.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Soyad:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={student.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">E-posta:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={student.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Doğum Tarihi:</label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={student.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Öğrenci Ekle</button>
      </form>
    </div>
  );
}

export default StudentForm;