/* ESERCIZIO 1
       Scrivi una funzione per cambiare il titolo della pagina in qualcos'altro
    */

const changeTitle = function () {
  const title = document.querySelector('h1');
  title.innerText = 'Questo è il nuovo titolo della pagina';
};

changeTitle();

/* ESERCIZIO 2
        Scrivi una funzione per aggiungere al titolo della pagina una classe "myHeading"
     */

const addClassToTitle = function () {
  const title = document.querySelector('h1');
  title.classList.add('myHeading');
};
addClassToTitle();

/* ESERCIZIO 3
        Scrivi una funzione che cambi il testo dei p figli di un div
       */

function changePcontent() {
  const paragraph = document.querySelectorAll('div p');
  for (i = 0; i < paragraph.length; i++) {
    const newParagraph = paragraph[i];
    paragraph[i].innerText = 'I nuovi paragrafi li ho modificati io';
  }
}
changePcontent();

/* ESERCIZIO 4
        Scrivi una funzione che cambi la proprietà href di ogni link (tranne quello nel footer) con il valore https://www.google.com
       */

const changeUrls = function () {
  const link = document.querySelectorAll('a:not(footer a)');
  for (let i = 0; i < link.length; i++) {
    link[i].href = 'https://www.google.com';
  }
};
changeUrls();

/* ESERCIZIO 5
        Scrivi una funzione che aggiunga un nuovo elemento lista alla seconda lista non ordinata
     */

const addToTheSecond = function () {
  const listElements = document.getElementById('secondList');
  const newElement = document.createElement('li');
  newElement.innerText = '4th';
  listElements.appendChild(newElement);
};

addToTheSecond();

/* ESERCIZIO 6
        Scrivi una funzione che aggiunga un paragrafo al primo div
     */

const addParagraph = function () {
  const secondParagraph = document.getElementById('first');
  const addP = document.createElement('p');
  addP.innerText = 'Paragrafo aggiunto';
  secondParagraph.appendChild(addP);
};
addParagraph();

/* ESERCIZIO 7
        Scrivi una funzione che faccia scomparire la prima lista non ordinata
     */

const hideFirstUl = function () {
  const deleteList = document.getElementById('firstList');
  deleteList.style.display = 'none';
};
hideFirstUl();

/* ESERCIZIO 8 
        Scrivi una funzione che renda verde il background di ogni lista non ordinata
       */

const paintItGreen = function () {
  const greenBackground = document.querySelectorAll('ul');
  greenBackground.forEach((element) => {
    element.style.backgroundColor = 'green';
  });
};
paintItGreen();
/* ESERCIZIO 9
        Scrivi una funzione che rimuova l'ultima lettera dall'h1 ogni volta che l'utente lo clicca
       */

const makeItClickable = function () {
  const firstTitle = document.querySelector('h1');
  firstTitle.addEventListener('click', function () {
    let text = firstTitle.lenght;
    if (text > 0) {
      text.slice(0, -1);
    }
  });
};
makeItClickable();

/* ESERCIZIO 10
        Crea una funzione che, al click sul footer, riveli l'URL del link interno come contenuto di un alert()
       */

const revealFooterLink = function () {};

/* ESERCIZIO 11
        Crea una funzione che crei una tabella nell'elemento con id "tableArea". 
        La tabella avrà 5 elementi e questa struttura: immagine, nome prodotto, quantità, prezzo
     */

const generateTable = function () {};

/* ESERCIZIO 12
        Crea una funzione che aggiunga una riga alla tabella precedentemente creata e fornisca i dati necessari come parametri
     */

const addRow = function () {};

/* ESERCIZIO 14
       Crea una funzione che nasconda le immagini della tabella quando eseguita
     */

const hideAllImages = function () {};

/* EXTRA ESERCIZIO 15
       Crea una funzione che cambi il colore del h2 con id "changeMyColor" con un colore random ad ogni click ricevuto
     */

const changeColorWithRandom = function () {};
