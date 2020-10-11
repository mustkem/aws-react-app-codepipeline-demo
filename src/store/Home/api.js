export const fetchProducts = async () => {
  try {
    const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};
