"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { TbPlaylist } from "react-icons/tb";
import useAuthModal from "../hooks/useAuthModal";

interface LibraryProps {
  library: { title: string; songs: string };
}

const Library: React.FC<LibraryProps> = ({ library }) => {
  const authModal = useAuthModal();
  const onClick = () => {};

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <TbPlaylist className="text-neutral-400" size={26} />
          <p>{library.title}</p>
        </div>
        <AiOutlinePlus
          onClick={onClick}
          size={26}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>
      <div className="flex flex-col gap-y-2 mt-4 px-3">{library.songs}</div>
    </div>
  );
};

export default Library;
