export const Api_option =  {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' +  import.meta.env.VITE_APP_TMDB_KEY
  }
};
export const Img_CDN = "https://image.tmdb.org/t/p/w500/"

export const OPENAI_KEY =  import.meta.env.VITE_APP_OPENAI_KEY