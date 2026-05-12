import { imgIrello, imgLapakin, imgLiburi, imgPlacein, imgWallyboard } from "@/assets";
import type { ProjectDomain } from "@/core/entities/domains/project.domain";
import type { BaseResponse } from "@/core/utils/base-response";
import { numericId } from "@/utils/helper";

export const mockRespProject: BaseResponse<ProjectDomain[]> = {
    status: {
        code: 200,
        message: 'Success'
    },
    data: [
        {
            id: `pr-${numericId()}`,
            name: "Irello",
            duration: "Several Days",
            description: "AI-powered task management and productivity application",
            thumbnail: imgIrello,
            techStack: "React JS, Tailwindcss",
            url: "https://irello.vercel.app/"
        },
        {
            id: `pr-${numericId()}`,
            name: "Wallyboard",
            duration: "Several Days",
            description: "AI-powered white board",
            thumbnail: imgWallyboard,
            techStack: "React JS, Tailwindcss",
            url: "https://wally-board.vercel.app/"
        },
        {
            id: `pr-${numericId()}`,
            name: "Liburi",
            duration: "Several Days",
            description: "Example Booking Vacation",
            thumbnail: imgLiburi,
            techStack: "React JS, Tailwindcss",
            url: "https://liburi.vercel.app/"
        },
        {
            id: `pr-${numericId()}`,
            name: "Lapakin",
            duration: "Several Days",
            description: "Example Street Vendor Location",
            thumbnail: imgLapakin,
            techStack: "React JS, Tailwindcss, leafletjs",
            url: "https://lapakin.vercel.app/"
        },
        {
            id: `pr-${numericId()}`,
            name: "PlaceIn",
            duration: "Several Days",
            description: "Globe World Explorer",
            thumbnail: imgPlacein,
            techStack: "React JS, Tailwindcss, leafletjs",
            url: "https://placein.vercel.app/"
        },
    ]
}