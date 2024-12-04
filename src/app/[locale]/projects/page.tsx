import { Flex } from "@/once-ui/components";
import MasonryGrid from "@/components/projects/MasonryGrid";
import { baseURL } from "@/app/resources";
import { projects } from "@/app/resources/content"; // Import the projects data

export async function generateMetadata() {
    const title = projects.title;
    const description = projects.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/projects`,
            images: [
                {
                    url: ogImage,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}

export default function Projects() {
    return (
        <Flex fillWidth>
            <MasonryGrid projects={projects.items} /> {/* Pass projects.items */}
        </Flex>
    );
}
