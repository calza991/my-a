import Carta from "@/components/carta";

const carta = [
  {
    immagine: "images/.jpg",
    titolo: "",
    paragrafo: "",
    link: "",
    testolink: "",
  },
  {
    immagine: "images/.png",
    titolo: "",
    paragrafo: "",
    link: "",
    testolink: "",
  },
  {
    immagine: "images/.png",
    titolo: "",
    paragrafo: "",
    link: "",
    testolink: "",
  },
  {
    immagine: "images/.jpg",
    titolo: "",
    paragrafo: "",
    link: "",
    testolink: "",
  },
  {
    immagine: "images/.jpg",
    titolo: "",
    paragrafo: "",
    link: "",
    testolink: "",
  },
  {
    immagine: "images/.png",
    titolo: "",
    paragrafo: "",
    link: "",
    testolink: "",
  },
  {
    immagine: "images/.png",
    titolo: "",
    paragrafo: "",
    link: "",
    testolink: "",
  },
  {
    immagine: "images/.jpg",
    titolo: "",
    paragrafo: "",
    link: "",
    testolink: "",
  },
  {
    immagine: "images/.png",
    titolo: "",
    paragrafo: "",
    link: "",
    testolink: "",
  },
  {
    immagine: "images/.jpg",
    titolo: "",
    paragrafo: "",
    link: "",
    testolink: "",
  },
  

];

export default function Home() {
  return (
    <>
      <div className="flex flex-row gap-2">
        <Carta carta={carta} />
      </div>
    </>
  );
}
