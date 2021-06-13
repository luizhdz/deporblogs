const API_REST = "http://143.198.109.66/api";
//const API_REST = "http://localhost:4000/api";

export function api({ endpoint, method = "GET", payload }) {
  const settings = getSettings({ method, payload });
  return fetch(`${API_REST}/${endpoint}`, settings).then((response) =>
    response.json()
  );
}

const getSettings = ({ method, payload }) => {
  let settings = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (payload) {
    settings.body = JSON.stringify(payload);
  }

  return settings;
};
