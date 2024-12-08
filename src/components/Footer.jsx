
import { BsBehance, BsTwitter } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";

export default function Component() {
  return (
    <div className="my-10 min-h-96 w-screen  px-6 font-robert-regular" >
      <footer className="bg-[#101012] h-full text-white py-12 px-6 rounded-3xl relative overflow-hidden">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start relative z-10">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mr-4">
                <img
                  src="https://framerusercontent.com/images/fxW0iWhRHxxoOat9sSoOB3oPk.jpg?scale-down-to=512"
                  alt="test"
                  className="rounded-full size-12"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Vandal Studios</h2>
                <p className="text-yellow-500">We Design Impact.</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full">
                <BsTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full">
                <ImInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 flex justify-center items-center p-2 rounded-full">
                <BsBehance />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 justify-center items-center md:grid-cols-4 gap-8 mb-8 md:mb-0">
            <div>
              <h3 className="text-lg font-semibold mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Works
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-yellow-500">
                    Behance
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-right">
            <p className="mb-2 text-gray-400">Have an idea?</p>
            <a
              href="#"
              className="text-2xl font-semibold text-yellow-500 hover:underline inline-flex items-center"
            >
              Contact Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 ml-1"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      
        <div className="overflow-hidden absolute bottom-0   text-center" style={{ height: '14rem' }}>
  <h1 className="text-[20vw] font-robert-medium  font-extrabold leading-none text-gray-800 opacity-20">
    vandal
  </h1>
</div>

<div className=" h-48"></div>

   
      </footer>
    </div>
  );
}
