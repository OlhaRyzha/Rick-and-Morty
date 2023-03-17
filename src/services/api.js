import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
});

export const fetchAllCharacters = async page => {
  const { data } = await instance.get(`/character`, {
    params: {
      page,
    },
  });

  return data;
};

export const getCharacterInfoById = async id => {
  const { data } = await instance.get(`/character/${id}`);
  return data;
};
export const getFilteredByNameCharacters = async obj => {
  const { name, page } = obj;
  const { data } = await instance.get('/character/', {
    params: {
      name,
      page,
    },
  });
  // console.log(data);
  return data;
};
