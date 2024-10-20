import React from 'react';
import TeacherList from '../components/teachers/TeacherList';
import TeacherForm from '../components/teachers/TeacherForm';

function Teachers() {
  return (
    <div className="teachers-page">
      <h1>Öğretmen Yönetimi</h1>
      <TeacherForm />
      <TeacherList />
    </div>
  );
}

export default Teachers;