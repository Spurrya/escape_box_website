
import { ExperienceCard } from "./ExperienceCard";
import { Experience } from "./experience-data";

interface ExperienceGridProps {
  experiences: Experience[];
}

export const ExperienceGrid = ({ experiences }: ExperienceGridProps) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {experiences && experiences.length > 0 ? (
        experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))
      ) : (
        <div className="col-span-full text-center py-12 text-muted-foreground">
          No experiences found in this category.
        </div>
      )}
    </div>
  );
};
