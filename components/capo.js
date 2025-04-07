import Product from "@/components/product";

const capo = [ 
  {
  immagine:"/images/storia1.jpg",
  titolo:"Il Gatto e la Luna",
  paragrafo:"C’era una volta un gattino di nome Micio che voleva toccare la luna. Ogni notte provava a saltare sempre più in alto, ma non ci riusciva. Un giorno, il gufo saggio gli disse: “Non serve saltare, basta sognare.” Da allora, Micio si addormentava guardando la luna e nei suoi sogni la raggiungeva sempre.",
  testolink:"leggi di più",
},
{
  immagine:"/images/storia2.jpg",
  titolo:"L'Elefantino Coraggioso",
  paragrafo:"Eli era un piccolo elefantino timido che aveva paura di tutto. Un giorno, vide un uccellino caduto dal nido e, senza pensarci, usò la sua proboscide per aiutarlo. Da quel momento, Eli capì che il coraggio non significa non avere paura, ma aiutare chi ne ha bisogno.",
  testolink:"leggi di più",
},
{
  
  immagine:"/images/storia3.jpg",
  titolo:"Il Fiore Magico",
  paragrafo:"Nel bosco incantato cresceva un fiore che rideva ogni volta che qualcuno gli parlava con gentilezza. Tutti gli animali andavano a raccontargli storie e, in cambio, ricevevano un pizzico di felicità.",
  testolink:"leggi di più",
},
{
  
  immagine:"/images/storia4.jpg",
  titolo:"Il Pesciolino Curioso",
  paragrafo:"Pino, un pesciolino curioso, voleva scoprire cosa c’era fuori dall’acqua. Saltò più in alto che poteva e vide il cielo. Anche se non poteva viverci, da allora sapeva che il mondo era più grande di quanto pensasse.",
  testolink:"leggi di più",
},
{
  
  immagine:"/images/storia5.jpg",
  titolo:"Il Coniglio e la Carota Gigante",
  paragrafo:"Lillo il coniglio trovò una carota gigante e cercò di mangiarla da solo, ma era troppo grande! Allora chiamò tutti i suoi amici e insieme fecero un banchetto felice. Da quel giorno, Lillo imparò che condividere rende tutto più bello.",
  testolink:"leggi di più",
},
{
  
  immagine:"/images/storia6.jpg",
  titolo:"L’Uccellino che Non Sapeva Cantare",
  paragrafo:"Ugo, un piccolo uccellino, non sapeva cantare come gli altri. Provava e riprovava, ma il suo canto era diverso. Un giorno, il vento gli sussurrò: “La tua voce è unica!” e Ugo cantò con il cuore. Tutti lo ascoltarono incantati.",
  testolink:"leggi di più",
},
{
  
  immagine:"/images/storia7.jpeg",
  titolo:"La Nuvola Triste",
  paragrafo:"Una nuvoletta era triste perché non riusciva a brillare come il sole. Ma un giorno, cadde la pioggia e spuntò un arcobaleno. La nuvoletta capì che anche lei poteva portare bellezza nel mondo.",
  testolink:"leggi di più",
},
{
  
  immagine:"/images/storia8.jpg",
  titolo:"Il Topolino e il Formaggio",
  paragrafo:"Tito, un topolino goloso, trovò un pezzo di formaggio, ma era troppo grande per portarlo a casa. Incontrò un altro topolino affamato e decise di condividerlo. Da quel giorno, divennero migliori amici.",
  testolink:"leggi di più",
},
{
  
  immagine:"/images/storia9.jpg",
  titolo:"Il Drago Gentile",
  paragrafo:"Drago era grande e forte, ma non voleva spaventare nessuno. Un giorno, salvò una principessa in difficoltà e tutti capirono che era un drago buono. Da allora, fu amato da tutti.",
  testolink:"leggi di più",
},
{

  immagine:"/images/storia10.jpg",
  titolo:"La Stella Cadente e il Desiderio",
  paragrafo:"Leo vide una stella cadente e espresse un desiderio: voleva fare un amico. Il giorno dopo, incontrò una bambina che amava guardare le stelle e divennero inseparabili.",
  testolink:"leggi di più",
},
]



export default function Home() {
  return (
    <> 
   <Product product={capo}/>
  </>
 );
}