/* Projeto feito no dia: 10/11/22, um Dólar fechou na casa dos R$ 5,40 e um Euro R$ 5,49. */

//Selecionar o botão e o select.
let btn = document.querySelector('button');
let select = document.querySelector('#currency-select');

//Declarar as constantes do valor das moedas.
const dolar = 5.40;
const euro = 5.49;
const bitcoin = 89.84523;

//Definir a função que irá converter as moedas.
function convertValues () {
  const inputReal = document.querySelector('input').value;

  const realText = document.querySelector('#changed-value-rs');

  const dolarText = document.querySelector("#changed-value-us");

  realText.innerHTML = new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(inputReal);


  if(select.value === 'US$ Dólar Americano'){
    dolarText.innerHTML = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(inputReal / dolar);
  } else if (select.value === '€ Euro') {
    dolarText.innerHTML = new Intl.NumberFormat('de-DE', {style: 'currency', currency: 'EUR'}).format(inputReal / euro);
  } else {
    let valorConvertido = inputReal / bitcoin;
    dolarText.innerHTML = parseFloat(valorConvertido).toFixed(5);
  }
 
}

//Declarar a função que irá trocar o texto e a imagem para Euro.
changeCurrency = () => {
  const currencyName = document.querySelector('#currency-name');
  const currencyImg = document.querySelector('#currency-img');

  if(select.value === '€ Euro'){
    currencyName.innerHTML = 'Euro:';
    currencyImg.src = './imgs/euro.svg'
  } else if (select.value === 'US$ Dólar Americano'){
    currencyName.innerHTML = 'Dólar Americano:';
    currencyImg.src = './imgs/estados-unidos (1) 1.svg'
  } else {
    currencyName.innerHTML = 'Bitcoin: ';
    currencyImg.src = './imgs/bitcoins.svg'
  }
  convertValues()
}

//Invocar um evento, ora de click (para o botão), ora de change (para o select).
btn.addEventListener('click', convertValues)
select.addEventListener('change',changeCurrency)