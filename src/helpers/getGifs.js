export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=SRbw3bbUDbqGsewaPGiTFkFLmcfeJuOU&q=${category}&limit=10`;//limit=10 es para que solo me traiga 10 gifs
  const resp = await fetch(url);//await espera a que la peticion se resuelva
  const { data } = await resp.json();//data es un array de objetos

  const gifs = data.map((img) => ({//map recorre el array y devuelve un nuevo array
    id: img.id,//selecciona el id de cada objeto
    title: img.title,//selecciona el title de cada objeto
    url: img.images.downsized_medium.url,//selecciona la url de cada objeto
  }));
  return gifs;//retorna el array de objetos
};