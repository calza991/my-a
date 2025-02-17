export default function Card() {
    return(
      <>
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      <div className="flex flex-col my-6 space-y-6 md:space-y-0 md:space-x-6 md:flex-row md:my-0">
        <div className="bg-slate-700 rounded-xl text-white">
          <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
          <div className="text-center uppercase">Basic</div>
          <h2 className="mt-10 font-serif text-5xl text-center">100GB</h2>
          <h3 className="mt-2 text-center">$1.99/Month</h3>
          <div className="flex justify-center">
            <a
              href="#"
              className="inline-block px-10 py-3 my-6 text-center borber-violet-600 rounded-lg duration-200 hover:bg-violet-800 hover:bonder-violet-800"
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
                  xml
                >

                </svg>

                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
      </>
    );
}