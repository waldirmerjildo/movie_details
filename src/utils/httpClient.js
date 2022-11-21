// const API = process.env.REACT_APP_API;
// const API_TOKEN = process.env.REACT_APP_API_TOKEN;
const API = 'https://api.themoviedb.org/3';
const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NzUzN2ZmMTlmMzgxZGQ3YjY3ZWVlMWVhOGI4MTY0YSIsInN1YiI6IjVlM2ExNmU1MGMyNzEwMDAxODc1NTI4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nOpZ_nBtA93tbzr6-rxD0760tssAAaSppyjRv9anArs';

function get(path) {
  return fetch(API + path, {
    headers: {
      Authorization:
        "Bearer " + API_TOKEN,
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((result) => result.json());
}

export default get;
