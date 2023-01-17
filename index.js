
let btn = document.querySelector('button');
let select = document.querySelector('#currency-select');


const convertValues = async () => {
  const inputReal = document.querySelector('input').value;
  const realText = document.querySelector('#changed-value-rs');
  const dolarText = document.querySelector("#changed-value-us");

  const data = await fetch("http://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

  const dolar = data.USDBRL.high
  const euro = data.EURBRL.high
  const bitcoin = data.BTCBRL.high


  realText.innerHTML = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(inputReal);

  if (select.value === 'US$ Dólar Americano') {
    dolarText.innerHTML = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(inputReal / dolar);
  } else if (select.value === '€ Euro') {
    dolarText.innerHTML = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(inputReal / euro);
  } else {
    let valorConvertido = inputReal / bitcoin;
    dolarText.innerHTML = parseFloat(valorConvertido).toFixed(5);
  }

}

//Declarar a função que irá trocar o texto e a imagem para Euro.
changeCurrency = () => {
  const currencyName = document.querySelector('#currency-name');
  const currencyImg = document.querySelector('#currency-img');

  if (select.value === '€ Euro') {
    currencyName.innerHTML = 'Euro:';
    currencyImg.src = './imgs/euro.svg'
  } else if (select.value === 'US$ Dólar Americano') {
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
select.addEventListener('change', changeCurrency)