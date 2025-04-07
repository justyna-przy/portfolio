import React from "react";
import { Box } from "@mui/material";
import AboutSidebar from "../components/AboutSidebar";
import FadeBox from "@/components/FadeBox";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";


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
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 240, 
          height: "100vh",
          zIndex: 3,
        }}
      >
        <AboutSidebar
          activeSection={activeSection}
          onScrollTo={handleScrollTo}
        />
      </Box>

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
          gap: 6,
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
            <Typography variant="h3">Hi, I&apos;m Justyna! 👋</Typography>
            <Typography variant="body1">
              I&apos;m currently studying to become a Software Engineer in the new
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
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
          ref={experienceRef}
        >
          <Experience />
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
          sx={{ display: "flex", flexDirection: "column", gap: 4 }}
          ref={skillsRef}
        >
          <Skills />
        </FadeBox>
      </Box>
    </>
  );
};

export default About;
