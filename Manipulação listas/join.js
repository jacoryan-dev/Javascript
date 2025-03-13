const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(lista.join('/'))

const listaNomes = [
  {nome:"Jacob"}, 
  {nome:"Mariana"},
  {nome:"Zé Feh"},
  {nome:"Junior"}
  ];



const elementosEmHtml = listaNomes
    .filter((e) => e.nome.startsWith('J'))
    .map(e => `<li>${e.nome}</li>`)
    .join('')

console.log(elementosEmHtml)

