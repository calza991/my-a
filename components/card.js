export default function Card() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-slate-800">
      <div className=" flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
      <div className="bg-green-400 rounded-xl text-white">
      <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
      <div className="text-center uppercase">prima ricetta</div>
      <img
      src="images/Pastaallagricia.jpg"
      alt=""
      class="mx-auto duration-200 w-60 hover:scale-105"
    />
      <h2 className="mt-10 font-serif text-5xl text-center">Pasta alla gricia</h2>
      <h3 className="mt-2 text-center">La pasta alla gricia è un tipico primo piatto della cucina laziale a base di guanciale e pecorino.</h3>
      <div className="flex justify-center">
        <a
        href="#"
        className="inline-block px-10 py-3 my-6 text-center border border-green-500 rounded-lg duration-200 hover:bg-green-800 hover:border-green-800"
        >
         scopri di più sulle nostre ricette veloci e deliziose 
          </a>
         </div>
        </div>

            <div className="border-t border-slate-700"></div>

            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
            <div className="flex flex-col space-y-2">
              </div>
            </div>
          </div>
        
          <div className="bg-green-400 rounded-xl text-white">
            <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <div className="text-center uppercase">seconda ricetta</div>
            <img
            src="images/Polpettedipatate.jpg"
            alt=""
            class="mx-auto duration-200 w-60 hover:scale-105"
            />
            <h2 className="mt-10 font-serif text-5xl text-center">Polpette di patate</h2>
            <h3 className="mt-2 text-center">Le polpette di patate, arrichite con caciocavallo come la tipica ricetta siciliana, sono croccanti fuori e morbide dentro.</h3>
           <a
              href="#"
              className="inline-block px-10 py-3 my-6 text-center border border-green-400 rounded-lg duration-200 hover:bg-green-800 hover:border-green-800"
            >
             scopri di più sulle nostre ricette veloci e deliziose 
            </a>
            </div>

            <div className="border-t border-slate-700"></div>
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              <div className="flex flex-col space-y-2">
              </div>
            </div>
          </div>

          <div className="bg-green-400 rounded-xl text-white">
            <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
              <div className="text-center uppercase">terza ricetta</div>
              <img
              src="images/Brownies.jpg"
              alt=""
              class="mx-auto duration-200 w-60 hover:scale-105"
              />
              <h2 className="mt-10 font-serif text-5xl text-center">Brownies fondenti</h2>
              <h3 className="mt-2 text-center">I brownies al cioccolato fondende sono dei tipici dolcetti americani arrichhiti di nocciole tostate.</h3>
              <a
              href="#"
              className="inline-block px-10 py-3 my-6 text-center border border-green-400 rounded-lg duration-200 hover:bg-green-800 hover:border-green-800"
              >
              scopri di più sulle nostre ricette veloci e deliziose 
              </a>
            </div>

            <div className="border-t border-slate-700"></div>
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              <div className="flex flex-col space-y-2">
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
