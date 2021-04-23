//JS ejercicio 1

const cardPara = document.getElementById('paragraph');
const cardImg = document.getElementById('img');

const img = document.createElement('img');
img.style.width = '100%';
img.src = 'img.jpg';
cardImg.append(img);

const colored = document.createElement('span');
colored.innerHTML = `Con este botón podrás cambiar el color del texto!!.`;
colored.style.color = '#5cb85c';

const paragraph = document.createElement('p');
paragraph.innerHTML = `Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. Quisque at erat rutrum,
bibendum libero at, iaculis neque. Nullam sed massa mi.
Ut imperdiet augue nec tellus egestas, ut pellentesque est maximus.`;
paragraph.append(colored);
cardPara.append(paragraph);

const button = document.getElementById('btn').addEventListener('click', () => {
  paragraph.style.color = '#d9534f';
});

//JS ejercicio 2

const chain = document.getElementById('chain');
const invoice = document.createElement('p');

let invoiceNum = '321345 3021 044 3021';
let splt = invoiceNum.split(' ').join('-');

invoice.innerHTML = `Te adjuntamos el comprobante correspondiente a tu compra.`;
let inv = document.createElement('p');
inv.innerHTML = `Comprobante numero: ${splt}`;

chain.append(invoice);
invoice.append(inv);

//JS ejercicio 3
let price = 5600;
let postCo = 'Correo Argentino';

const prod = document.getElementById('fichaproducto');

const minPrice = document.createElement('span');
minPrice.innerHTML = `en compras superiores a $ ${price},`;

prod.append(minPrice);

const mail = document.getElementById('detalleproducto');
const deliveredBy = document.createElement('span');
deliveredBy.innerHTML = `${postCo}`;
mail.append(deliveredBy);
