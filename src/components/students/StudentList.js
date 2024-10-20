import React, { useState, useEffect } from 'react';
import { getStudents } from '../../services/studentService';

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      const data = await getStudents();
      console.log('Fetched student data:', data); // Debug için
      setStudents(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error('Öğrenciler yüklenirken hata oluştu:', error);
      setError('Öğrenciler yüklenirken bir hata oluştu.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Öğrenciler Yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="student-list">
      <h2>Öğrenci Listesi</h2>
      {students.length === 0 ? (
        <p>Henüz öğrenci bulunmamaktadır.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Ad</th>
              <th>Soyad</th>
              <th>E-posta</th>
              <th>Doğum Tarihi</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.email}</td>
                <td>{student.dateOfBirth}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentList;