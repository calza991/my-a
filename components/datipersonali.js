export default function Datipersonali() {
    return(
        <>
          <div className="bg-white w-[70%] mx-auto rounded-2xl p-5">
            <div>
                <h1 className="font-bold text-2xl">
                    Basic Information
                </h1>
                <h5 className="text-gray-500">
                  Update your profile information below.
                </h5>
            </div>

            <div className="flex md:flex-row flex-col gap-4">
              <div className="flex flex-col md:w-1/2 w-full">
                <label for="">First Name</label>
                <input type="text" placeholder="Emma" className="p-3 border-1 border-gray-400 border rounded-xl"/>
              </div>

              <div className="flex flex-col md:w-1/2 w-full">
                <label for="">Last Name</label>
                <input type="text" placeholder="Roberts" className="p-3 border-1 border-gray-400 border rounded-xl"/>
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-4">
                <div className="flex flex-col md:w-1/4 w-full">
                   <label for="">I'm</label>
                   <select name="" id="" className="p-3 border-1 border-gray-400 border rounded-xl">
                      <option value="">Luca</option>
                    </select>   
                </div>

                <div className="flex flex-col md:w-1/4 w-full">
                   <label for="">Birth Date</label>
                   <input type="text" placeholder="Select a Date" className="p-3 border-1 border-gray-400 border rounded-xl"/>
                </div>

                <div className="flex flex-col md:w-1/4 w-full">
                   <label for="">Day</label>
                   <select name="" id="" className="p-3 border-1 border-gray-400 border rounded-xl"></select> 
                </div>

                <div className="flex flex-col md:w-1/4 w-full">
                   <label for="">Year</label>
                   <select name="" id="" className="p-3 border-1 border-gray-400 border rounded-xl"></select>     
                </div>
            </div>
            <div className="flex md:flex-row flex-col gap-4">
              <div className="flex flex-col md:w-1/2 w-full">
                <label for="">Email</label>
                <input type="text" placeholder="emma@gmail.com" className="p-3 border-1 border-gray-400 border rounded-xl"/>
              </div>

              <div className="flex flex-col md:w-1/2 w-full">
                <label for="">Confirm Email</label>
                <input type="text" placeholder="emma@gmail.com" className="p-3 border-1 border-gray-400 border rounded-xl"/>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-4">
              <div className="flex flex-col md:w-1/2 w-full">
                <label for="">Location</label>
                <input type="text" placeholder="Florida, USA" className="p-3 border-1 border-gray-400 border rounded-xl"/>
              </div>

              <div className="flex flex-col md:w-1/2 w-full">
                <label for="">Phone Number</label>
                <input type="text" placeholder="+123 0123 456 789" className="p-3 border-1 border-gray-400 border rounded-xl"/>
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-4">
              <div className="flex flex-col md:w-1/2 w-full">
                <label for="">Languange</label>
                <input type="text" placeholder="Languange" className="p-3 border-1 border-gray-400 border rounded-xl"/>
              </div>

              <div className="flex flex-col md:w-1/2 w-full">
                <label for="">Skills</label>
                <input type="text" placeholder="skills" className="p-3 border-1 border-gray-400 border rounded-xl"/>
              </div>
            </div>
          </div>
        </>
    )
}