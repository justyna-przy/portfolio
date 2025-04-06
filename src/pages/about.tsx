import React from "react";
import { Box } from "@mui/material";
import AboutSidebar from "../components/AboutSidebar";
import FadeBox from "@/components/FadeBox";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Divider from "@mui/material/Divider";
import { useRef, useState, useEffect } from "react";
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
  // Other
  SiGithub,
  SiGit,
  SiDocker,
  SiPostman,
  SiFigma, 
  SiArduino, 



} from "react-icons/si";

import { FaCss3Alt, FaJava, FaAws } from "react-icons/fa6";

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);

  // State to track which section is active
  const [activeSection, setActiveSection] = useState("about");

  // Smooth scroll to a section when a sidebar link is clicked
  const handleScrollTo = (sectionId: string) => {
    const refs: Record<string, React.RefObject<HTMLDivElement>> = {
      about: aboutRef,
      experience: experienceRef,
      education: educationRef,
      skills: skillsRef,
      achievements: achievementsRef,
    };
    const ref = refs[sectionId];
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Intersection Observer to update activeSection as user scrolls
  useEffect(() => {
    const sections = [
      { id: "about", ref: aboutRef },
      { id: "experience", ref: experienceRef },
      { id: "education", ref: educationRef },
      { id: "skills", ref: skillsRef },
      { id: "achievements", ref: achievementsRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const matchingSection = sections.find(
              (section) => section.ref.current === entry.target
            );
            if (matchingSection) {
              setActiveSection(matchingSection.id);
            }
          }
        });
      },
      {
        threshold: 0.5, // Section becomes active when 50% is visible
      }
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);


  return (
    <>
      {/* Fixed Sidebar on the Left */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 240, // Adjust to your sidebar width
          height: "100vh",
          zIndex: 3,
        }}
      >
        <AboutSidebar
          activeSection={activeSection}
          onScrollTo={handleScrollTo}
        />
      </Box>

      {/* Centered Main Content (normal page scroll) */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          maxWidth: 900,
          margin: "0 auto",
          pt: 15,
          pb: 10,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        <FadeBox
          title="01. About Me"
          sx={{
            mb: 4,
            display: "flex",
            justifyContent: "space-between",
            gap: 5,
            alignItems: "center",
          }}
          ref={aboutRef}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h3">Hi, I'm Justyna! 👋</Typography>
            <Typography variant="body1">
              I'm currently studying to become a Software Engineer in the new
              Immersive Software Engineering course at the University of
              Limerick. I love solving problems and learning new and exciting
              technologies. While I mostly focus on Software Engineering, I also
              have a variety of other interests such as Web-Design, Electronics,
              Machine Learning, Entrepreneurship, and Painting.
            </Typography>
            <Typography variant="body1">
              My website is lightly bird-themed—I recently developed an interest
              in birdwatching and painting birds, so you might see some bird
              drawings featured on my art page.🐦
            </Typography>
          </Box>
          <Box>
            <Image
              src="/images/justyna.png"
              alt="About Me"
              width={300}
              height={300}
              style={{
                borderRadius: "1rem",
              }}
            />
          </Box>
        </FadeBox>

        <FadeBox
          title="02. Experience"
          sx={{ display: "flex", flexDirection: "column", gap: 4 }}
          ref={experienceRef}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 5,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography variant="h3">Stripe</Typography>
              <Typography variant="h5">Software Engineer Intern</Typography>
              <Typography variant="h6">June 2024 - August 2024</Typography>
              <Typography variant="body1">
                I am currently an intern at a tech company, where I am gaining
                hands-on experience in software development and collaborating
                with a talented team.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",
                width: { xs: 150, sm: 200, md: 250 },
                aspectRatio: "4 / 3",
              }}
            >
              <Image
                src="/images/stripe.png"
                alt="Stripe Logo"
                fill
                style={{
                  objectFit: "contain",
                  borderRadius: "1rem",
                }}
              />
            </Box>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 5,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography variant="h3">Analog Devices</Typography>
              <Typography variant="h5">Software Engineer Intern</Typography>
              <Typography variant="h6">
                September 2024 - December 2024
              </Typography>
              <Typography variant="body1">
                I am currently an intern at a tech company, where I am gaining
                hands-on experience in software development and collaborating
                with a talented team.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",
                width: { xs: 150, sm: 200, md: 250 },
                aspectRatio: "3 / 2",
              }}
            >
              <Image
                src="/images/analog.jpg"
                alt="Analog Devices Logo"
                fill
                style={{
                  objectFit: "contain",
                  borderRadius: "1rem",
                }}
              />
            </Box>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 5,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography variant="h3">
                Consulting and Entrepreneurship Society
              </Typography>
              <Typography variant="h5">Web Developer</Typography>
              <Typography variant="h6">September 2023 - Present</Typography>
              <Typography variant="body1">
                I am currently pursuing a Bachelor of Science in Computer
                Science at the University of Limerick. My studies focus on
                software development, algorithms, and data structures.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",
                width: { xs: 150, sm: 200, md: 250 },
                aspectRatio: "3/ 2",
              }}
            >
              <Image
                src="/images/ulces.png"
                alt="UL Logo"
                fill
                style={{
                  objectFit: "contain",
                  borderRadius: "1rem",
                }}
              />
            </Box>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 5,
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <Typography variant="h3">IEEE Robotics Society</Typography>
              <Typography variant="h5">Student Branch Member</Typography>
              <Typography variant="h6">September 2020 - May 2024</Typography>
              <Typography variant="body1">
                I am currently pursuing a Bachelor of Science in Computer
                Science at the University of Limerick. My studies focus on
                software development, algorithms, and data structures.
              </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",
                width: { xs: 150, sm: 200, md: 250 },
                aspectRatio: "3 / 2",
              }}
            >
              <Image
                src="/images/ieee.jpg"
                alt="UL Logo"
                fill
                style={{
                  objectFit: "contain",
                  borderRadius: "1rem",
                }}
              />
            </Box>
          </Box>
        </FadeBox>
        <FadeBox
          title="03. Education"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
          ref={educationRef}
        >
          <Typography variant="h3">
            Immersive Software Engineering [ISE]
          </Typography>
          <Typography variant="h5">University of Limerick</Typography>
          <Typography variant="h6">September 2023 - Present</Typography>
          <Typography variant="body1">
            I am currently studying in the Immersive Software Engineering course
            at the University of Limerick. This program focuses on practical
            skills and hands-on experience in software development. I am
            learning various programming languages, frameworks, and tools to
            prepare for a successful career in the tech industry.
          </Typography>
        </FadeBox>
        <FadeBox
          title="04. Skills"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
          ref={skillsRef}
        >
          {/* Backend Category */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h3">Backend</Typography>
            <Typography variant="body1">
              I love problem-solving and building complex systems. I strive to
              create scalable, reliable, and secure solutions.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                mt: 1,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            > 
              <FaJava size={40} color="#f3b931" />
              <SiPython size={40} color="#3776AB" />
              <SiTypescript size={40} color="#3178C6" />
              <SiJavascript size={40} color="#F7DF1E" />
              <SiNodedotjs size={40} color="#8CC84B" />
              <SiRuby size={40} color="#CC342D" />
              <SiCplusplus size={40} color="#00599C" />
              <SiDjango size={40} color="#138b4b" />
              <SiFastapi size={40} color="#009688" />
              <SiPostgresql size={40} color="#336791" />
              <SiSqlite size={40} color="#003B57" />
            </Box>
          </Box>
          {/* Frontend Category */}
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2
            }}
          >
            <Typography variant="h3">Frontend</Typography>
            <Typography variant="body1">
              I enjoy creating beautiful and user-friendly interfaces. I focus
              on responsive design and accessibility.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                mt: 1,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <SiReact size={40} color="#61DAFB" />
              <SiNextdotjs size={40} color="#000000" />
              <FaCss3Alt size={40} color="#1572B6" />
              <SiHtml5 size={40} color="#E34F26" />
              <SiStyledcomponents size={40} color="#DB7093" />
              <SiMui size={40} color="#007FFF" />
              <SiQt size={40} color="#41CD52" />
            </Box>
          </Box>
          {/* Machine Learning*/}
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h3">Machine Learning</Typography>
            <Typography variant="body1">
              I am fascinated by the potential of AI and machine learning. I
              enjoy exploring data-driven solutions and building intelligent
              systems.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                mt: 1,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <SiOpencv size={40} color="#60da76" />
              <SiPandas size={40} color="#150458" />
              <SiNumpy size={40} color="#208fde" />
              <SiPytorch size={40} color="#EE4C2C" />
              <SiScikitlearn size={40} color="#f8a23f" />
            </Box>
          </Box>
          {/* Other */}
          <Divider />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Typography variant="h3">Other</Typography>
            <Typography variant="body1">
              I have a variety of other interests, including web design,
              electronics, and entrepreneurship. I love exploring new ideas and
              technologies.
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 1.5,
                mt: 1,
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <SiGithub size={40} color="#181717" />
              <SiGit size={40} color="#F05032" />
              <SiDocker size={40} color="#2496ED" />
              <FaAws size={40} color="#FF9900" />
              <SiPostman size={40} color="#FF6C37" />
              <SiFigma size={40} color="#F24E1E" />
              <SiArduino size={40} color="#00979D" />
            </Box>
          </Box>

        </FadeBox>
      </Box>
    </>
  );
};

export default About;
