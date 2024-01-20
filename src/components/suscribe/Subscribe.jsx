import React from "react"

const Subscribe = () => {
  return (
    <div className="m-8 md:m-24">
      <div className="relative  p-4 md:p-12">
        <div className="hidden md:block h-[40px] circle mt-2 absolute top-[-20px]   "></div>

        <div className="subscribe-box z-10">
          <p className="subscribe-heading">Subscribe to Newsletter</p>
          <p className="subscribe-content">
            We have a wide experience in experience design and strategy,
          </p>

          <div className="subscribe-input-container w-4/5 mx-auto">
            <form>
              <div class="relative">
                <input
                  type="text"
                  class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white  focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter your email address"
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Send Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
