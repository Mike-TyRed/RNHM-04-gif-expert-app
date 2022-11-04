import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe("Pruebas en <AddCategory/>", () => {
  test("debe de cambiar el valor de la caja de texto", () => {
    render(<AddCategory onNewCategory={() => {}} />); //renderiza el componente
    const input = screen.getByRole("textbox"); //obtiene el elemento con el role textbox

    fireEvent.input(input, { target: { value: "Hola Mundo" } }); //simula el evento input en el elemento input

    expect(input.value).toBe("Hola Mundo"); //comprueba que el valor del input sea igual al valor que se le asigno
    //screen.debug();//imprime el html
  });

  test("debe de llamar onNewCategory si el input si contiene un valor", () => {
    const inputValue = "Vash the Stampede";
    const onNewCategory = jest.fn(); //crea una funcion mock, que se puede verificar si fue llamada o no
    // TODO: ????

    render(<AddCategory onNewCategory={onNewCategory} />); //renderiza el componente

    const input = screen.getByRole("textbox"); //obtiene el elemento con el role textbox
    const form = screen.getByRole("form"); //obtiene el elemento con el role form

    fireEvent.input(input, { target: { value: inputValue } }); //simula el evento input en el elemento input
    fireEvent.submit(form); //simula el evento submit en el elemento form
    //screen.debug();

    expect(input.value).toBe(""); //comprueba que el valor del input sea igual al valor que se le asigno
    expect(onNewCategory).toHaveBeenCalled(); //comprueba que la funcion mock haya sido llamada
    expect(onNewCategory).toHaveBeenCalledTimes(1); //comprueba que la funcion mock haya sido llamada una vez
    expect(onNewCategory).toHaveBeenCalledWith(inputValue); //comprueba que la funcion mock haya sido llamada con el argumento inputValue
  });

  test("no debe de llamar el onNewCategory si el input esta vacio", () => {
    const onNewCategory = jest.fn(); //crea una funcion mock, que se puede verificar si fue llamada o no

    render(<AddCategory onNewCategory={onNewCategory} />); //renderiza el componente

    const form = screen.getByRole("form"); //obtiene el elemento con el role form
    fireEvent.submit(form); //simula el evento submit en el elemento form

    expect(onNewCategory).toBeCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalledWith(inputValue); //comprueba que la funcion mock no haya sido llamada
  });
});
