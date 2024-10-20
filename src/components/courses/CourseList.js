import React, { useState, useEffect } from 'react';
import { getCourses } from '../../services/courseService';

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setLoading(true);
      const data = await getCourses();
      console.log('Fetched course data:', data); // Debug için eklendi
      setCourses(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Dersler yüklenirken hata oluştu:', error);
      setError('Dersler yüklenirken bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="course-list">
      <h2>Ders Listesi</h2>
      {courses.length === 0 ? (
        <p>Henüz ders bulunmamaktadır.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Ad</th>
              <th>Açıklama</th>
              <th>Öğretmen</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course.id}>
                <td>{course.id}</td>
                <td>{course.name}</td>
                <td>{course.description}</td>
                <td>{course.teacher ? `${course.teacher.firstName} ${course.teacher.lastName}` : 'Atanmamış'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CourseList;