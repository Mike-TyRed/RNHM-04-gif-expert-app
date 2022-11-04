import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en getGifs()", () => {
  test("Debe de retornar un arreglo de gifs", async () => {
    const gifs = await getGifs("One Punch"); //await espera a que la peticion se resuelva
    //console.log(gifs);//imprime el array de objetos
    expect(gifs.length).toBeGreaterThan(0); //espera que el array tenga màs de 0 elementos

    expect(gifs[0]).toEqual({//espera que el primer elemento del array sea un objeto
      id: expect.any(String), //espera que el id sea un string
      title: expect.any(String), //espera que el title sea un string
      url: expect.any(String), //espera que la url sea un string
    });
  });
});
