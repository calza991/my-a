export default function Carta({ carta }) {
  return (
    <>
      {carta.map((capone) => (
        <div className="w-96 rounded-2xl shadow-xl">
          <div className="w-full">
            <img src={capone.immagine} className="rounded-t-3xl" alt="" />
          </div>
          <div className="p-5">
            <h1 className="font-bold text-3xl">{capo.titolo}</h1>
            <p className="text-xl mb-4">{capo.paragrafo}</p>
            <a
              href={capone.link}
              className="bg-violet-500 p-4 rounded-3xl mt-4 "
            >
              {capone.testolink}
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

