export default function Product({product}){
  return(
     <>
     
     {product.map((capo) =>(

     <div class="flex flex-col items-center justify-center mt-5 ">
      <div class="flex flex-col p-6 m-3 space-y-10 bg-slate-700 rounded-2x1 shadow-2x1 md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16">
        <div>
        <img
          src={capo.immagine}
          alt=""
          class="mx-auto duration-200 w-80 hover:scale-105"
        />
          </div>

        <div class="flex flex-col space-y-6">
        <div class="flex flex-col mb-4 space-y-3 text-center md:text-left">
        <div>
        <div class="inline-block px-3 py-1 text-sm text-white bg-sky-500 rounded-full">
           {capo.titolo}
        </div>
        </div>
        <div class="max-w-sm text-2x1 font-medium">
        {capo.paragrafo}
        </div>
        <div class="group">
        <button class="w-full transition-all duration-150 bg-blue-600 text-white border-b-8 border-b-blue-600 rounded-lg group-hover:border-t-8 group-hover:border-b-0 group-hover:bg-blue-600 group-hover:border-t-blue-600 group-hover:shadow-lg ">
        <div class="px-8 py-4 duration-150 bg-blue-400 rounded-lg group-hover:bg-blue-600">
        {capo.testolink}
        </div>
        </button>
        </div>

        <div class="flex items-center space-x-3 group">
        <div class="w-3 h-3 bg-black rounded-full group-hover:animate-ping"></div>
        <div class="text-sm">50+ pcs. in stock</div>
         </div>
        </div>
      </div>
    </div>
   </div>

))}

     </>
  )
}