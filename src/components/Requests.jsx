import axios from 'axios';

const GEMINI_API_KEY = 'AIzaSyBKIoZntl1z3-TxVUZeOh-N2mHyIrhfZgM';
const GEMINI_API_URL = 'https://api.gemini.example.com/v1/';

export const fetchGeminiResponse = async (inputData) => {
  try {
    const response = await axios.post(`${GEMINI_API_URL}/process`, {
      headers: {
        Authorization: `Bearer ${GEMINI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      data: { input: inputData },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Gemini AI:', error);
    throw error;
  }
};
