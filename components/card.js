export default function Card() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-slate-800">
      <div className=" flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
      <div className="bg-green-400 rounded-xl text-white">
      <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
      <div className="text-center uppercase"></div>
      <img
      src="images/Pastaallagricia.jpg"
      alt=""
      class="mx-auto duration-200 w-60 hover:scale-105"
    />
      <h2 className="mt-10 font-serif text-5xl text-center"></h2>
      <h3 className="mt-2 text-center"></h3>
      <div className="flex justify-center">
        <a
        href="#"
        className="inline-block px-10 py-3 my-6 text-center border border-green-500 rounded-lg duration-200 hover:bg-green-800 hover:border-green-800"
        >
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
            <div className="text-center uppercase"></div>
            <img
            src="images/Polpettedipatate.jpg"
            alt=""
            class="mx-auto duration-200 w-60 hover:scale-105"
            />
            <h2 className="mt-10 font-serif text-5xl text-center"></h2>
            <h3 className="mt-2 text-center"></h3>
           <a
              href="#"
              className="inline-block px-10 py-3 my-6 text-center border border-green-400 rounded-lg duration-200 hover:bg-green-800 hover:border-green-800"
            >
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
              <div className="text-center uppercase"></div>
              <img
              src="images/Brownies.jpg"
              alt=""
              class="mx-auto duration-200 w-60 hover:scale-105"
              />
              <h2 className="mt-10 font-serif text-5xl text-center"></h2>
              <h3 className="mt-2 text-center"></h3>
              <a
              href="#"
              className="inline-block px-10 py-3 my-6 text-center border border-green-400 rounded-lg duration-200 hover:bg-green-800 hover:border-green-800"
              >
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
