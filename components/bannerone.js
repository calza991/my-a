export default function bannerone() {
    return(
    <>
     <div className="w-[90%] rounded-2xl flex flex-row  mx-auto">
      <div className="w-1/2 h-60 flex flex-col justify-center pl-10 gap-2">
        <h6 className="font-semibold text-sm font-sans">Upcoming Events</h6>
          <h1 className="font-bold text-2xl font-sans">Tech Summit: Shaping Tomorrow</h1>
    <p className="font-normal text-xs text-gray-400">Prepare to be part of dynamic conversation that will redefine the buondaries.</p>
     <a href="#" className="border border-black min-w-[90px] w-min rounded-lg p-3 text-xs font-bold">JOIN NOW</a>
     </div>
     <div className="w-1/2 h-60 lex-col justify-center pl-10">
     <img
      src="images/sfondo.png"
      alt="15 rem"
      className="h-60 w-full"
     />
     </div>
     </div>
     </>
    );
}  