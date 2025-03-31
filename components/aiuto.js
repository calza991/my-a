export default function Aiuto() {
    return (
      <>
        <div className="w-[70%] bg-gray-600 mx-auto p-5 rounded-2xl">
          <div className="flex flex-row justify-between items-center mb-7">
            <img src="images/aiuto.jpg" alt="" className="w-20" />
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
            </svg>
          </div>
  
          <div className="mb-7">
            <h5 className="font-bold">Reset Setting</h5>
            <p className="text-black">
              Are you sure you want to reset all setting to their default values?
              this action cannot be undone
            </p>
          </div>
          <div>
            <p>
              Please type<span className="font-bold">"Reset setting"</span>to
              confirm
            </p>
            <div className="flex md:flex-row flex-col gap-2 ">
              <input
                type="text"
                placeholder="reset settings"
                className="border-1 border-gray-300 rounded-xl p-2 md:w-7/12 w-full bg-white"
              />
              <a
                href="#"
                className="bg-black text-white text-center p-3 px-5  rounded-2xl font-bold md:w-5/12 w-full"
              >
                {" "}
                I UNDERSTAND, RESET SETTINGS
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
  