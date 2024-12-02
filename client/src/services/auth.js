import axios from "axios";

export const login = async (email, password) => {
  try {
    const response = await axios.post("http://localhost:5000/api/auth/login", {
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
    console.log(response.data);
    return response.data; // Возвращаем данные пользователя и токен
  } catch (e) {
    console.error(e.response.data.message);
    throw new Error("Ошибка входа");
  }
};
