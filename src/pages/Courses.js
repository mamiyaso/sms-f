import React from 'react';
import CourseList from '../components/courses/CourseList';

function Courses() {
  return (
    <div className="courses-page">
      <h1>Ders Yönetimi</h1>
      <CourseList />
    </div>
  );
}

export default Courses;