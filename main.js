let products = [
  { name: 'Entrecôte con salsa', image: './1147801.svg', value: 45000 },
  { name: 'salsa entrecôte grande', image: './1147801.svg', value: 46000 },
  { name: 'salsa entrecôte pequeña', image: './1147801.svg', value: 26000 },
  { name: 'Papas a la francesa', image: './1147801.svg', value: 10000 },
  { name: 'Ensalda con Almendras y Vinagreta de Balsámico y Tamarindo', image: './1147801.svg', value: 10000 },
  { name: 'Vinagreta Balsámico y Tamarindo', image: './1147801.svg', value: 22000 },
  { name: 'Vinagreta Mostaza y Lavanda', image: './1147801.svg', value: 22000 },
  { name: 'Vinagreta Oriental', image: './1147801.svg', value: 22000 },
  { name: 'Profiteroles', image: './1147801.svg', value: 48000 },
  { name: 'Baguette', image: './1147801.svg', value: 9000 },
  { name: 'Samovar', image: './1147801.svg', value: 20000 },
  { name: 'Experiencia Completa', image: './1147801.svg', value: 58000 },
  { name: 'Experiencia Mini', image: './1147801.svg', value: 45000 },
  { name: 'Vino', image: './1147801.svg', value: 10000 },
];
let bill = [];
let billContainer = document.querySelector('section.total > .bill');

function appendToBill( type, value ) {
  let element = document.createElement( type );
  element.innerHTML = value;
  billContainer.appendChild( element );
}

let container = document.querySelector('section.products');

products.forEach( (element, index) => {
  let div   =   document.createElement('div');
  let img   =   document.createElement('img');
  let p     =   document.createElement('p');
  

  img.src = element.image;
  img.alt = element.name;
  p.innerHTML = element.name;

  div.dataset.index = index;
  div.dataset.name = element.name;

  div.addEventListener( 'click', function( e ) {
    bill.push( this.dataset.index );
    console.log( bill );
  });

  div.appendChild( img );
  div.appendChild( p );
  container.appendChild( div );
});


let totalButton = document.querySelector('section.total > button.get-total');
totalButton.addEventListener( 'click', function( e ) {
  e.preventDefault;

  let total = 0;

  appendToBill( 'p', 'Nombre: ' + document.querySelector('#name').value );
  appendToBill( 'p', document.querySelector('#surname').value );
  appendToBill( 'p', document.querySelector('#phone').value );
  appendToBill( 'p', 'Descripción de la Compra' );

  bill.forEach( e => {
    let product = products[ e ];
    appendToBill( 'p', product.name + ' - ' + product.value );
    total += product.value;
  });

  let bTotal = document.createElement('p');
  bTotal.innerHTML = 'Valor Total: ' + total;

  billContainer.appendChild( bTotal );
});

let printButton = document.querySelector('section.total > button.print');
printButton.addEventListener( 'click', function( e ) {
  var mywindow = window.open('', 'PRINT', 'height=400,width=600');

  mywindow.document.write('<html><head><title>' + document.title  + '</title>');
  mywindow.document.write('</head><body>');
  mywindow.document.write('<h1>Entrecote</h1>');
  mywindow.document.write(document.getElementById('bill').innerHTML);
  mywindow.document.write('</body></html>');

  mywindow.document.close();
  mywindow.focus();

  mywindow.print();
  mywindow.close();

  return true;
});