import React from "react";
import { Box, Divider, Typography, Tooltip } from "@mui/material";
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
      "I’ve built backend systems and APIs using Python, Java, Ruby, and Node.js. This includes designing authentication flows, implementing RESTful endpoints, and integrating databases like PostgreSQL and SQLite.",
    skills: [
      { id: "Java", Icon: FaJava, size: 40, color: "#f3b931" },
      { id: "Python", Icon: SiPython, size: 40, color: "#3776AB" },
      { id: "TypeScript", Icon: SiTypescript, size: 40, color: "#3178C6" },
      { id: "JavaScript", Icon: SiJavascript, size: 40, color: "#F7DF1E" },
      { id: "Node.js", Icon: SiNodedotjs, size: 40, color: "#8CC84B" },
      { id: "Ruby", Icon: SiRuby, size: 40, color: "#CC342D" },
      { id: "C++", Icon: SiCplusplus, size: 40, color: "#00599C" },
      { id: "Django", Icon: SiDjango, size: 40, color: "#138b4b" },
      { id: "FastAPI", Icon: SiFastapi, size: 40, color: "#009688" },
      { id: "PostgreSQL", Icon: SiPostgresql, size: 40, color: "#336791" },
      { id: "SQLite", Icon: SiSqlite, size: 40, color: "#003B57" },
    ],
  },
  {
    title: "Frontend",
    description:
      "I love crafting clean, responsive, and accessible user interfaces. Whether it's a dashboard or a full web app, I focus on making interfaces intuitive and engaging. I’ve used React, Next.js, and design systems like Material UI and styled-components to bring designs to life.",
    skills: [
      { id: "React", Icon: SiReact, size: 40, color: "#61DAFB" },
      { id: "Next.js", Icon: SiNextdotjs, size: 40, color: "#000000" },
      { id: "CSS3", Icon: FaCss3Alt, size: 40, color: "#1572B6" },
      { id: "HTML5", Icon: SiHtml5, size: 40, color: "#E34F26" },
      {
        id: "Styled Components",
        Icon: SiStyledcomponents,
        size: 40,
        color: "#DB7093",
      },
      { id: "MUI", Icon: SiMui, size: 40, color: "#007FFF" },
      { id: "Qt", Icon: SiQt, size: 40, color: "#41CD52" },
    ],
  },
  {
    title: "Machine Learning",
    description:
      "I’ve trained models for depth estimation, image classification, and health prediction using PyTorch, Scikit-learn, and OpenCV. I’m interested in optimizing machine learning models for constrained environments like edge devices, as well as reducing the energy overhead of running larger models such as LLMs.",
    skills: [
      { id: "OpenCV", Icon: SiOpencv, size: 40, color: "#60da76" },
      { id: "Pandas", Icon: SiPandas, size: 40, color: "#150458" },
      { id: "NumPy", Icon: SiNumpy, size: 40, color: "#208fde" },
      { id: "PyTorch", Icon: SiPytorch, size: 40, color: "#EE4C2C" },
      { id: "Scikit-learn", Icon: SiScikitlearn, size: 40, color: "#f8a23f" },
    ],
  },
  {
    title: "Other",
    description:
      "I’ve also developed skills across a range of supporting tools—version control, cloud services, API testing, UI design, and hardware prototyping.",
    skills: [
      { id: "GitHub", Icon: SiGithub, size: 40, color: "#181717" },
      { id: "Git", Icon: SiGit, size: 40, color: "#F05032" },
      { id: "Docker", Icon: SiDocker, size: 40, color: "#2496ED" },
      { id: "AWS", Icon: FaAws, size: 40, color: "#FF9900" },
      { id: "Postman", Icon: SiPostman, size: 40, color: "#FF6C37" },
      { id: "Figma", Icon: SiFigma, size: 40, color: "#F24E1E" },
      { id: "Arduino", Icon: SiArduino, size: 40, color: "#00979D" },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <>
      {skillCategories.map((category, index) => (
        <React.Fragment key={category.title}>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, my: 2 }}>
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
                return (
                  <Tooltip
                    key={id}
                    title={id}
                    arrow
                    placement="bottom"
                    PopperProps={{
                      modifiers: [
                        {
                          // Shift tooltip upward (negative offset on bottom placement)
                          name: "offset",
                          options: {
                            offset: [0, -8], // adjust -8 to your preference
                          },
                        },
                      ],
                    }}
                    componentsProps={{
                      tooltip: {
                        sx: {
                          backgroundColor: (theme) =>
                            theme.palette.background.paper,
                          color: (theme) => theme.palette.text.primary,
                        },
                      },
                      arrow: {
                        sx: {
                          color: (theme) => theme.palette.background.paper,
                        },
                      },
                    }}
                  >
                    <span>
                      <Icon
                        size={size}
                        color={color}
                        style={{ cursor: "pointer" }}
                      />
                    </span>
                  </Tooltip>
                );
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
