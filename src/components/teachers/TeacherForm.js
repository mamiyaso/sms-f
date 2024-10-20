import React, { useState } from 'react';
import { createTeacher } from '../../services/teacherService';

function TeacherForm() {
  const [teacher, setTeacher] = useState({
    firstName: '',
    lastName: '',
    email: '',
    specialization: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTeacher({ ...teacher, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createTeacher(teacher);
      alert('Öğretmen başarıyla eklendi');
      setTeacher({ firstName: '', lastName: '', email: '', specialization: '' });
    } catch (error) {
      console.error('Öğretmen eklenirken hata oluştu:', error);
      alert('Öğretmen eklenirken bir hata oluştu');
    }
  };

  return (
    <div className="teacher-form">
      <h2>Yeni Öğretmen Ekle</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">Ad:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={teacher.firstName}
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
            value={teacher.lastName}
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
            value={teacher.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="specialization">Uzmanlık:</label>
          <input
            type="text"
            id="specialization"
            name="specialization"
            value={teacher.specialization}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Öğretmen Ekle</button>
      </form>
    </div>
  );
}

export default TeacherForm;