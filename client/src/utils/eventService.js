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
        Authorization: "Bearer " + token,
      },
      body: event,
    });
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export { getEvents, createEvent };
