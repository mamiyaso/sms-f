import React from 'react';
import StudentList from '../components/students/StudentList';
import StudentForm from '../components/students/StudentForm';

function Students() {
  return (
    <div className="students-page">
      <h1>Öğrenci Yönetimi</h1>
      <StudentForm />
      <StudentList />
    </div>
  );
}

export default Students;