import { render, screen } from "@testing-library/react";
import { exact } from "prop-types";
import { GifItem } from "../../src/components/GifItem"; // Importa el componente a probar

describe("Pruebas en GiftItem", () => {
  const title = "Akira"; // Crea un titulo
  const url = "https://akira.com/akira.jpg"; // Crea una url

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<GifItem title={title} url={url} />); // Renderiza el componente a probar
    expect(container).toMatchSnapshot(); // Compara el snapshot con el renderizado
  });

  test("Debe mostrar la imagen con el URL y el ALT indicado", () => {
    render(<GifItem title={title} url={url} />); // Renderiza el componente a probar

    //screen.debug(); // Muestra el componente renderizado en consola

    //expect(screen.getByRole("img").src).toBe(url) // Comprueba que el elemento img tenga el atributo src con el valor de la url
    //expect(screen.getByRole("img").alt).toBe(title) // Comprueba que el elemento img tenga el atributo alt con el valor del titulo

    const { src, alt } = screen.getByRole("img"); // Extrae el src y el alt del elemento img
    expect(src).toBe(url); // Comprueba que el src sea igual a la url
    expect(alt).toBe(title); // Comprueba que el alt sea igual al titulo
  });

  test("Debe mostrar el titulo", () => {
    render(<GifItem title={title} url={url} />); // Renderiza el componente a probar
    expect(screen.getByText(title)).toBeTruthy(); // Comprueba que el titulo este en el documento
  });
});
