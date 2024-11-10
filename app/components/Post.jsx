
import React from "react";
import {
  Bars3Icon,
  BookmarkIcon,
  ChatBubbleLeftEllipsisIcon,
  HeartIcon,
  PaperAirplaneIcon,
  FaceSmileIcon,
} from "@heroicons/react/24/outline";
export const Post = ({ username, userimg, img, caption }) => {
  return (
    <div className="my-7 border rounded-sm  ">
      {/* header */}
      <div className="flex items-center p-3 border-b-2 ">
        <img
          src={userimg}
          alt="img0"
          className="rounded-full h-12 w-12 object-cover border-2 border-red-600 p-[2px] mr-3 hover:scale-110"
        />
        <p className="flex-1 font-bold">{username}</p>
        <Bars3Icon className=" btn " />
      </div>

      {/* img post  */}
      <div className="w-full h-96 overflow-hidden items-center justify-center p-1 ">
        <img src={img} alt="" className="w-full  object-contain rounded-md " />
      </div>

      {/* buttons */}
      <div className="flex justify-between p-4 border-b-2">
        <div className="flex  space-x-4">
          <HeartIcon className="btn  fill-red-500  animate-pulse " />
          <ChatBubbleLeftEllipsisIcon className="btn animate-bounce " />
          <PaperAirplaneIcon className="btn   " />
        </div>
        <BookmarkIcon className="btn  fill-amber-400" />
      </div>

      {/* caption  truncate  */}

      <div className="p-4 ">
        <p className="font-bold mb-1">3Likes</p>
        <span className="font-bold mr-1 ">{username}</span> {caption}
      </div>

      {/* comments */}

      {/* inputs box */}
      <form className="flex items-center p-4  space-x-2">
        <FaceSmileIcon className=" btn fill-yellow-400  " />
        <input
          type="text"
          className="flex-1 outline-none bg-stone-200  border rounded-md pl-2 py-[2px] "
          placeholder="Add new comment..."
        />
        <button type="submit" className="font-semibold text-blue-500 ">
          Post
        </button>
      </form>
    </div>
  );
};
