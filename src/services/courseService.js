import api from './api';

export const getCourses = async () => {
  try {
    const response = await api.get('/courses');
    return response.data;
  } catch (error) {
    console.error('Error fetching courses:', error);
    throw error;
  }
};

export const createCourse = async (course) => {
    try {
      console.log('Sending course data:', JSON.stringify(course, null, 2));
      const response = await api.post('/courses', course);
      console.log('Course created successfully:', response.data);
      return response.data;
    } catch (error) {
      console.error('Error creating course:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        console.error('No response received:', error.request);
      } else {
        console.error('Error setting up request:', error.message);
      }
      throw error;
    }
  };

export const getCourseById = (id) => api.get(`/courses/${id}`);
export const updateCourse = (id, course) => api.put(`/courses/${id}`, course);
export const deleteCourse = (id) => api.delete(`/courses/${id}`);
export const getCoursesByTeacherId = (teacherId) => api.get(`/courses/byTeacher/${teacherId}`);