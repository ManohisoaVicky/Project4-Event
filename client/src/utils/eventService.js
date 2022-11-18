import { getToken } from "../utils/tokenService";

const BASE_URL = "/api/events/";

const getEvents = async () => {
  try {
    let res = await fetch(BASE_URL);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const createEvent = async (event) => {
  try {
    const token = getToken();
    let res = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(event),
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

const getSingleEvent = async (eventID) => {
  try {
    let res = await fetch(BASE_URL + eventID);
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { getEvents, createEvent, getSingleEvent };
