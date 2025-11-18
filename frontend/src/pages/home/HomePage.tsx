import TopBar from "@/components/TopBar";
import { useMusicStore } from "@/store/useMusicStore";
import { useEffect } from "react";
import FeaturedSection from "./components/FeaturedSection";
import { ScrollArea } from "@/components/ui/scroll-area";
import SectionGrid from "./components/SectionGrid";
import { usePlayerStore } from "@/store/usePlayerStore";

const HomePage = () => {
  const {
    fetchFeaturedSongs,
    fetchTrendingSongs,
    fetchMadeForYouSongs,
    isLoading,
    madeForYouSongs,
    featuredSongs,
    trendingSongs,
  } = useMusicStore();
  const { initializeQueue } = usePlayerStore();

  useEffect(() => {
    fetchFeaturedSongs();
    fetchTrendingSongs();
    fetchMadeForYouSongs();
  }, [fetchFeaturedSongs, fetchTrendingSongs, fetchMadeForYouSongs]);

  useEffect(() => {
    if (
      madeForYouSongs.length > 0 &&
      featuredSongs.length > 0 &&
      trendingSongs.length > 0
    ) {
      const allSongs = [...madeForYouSongs, ...featuredSongs, ...trendingSongs];
      initializeQueue(allSongs);
    }
  }, [madeForYouSongs, featuredSongs, trendingSongs, initializeQueue]);
  return (
    <main className="rounded-md overflow-hidden bg-linear-to-b from-zinc-800 to-zinc-900 h-full ">
      <TopBar />
      <ScrollArea className="h-[calc(100vh-180px)]">
        <div className="p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6">Hello</h1>
          <FeaturedSection />

          <div className="space-y-8">
            <SectionGrid
              title="Made for you"
              songs={madeForYouSongs}
              isLoading={isLoading}
            />
            <SectionGrid
              title="Trending"
              songs={trendingSongs}
              isLoading={isLoading}
            />
          </div>
        </div>
      </ScrollArea>
    </main>
  );
};

export default HomePage;
