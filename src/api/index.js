export const getCharacters = async (params) => {
  const searchParams = new URLSearchParams(params);
  const response = await fetch(
      // TODO: you could leave SERVER_URL in consts.js, just use process.env.REACT_APP_API_URL as value there
    `${process.env.REACT_APP_API_URL}/character?${searchParams.toString()}`
  );

  return response.json();
};

export const getCharactersByIds = async (ids) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/character/${ids}`
  );

  const res = await response.json();

  return Array.isArray(res) ? res : [res];
};

export const getCharacter = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/character/${id}`
  );

  return response.json();
};

export const getEpisode = async (id) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/episode/${id}`
  );

  return response.json();
};

export const getEpisodes = async (ids) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/episode/${ids}`
  );

  const res = await response.json();

  return Array.isArray(res) ? res : [res];
};
