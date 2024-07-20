import axios from "axios"
const BASE_URL = "http://youtube138.p.rapidapi.com"
const options = {
	headers: {
		'x-rapidapi-key': '4a58bf7c06msh18c876c79b2ef5ep156224jsn703cf5c925f0',
		'x-rapidapi-host': 'youtube138.p.rapidapi.com'
	}
};

export const fetchYoutubeData = async(url) => {
  try{
    const { data } = await axios.get(`http://youtube138.p.rapidapi.com/${url}`, options);
    console.log(data);
    return data
} catch(err){
    console.log("error fetching data ",err);
  }
}