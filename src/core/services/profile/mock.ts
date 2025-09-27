import type { ProfileDomain } from "@/core/entities/domains/profile.domain";
import type { BaseResponse } from "@/core/utils/base-response";

export const mockRespProfile: BaseResponse<ProfileDomain> = {
    status: {
        code: 200,
        message: 'Success'
    },
    data: {
        firstName: 'Sadam',
        lastName: 'Husein',
        greeting: "Greetings | I'm a dedicated Front-End Developer with over 4 years of hands-on experience crafting dynamic and responsive user interfaces. My expertise lies in the React.js ecosystem, where I specialize in building efficient, scalable, and visually appealing web applications. I am passionate about creating seamless user experiences and translating complex designs into clean, maintainable code."
    }
}