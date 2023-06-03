import axios from "axios";

const YELP_API_KEY =
  "JyiUTc5rMEd8qifEUOoV6_MQQkgIwrL505Z6hOMpoQpGHveVaVde5XQJbeV11hMwu2k-YsdG7hlacSMl5nTvfgRaJ6GjtF9ITyMVi_cw2iRJrQSCSV9q4PJ4veN3ZHYx";

const api = axios.create({
  baseURL: "https://api.yelp.com/v3",
  headers: {
    Authorization: `Bearer ${YELP_API_KEY}`,
  },
});

const getVenues = (location,terms) => {
  return api
    .get("/businesses/search", {
      params: {
        categories: terms,
        ...location
      },
    })
    .then((res) => {
      return res.data.businesses
    })
    .catch((error) => console.error(error));
};

export { getVenues };
