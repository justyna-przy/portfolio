import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { FaJava, FaCss3Alt, FaAws } from "react-icons/fa6";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiRuby,
  SiCplusplus,
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiSqlite,
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiStyledcomponents,
  SiMui,
  SiQt,
  SiOpencv,
  SiPandas,
  SiNumpy,
  SiPytorch,
  SiScikitlearn,
  SiGithub,
  SiGit,
  SiDocker,
  SiPostman,
  SiFigma,
  SiArduino,
} from "react-icons/si";

interface Skill {
  id: string;
  Icon: React.ElementType;
  size: number;
  color: string;
}

interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Backend",
    description:
      "I love problem-solving and building complex systems. I strive to create scalable, reliable, and secure solutions.",
    skills: [
      { id: "java", Icon: FaJava, size: 40, color: "#f3b931" },
      { id: "python", Icon: SiPython, size: 40, color: "#3776AB" },
      { id: "typescript", Icon: SiTypescript, size: 40, color: "#3178C6" },
      { id: "javascript", Icon: SiJavascript, size: 40, color: "#F7DF1E" },
      { id: "nodedotjs", Icon: SiNodedotjs, size: 40, color: "#8CC84B" },
      { id: "ruby", Icon: SiRuby, size: 40, color: "#CC342D" },
      { id: "cplusplus", Icon: SiCplusplus, size: 40, color: "#00599C" },
      { id: "django", Icon: SiDjango, size: 40, color: "#138b4b" },
      { id: "fastapi", Icon: SiFastapi, size: 40, color: "#009688" },
      { id: "postgresql", Icon: SiPostgresql, size: 40, color: "#336791" },
      { id: "sqlite", Icon: SiSqlite, size: 40, color: "#003B57" },
    ],
  },
  {
    title: "Frontend",
    description:
      "I enjoy creating beautiful and user-friendly interfaces. I focus on responsive design and accessibility.",
    skills: [
      { id: "react", Icon: SiReact, size: 40, color: "#61DAFB" },
      { id: "nextdotjs", Icon: SiNextdotjs, size: 40, color: "#000000" },
      { id: "css3", Icon: FaCss3Alt, size: 40, color: "#1572B6" },
      { id: "html5", Icon: SiHtml5, size: 40, color: "#E34F26" },
      { id: "styledcomponents", Icon: SiStyledcomponents, size: 40, color: "#DB7093" },
      { id: "mui", Icon: SiMui, size: 40, color: "#007FFF" },
      { id: "qt", Icon: SiQt, size: 40, color: "#41CD52" },
    ],
  },
  {
    title: "Machine Learning",
    description:
      "I am fascinated by the potential of AI and machine learning. I enjoy exploring data-driven solutions and building intelligent systems.",
    skills: [
      { id: "opencv", Icon: SiOpencv, size: 40, color: "#60da76" },
      { id: "pandas", Icon: SiPandas, size: 40, color: "#150458" },
      { id: "numpy", Icon: SiNumpy, size: 40, color: "#208fde" },
      { id: "pytorch", Icon: SiPytorch, size: 40, color: "#EE4C2C" },
      { id: "scikitlearn", Icon: SiScikitlearn, size: 40, color: "#f8a23f" },
    ],
  },
  {
    title: "Other",
    description:
      "I have a variety of other interests, including web design, electronics, and entrepreneurship. I love exploring new ideas and technologies.",
    skills: [
      { id: "github", Icon: SiGithub, size: 40, color: "#181717" },
      { id: "git", Icon: SiGit, size: 40, color: "#F05032" },
      { id: "docker", Icon: SiDocker, size: 40, color: "#2496ED" },
      { id: "aws", Icon: FaAws, size: 40, color: "#FF9900" },
      { id: "postman", Icon: SiPostman, size: 40, color: "#FF6C37" },
      { id: "figma", Icon: SiFigma, size: 40, color: "#F24E1E" },
      { id: "arduino", Icon: SiArduino, size: 40, color: "#00979D" },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <>
      {skillCategories.map((category, index) => (
        <React.Fragment key={category.title}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Typography variant="h3">{category.title}</Typography>
            <Typography variant="body1">{category.description}</Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                mt: 1,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {category.skills.map((skill) => {
                const { Icon, size, color, id } = skill;
                return <Icon key={id} size={size} color={color} />;
              })}
            </Box>
          </Box>
          {index !== skillCategories.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </>
  );
};

export default Skills;
