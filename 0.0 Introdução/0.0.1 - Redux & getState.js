const initial = {
  nome: "Timão",
  amigo: "Pumba",
  idade: 25,
  fave_musica: [
    {
      titulo: "easy lover",
      artista: "Philip Bailey",
    },
    {
      titulo: "Thriller",
      artista: "Michael Jackson",
    },
  ],
};

const reducer = ({ nome, amigo } = initial, action) => {
  return {
    nome,
    amigo,
  };
};

const store = Redux.createStore(reducer);

console.log(store.getState());
