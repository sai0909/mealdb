import api from ".";

const END_POINT = "/search.php?s=";

// Get meal details
const getSearchMeals = query => api.get(END_POINT + query);

export { getSearchMeals };
