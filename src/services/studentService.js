import api from './api';

export const getStudents = async () => {
    try {
      const response = await api.get('/students');
      return response.data;
    } catch (error) {
      console.error('Error fetching students:', error);
      throw error;
    }
  };
  
  export const createStudent = async (student) => {
    try {
      const response = await api.post('/students', student);
      return response.data;
    } catch (error) {
      console.error('Error creating student:', error);
      throw error;
    }
  };
export const getStudentById = (id) => api.get(`/students/${id}`);
export const updateStudent = (id, student) => api.put(`/students/${id}`, student);
export const deleteStudent = (id) => api.delete(`/students/${id}`);