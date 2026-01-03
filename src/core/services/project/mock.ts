import { imgLiburi, imgLuxspace, imgNotes } from "@/assets";
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
            name: "Luxspace",
            duration: "Several Days",
            description: "Prototype of sample web e-commerce",
            thumbnail: imgLuxspace,
            techStack: "React JS, Tailwindcss",
            url: "https://luxtspace-rfd.netlify.app/"
        },
        {
            id: `pr-${numericId()}`,
            name: "My Keep Notes",
            duration: "Several Days",
            description: "Example notes with temporary storage",
            thumbnail: imgNotes,
            techStack: "React JS, Tailwindcss",
            url: "https://my-keep-notes.netlify.app/"
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
    ]
}