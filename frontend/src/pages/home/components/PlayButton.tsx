import { Button } from "@/components/ui/button";
import { usePlayerStore } from "@/store/usePlayerStore";
import type { Song } from "@/types";
import { Pause, Play, AudioLines } from "lucide-react";

const PlayButton = ({ song }: { song: Song }) => {
  const { currentSong, isPlaying, setCurrentSong, togglePlay } =
    usePlayerStore();
  const isCurrentSong = currentSong?._id === song._id;

  const handlePlay = () => {
    if (isCurrentSong) togglePlay();
    else setCurrentSong(song);
  };

  // When song is playing, show AudioLines by default, Pause on hover
  if (isCurrentSong && isPlaying) {
    return (
      <>
        <div className="absolute bottom-3 right-2 size-10 flex items-center justify-center group-hover:hidden">
          <AudioLines className="size-8 text-green-500 animate-pulse" />
        </div>
        <Button
          size={"icon"}
          onClick={handlePlay}
          className="absolute bottom-3 right-2 bg-green-500 hover:bg-green-400 hover:scale-105 transition-all 
            hidden group-hover:flex"
        >
          <Pause className="size-5 text-black" />
        </Button>
      </>
    );
  }

  return (
    <Button
      size={"icon"}
      onClick={handlePlay}
      className={`absolute bottom-3 right-2 bg-green-500 hover:bg-green-400 hover:scale-105 transition-all 
        opacity-0 translate-y-2 group-hover:translate-y-0 ${
          isCurrentSong ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
    >
      <Play className="size-5 text-black" />
    </Button>
  );
};

export default PlayButton;
