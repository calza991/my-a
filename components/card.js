export default function Card() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-slate-800">
      <div className=" flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
      <div className="bg-slate-700 rounded-xl text-white">
      <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
      <div className="text-center uppercase">prima ricetta</div>
      <h2 className="mt-10 font-serif text-5xl text-center">Pasta alla gricia</h2>
      <h3 className="mt-2 text-center">La pasta alla gricia è un tipico primo piatto della cucina laziale a base di guanciale e pecorino.</h3>
      <div className="flex justify-center">
        <a
        href="#"
        className="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg duration-200 hover:bg-violet-800 hover:border-violet-800"
        >
         Purchase
          </a>
         </div>
        </div>

            <div className="border-t border-slate-700"></div>

            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
            <div className="flex flex-col space-y-2">
              <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                strokewidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span className="text-sm ml-1"></span>
                </div>

            <div className="flex justify-center">
             <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                strokewidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1"></span>
                </div>

                <div className="flex justify-center">
                 <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  strokewidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                 >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                   <path d="M5 12l5 5l10 -10" />
                  </svg>
                  <span className="text-sm ml-1"></span>
                </div>
              </div>
            </div>
          </div>
        
          <div className="bg-violet-600 rounded-xl text-white">
            <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
            <div className="text-center uppercase">seconda ricetta</div>
            <h2 className="mt-10 font-serif text-5xl text-center">Polpette di patate</h2>
            <h3 className="mt-2 text-center">Le polpette di patate, arrichite con caciocavallo come la tipica ricetta siciliana, sono croccanti fuori e morbide dentro.</h3>
           <a
              href="#"
              className="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg duration-200 hover:bg-violet-800 hover:border-violet-800"
            >
              Purchase
            </a>
            </div>

            <div className="border-t border-slate-700"></div>
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              <div className="flex flex-col space-y-2">
              <div className="flex justify-center">
                  <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  strokewidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1"></span>
                </div>
                <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  strokewidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1"></span>
                </div>
                <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  strokewidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1"></span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-700 rounded-xl text-white">
            <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
              <div className="text-center uppercase">terza ricetta</div>
              <h2 className="mt-10 font-serif text-5xl text-center">Brownies</h2>
              <h3 className="mt-2 text-center">I brownies al cioccolato sono dei tipici dolcetti americani arrichhiti di nocciole tostate.</h3>
              <a
              href="#"
              className="inline-block px-10 py-3 my-6 text-center border border-violet-600 rounded-lg duration-200 hover:bg-violet-800 hover:border-violet-800"
              >
               Purchase
              </a>
            </div>

            <div className="border-t border-slate-700"></div>
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              <div className="flex flex-col space-y-2">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  strokewidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1"></span>
                </div>
                <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  strokewidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1"></span>
                </div>
                <div className="flex justify-center">
                <svg
                 xmlns="http://www.w3.org/2000/svg"
                 className="w-5 h-5"
                 viewBox="0 0 24 24"
                 strokewidth="2"
                 stroke="currentColor"
                 fill="none"
                 strokeLinecap="round"
                 strokeLinejoin="round"
                >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
                </svg>
                <span className="text-sm ml-1"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
