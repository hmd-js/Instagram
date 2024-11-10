
import Image from "next/image";
import {
  PaperAirplaneIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
export const Header = () => {
  return (
    <div className="  shadow-lg border-b-2  bg-white sticky top-0 z-50 max-w-2xl items-center mx-auto  mb-2  grid-cols-1 md:grid-cols-2 md:max-w-2xl xl:grid-cols-2 xl:max-w-6xl ">
      <div className="flex  items-center justify-between mx-auto xl:max-w-6xl xl:mx-auto">
        {/* left / instagram logo  */}
        <div className=" relative hidden lg:inline-grid w-24 h-12 cursor-pointer ">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
            alt="instagram-logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative  w-10 h-10 flex-shrink-0  lg:hidden cursor-pointer  hover:scale-125 transition-all duration-150 ease-out ">
          <Image
            alt="instagramlogo"
            layout="fill"
            objectFit="contain"
            src="https://www.pngplay.com/wp-content/uploads/12/Instagram-Logo-Free-PNG.png"
          />
        </div>

        {/* /* middle / search input */}
        <div className="max-w-xs ">
          <div className="relative   w-60 ">
            <input
              className=" outline-none h-7 focus:border-black   rounded-md sm:text-sm bg-gray-300 block w-full pl-1  "
              type="search"
              placeholder="🔎search..."
            />
          </div>
        </div>

        {/* Right / icons  */}
        <div className="flex items-center justify-end space-x-4  ">
          <HomeIcon className="navBtn" />
          <Bars3Icon className="   h-6 w-6 md:hidden cursor-pointer hover:scale-125 transition-all duration-150 ease-out " />
          <div className="navBtn relative ">
            <PaperAirplaneIcon className="navBtn -rotate-45 " />
            <div className="flex absolute -top-2 -right-2 items-center justify-center bg-red-500 w-5 h-5 rounded-full text-white animate-pulse text-sm ">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <div className=" w-10 h-10  rounded-full relative cursor-pointer hover:scale-125 transition-all duration-150 ease-out ">
            <Image
              layout="fill"
              objectFit=""
              alt=""
              src="https://embed.zenn.studio/api/optimize-og-image/9d36593ca556938d86cf/https%3A%2F%2Fnginxblog-8de1046ff5a84f2c-endpoint.azureedge.net%2Fblobnginxbloga72cde487e%2Fwp-content%2Fuploads%2F2024%2F05%2Fcropped-NGINX-product-square-1.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
