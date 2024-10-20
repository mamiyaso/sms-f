import api from './api';

export const getTeachers = async () => {
    try {
      const response = await api.get('/teachers');
      return response.data;
    } catch (error) {
      console.error('Error fetching teachers:', error);
      throw error;
    }
  };
  
  export const createTeacher = async (teacher) => {
    try {
      const response = await api.post('/teachers', teacher);
      return response.data;
    } catch (error) {
      console.error('Error creating teacher:', error);
      throw error;
    }
  };
export const getTeacherById = (id) => api.get(`/teachers/${id}`);
export const updateTeacher = (id, teacher) => api.put(`/teachers/${id}`, teacher);
export const deleteTeacher = (id) => api.delete(`/teachers/${id}`);