export default function Home() {
  return (
    <>
      <div className="bg-red-600 flex flex-row justify-center">
          <div className="">
              <img src="./images/logo.jpg" alt="logo" className="w-20"/>
          </div>
          <div className="flex flex-row loist-none gap-4 items-center">
              <li>Home</li>
              <li>Prodotti</li>
              <li>Contatti</li>
          </div>
      </div>
    </>
  );
}