
import { EpisodeCard } from "./EpisodeCard";
import { Episode } from "./episode-data";

interface EpisodeGridProps {
  episodes: Episode[];
}

export const EpisodeGrid = ({ episodes }: EpisodeGridProps) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {episodes && episodes.length > 0 ? (
        episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))
      ) : (
        <div className="col-span-full text-center py-12 text-muted-foreground">
          No episodes found in this category.
        </div>
      )}
    </div>
  );
};
