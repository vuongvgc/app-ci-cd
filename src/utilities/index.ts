export const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const colorsArray: string[] = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];

export const getDataQuote = () => {
  return fetch("https://api.quotable.io/random")
    .then((rs) => {
      return rs.json();
    })
    .then((data) => {
      return data;
    });
};
