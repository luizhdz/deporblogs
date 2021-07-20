import { getStorage } from "./storage";

const API_REST = "http://143.198.109.66/api";
//const API_REST = "http://localhost:4000/api";
const AUTH_SERVICE = "http://143.198.109.66/auth";
//const AUTH_SERVICE = "http://localhost:4000/auth";

export function api({ endpoint, method = "GET", payload, auth }) {
  const settings = getSettings({ method, payload });
  const url = auth ? AUTH_SERVICE : API_REST;
  return fetch(`${url}/${endpoint}`, settings).then((response) =>
    response.json()
  );  
}

const getSettings = ({ method, payload }) => {
  const token = getStorage({name: "token"})
  let settings = {
    method,
    headers: {
      "Content-Type": "application/json",
      
    },
  };
  
  if(token){
    settings.headers["auth-token"] = token
  }

  if (payload) {
    settings.body = JSON.stringify(payload);
  }

  return settings;
};

