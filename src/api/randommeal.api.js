import api from ".";

const END_POINT = "/random.php";

// Get All Shows
const getRandomMeal = () => api.get(END_POINT);

export { getRandomMeal };
