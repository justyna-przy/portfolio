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
        threshold: 0.25, // Section becomes active when 50% is visible
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
              I&apos;m currently studying to become a Software Engineer in the
              new Immersive Software Engineering course at the University of
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
            I&apos;m currently studying Immersive Software Engineering, a unique
            and hands-on software engineering degree that blends academics with
            real-world industry experience. The program leads to an integrated
            BSc/MSc in just four years and is built around learning by
            doing—half of our time is spent on campus working in teams on
            projects, and the other half in paid residencies with top tech
            companies.
            <br />
            <br />
            So far, I’ve completed residencies at Stripe and Analog Devices,
            where I worked on everything from frontend/backend development to
            embedded AI research. My ISE class projects have included a smart
            chessboard with live piece detection, a real-time device metrics
            collection app, an Irish bird classification neural network, and
            several interactive web and game applications. Currently, I&apos;m
            averaging a QCA of 3.9/4.0.
          </Typography>
        </FadeBox>

        <FadeBox
          title="04. Skills"
          sx={{ display: "flex", flexDirection: "column", gap: 4 }}
          ref={skillsRef}
        >
          <Skills />
        </FadeBox>

        <FadeBox
          title="0.5 Achievements"
          sx={{ display: "flex", flexDirection: "column", gap: 2, my: 4 }}
          ref={achievementsRef}
        >
          <Typography variant="h3">Achievements</Typography>
          <Box
            component="ul"
            sx={{
              pl: "1.2rem",
              m: 0,
              listStyleType: "circle",
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
            }}
          >
            <li>
              My teammate and I won first place in UL Student Entrepreneur of
              the Year for our idea, &apos;Little Footprints&apos;.
            </li>
            <li>
              I was awarded the Patch San Francisco Fellowship, which provided
              me a fully funded opportunity to explore Silicon Valley&apos;s tech
              scene and meet founders.
            </li>
            <li>
              My IEEE Robotics Team won the IEEE International Robotics
              Championship in Malta.
            </li>
            <li>
              I was elected as a UL Consulting and Entrepreneurship Society
              committee member.
            </li>
            <li>
              My team won first place in the 2023 NDRC Start-up Sprint for our
              idea, &apos;VirTown&apos;.
            </li>
            <li>
              My team pitched our project to judges at HackIreland 2025, which
              was a VR study environment.
            </li>
          </Box>
        </FadeBox>
      </Box>
    </>
  );
};

export default About;
