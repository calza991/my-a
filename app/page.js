export default function Error({ error }) {
  return (
    <>
      {error.map((capo) => (
        <div className="w-96 rounded-2xl shadow-xl">
          <div className="w-full">
            <img src={capo.immagine} className="rounded-t-3xl" alt="" />
          </div>
          <div className="p-5">
            <h1 className="font-bold text-3xl">{capo.titolo}</h1>
            <p className="text-xl mb-4">{capo.paragrafo}</p>
            <a
              href={capo.link}
              className="bg-violet-500 p-4 rounded-3xl mt-4 "
            >
              {capo.testolink}
            </a>
          </div>
        </div>
      ))}
    </>
  );
}

