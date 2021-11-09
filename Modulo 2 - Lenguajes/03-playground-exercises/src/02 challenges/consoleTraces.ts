console.log("************** CONSOLE TRACES *********************");
// # Trazas por consola

// Ejecuta el siguiente código:

const delay = <T>(ms: number): Promise<T> => new Promise(resolve => setTimeout(resolve, ms));

type ShowMessageFunc = [time: number, message: string];

const showMessage = async ([time, message]: ShowMessageFunc) => {
  await delay(time);
  console.log(message);
};

const triggers: Function[] = [
  async () => await showMessage([200, "third"]),
  async () => await showMessage([100, "second"]),
];

const run = async (triggers: Function[]) => {
  for (const trigger of triggers) {
    await trigger();
  }

  console.log("first");
};

run(triggers);

// Las trazas resultante en consola son:

// first;
// second;
// third;

// El ejercicio consiste en reordenar las trazas para que se muestren invertidas, es decir, con el siguiente orden:

// third;
// second;
// first;

// Pero para ello **tan solo podrás modificar la función `run`**.

// Queda prohibido modificar cualquier otro código asi como el contenido de `triggers`.
