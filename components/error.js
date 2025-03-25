import Error from "@/components/wairaki";

const error = [
  {
    immagine: "images/aiuto.jpg",
    titolo: "ciao",
    paragrafo: "apollo figlio di mengo",
    link: "contatti",
    testolink: "Vai a remengo",
  },
  {
    immagine: "images/google.png",
    titolo: "ciao",
    paragrafo: "remengo",
    link: "contatti",
    testolink: "Vai a casa",
  },
  {
    immagine: "images/sfonfo.png",
    titolo: "ciao",
    paragrafo: "remengo",
    link: "contatti",
    testolink: "Vai a bere",
  },
  {
    immagine: "images/carrez.jpg",
    titolo: "ciao",
    paragrafo: "remengo",
    link: "contatti",
    testolink: "Vai a letto",
  },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-row gap-2">
        <Error error={error} />
      </div>
    </>
  );
}
