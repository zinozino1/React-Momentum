import axios from "axios";

const API_KEY = "fa13af0bee100fc4972ea54296ea6792";
const URL = `http://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${API_KEY}`;

const getWeather = () => axios.get(URL);

export default getWeather;
