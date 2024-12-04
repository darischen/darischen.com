import ProjectCard from "@/components/ProjectCards";
import { Project } from "@/app/[locale]/projects/projectType"; // Import the Project type

interface MasonryGridProps {
    projects: Project[]; // Define the expected type of the projects prop
}

export default function MasonryGrid({ projects }: MasonryGridProps) {
    return (
        <div className="masonry-grid">
            {projects.map((project, index) => (
                <ProjectCard
                    key={index} // Use index as the fallback key (consider using a unique ID if available)
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                />
            ))}
        </div>
    );
}
