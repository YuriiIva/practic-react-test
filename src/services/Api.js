const BASE_URL = "https://61c4aa46f1af4a0017d9972f.mockapi.io";

const fetchData = async (path, options = {}) => {
  const res = await fetch(`${BASE_URL}/${path}`, options);
  return res.ok ? res.json() : Promise.reject(new Error(res.statusText));
};

const getData = (endpoint, options) => fetchData(endpoint, options);

const saveItem = (endpoint, item, options = {}) => {
  const finalOptions = {
    method: "POST",

    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    ...options,
  };
  return fetchData(endpoint, finalOptions);
};

const editItem = (endpoint, item, options = {}) => {
  const finalOptions = {
    method: "PUT",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    ...options,
  };

  return fetchData(`${endpoint}/${item.id}`, finalOptions);
};

const deleteItem = (endpoint, id, options = {}) =>
  fetchData(`${endpoint}/${id}`, { method: "DELETE", ...options });

export { getData, saveItem, editItem, deleteItem };
