const apiKey = import.meta.env.VITE_API_URL;

export const getAllCharacters = async () => {
  try {
    const response = await axios.get(`${apiKey}/characters`);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
