interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    link: string;
}

export default function ProjectCard({ title, description, image, link }: ProjectCardProps) {
    return (
        <a href={link} className="project-card">
            <img src={image} alt={title} className="project-card-image" />
            <div className="project-card-content">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </a>
    );
}
