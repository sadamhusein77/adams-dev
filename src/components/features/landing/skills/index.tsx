import { icoAngular, icoReact, icoSass, icoTailwindcss, icoTypescript, icoZustand, icoCss, icoDocker, icoGit, icoGitLab, icoHTML, icoJavascript, icoJenkins, icoJest, icoJira, icoKarma, icoNodeJs, icoNpm, icoRedux, icoUbuntu, icoVite, icoVSCode } from "@/assets";
import SkillCard from "@/components/ui/skill-indicator";
import { Marquee } from "@/components/ui/marquee";

import style from './style.module.scss';
import SmartImage from "@/components/ui/smart-image";

const AllSkills = () => {
  const allSkillsData = [
    { name: "CSS", icon: icoCss},
    { name: "Docker", icon: icoDocker},
    { name: "Git", icon: icoGit},
    { name: "GitLab", icon: icoGitLab},
    { name: "HTML", icon: icoHTML},
    { name: "Javascript", icon: icoJavascript},
    { name: "Jenkins", icon: icoJenkins},
    { name: "Jest", icon: icoJest},
    { name: "Jira", icon: icoJira},
    { name: "Karma", icon: icoKarma},
    { name: "NodeJS", icon: icoNodeJs},
    { name: "NPM", icon: icoNpm},
    { name: "Redux-Toolkit", icon: icoRedux},
    { name: "Ubuntu", icon: icoUbuntu},
    { name: "Vite", icon: icoVite},
    { name: "VSCode", icon: icoVSCode},
  ]

  return(
      <Marquee
        items={allSkillsData.map((t,i)=>
        <div className={style.item} key={i}>
          <SmartImage
            key={i}
            src={t.icon}
            alt={`Image ${i}`}
            wrapperClassName={style.item__img}
          />
          <p className={style.item__name}>{t.name}</p>
        </div>
        )}
        duration={18}
        pauseOnHover
        gradientFade
      />
  )
}

export default function MySkills() {
  const skills = [
    { name: "React", level: 95, icon: icoReact },
    { name: "Angular", level: 90, icon: icoAngular },
    { name: "Typescript", level: 90, icon: icoTypescript },
    { name: "Tailwindcss", level: 95, icon: icoTailwindcss },
    { name: "SASS", level: 90, icon: icoSass },
    { name: "Zustand", level: 90, icon: icoZustand }
  ];

  return (
    <div className={style.skills}>
      <p className={style.skills__heading}>My Expertise</p>
      {skills.map((s, i) => (
        <SkillCard key={i} {...s} />
      ))}
      <div className={style.skills__all}>
        <AllSkills />
      </div>
    </div>
  );
}
