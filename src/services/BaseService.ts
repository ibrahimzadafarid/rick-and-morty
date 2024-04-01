import axios from "axios";
const apiKey = import.meta.env.VITE_API_URL;

export const get = async <T>(EndPoint: string) => {
  try {
    const response = await axios.get<T>(`${apiKey}/${EndPoint}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error;
    }
    return new Error("An error occured");
  }
};
