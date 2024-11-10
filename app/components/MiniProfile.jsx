import React from "react";

export default function MiniProfile() {
  return (
    <div className="flex ml-10 mt-0 mr-0 items-center border rounded p-2 justify-between space-x-3">
      <img
        className="w-16 h-16 rounded-full  p-[2px] "
        src="http://localhost:3000/_next/image?url=https%3A%2F%2Fembed.zenn.studio%2Fapi%2Foptimize-og-image%2F9d36593ca556938d86cf%2Fhttps%253A%252F%252Fnginxblog-8de1046ff5a84f2c-endpoint.azureedge.net%252Fblobnginxbloga72cde487e%252Fwp-content%252Fuploads%252F2024%252F05%252Fcropped-NGINX-product-square-1.png&w=1920&q=75"
        alt=" "
      />
      <div className="flex-1  mx-4">
        <h2 className=" font-bold ">Hmd.js</h2>
        <h3 className="text-gray-500 text-xs ">Welcome to Instagram</h3>
      </div>
      <button className="text-blue-500  rounded text-sm font-semibold  ">
        Signout
      </button>
    </div>
  );
}
