import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import Image from "next/image";

interface Job {
  company: string;
  role: string;
  date: string;
  description: string;
  image: string;
  alt: string;
  aspectRatio: string;
}

const jobs: Job[] = [
  {
    company: "Stripe",
    role: "Software Engineer Intern",
    date: "June 2024 - August 2024",
    description:
      "During my time at Stripe, I was working with the PayTo local payment method, which is an Australian real-time payment method that allows customers to make payments directly from their bank accounts. I implemented support for PayTo on Stripe Checkout and Payment Links, and enabled PayTo to work as a Dynamic Payment Method. I worked on both the backend (Ruby) and frontend (React), and throughly tested everything to ensure a seamless customer and merchant experience. I was part of the Aggregators team, but I collaborated with many other teams to make it all come together.",
    image: "/images/stripe.png",
    alt: "Stripe Logo",
    aspectRatio: "4 / 3",
  },
  {
    company: "Analog Devices",
    role: "Software Engineer Intern",
    date: "September 2024 - December 2024",
    description:
    "I spent my time at Analog Devices contributing to two European funded research projects, SmartMesh IP (part of the OpenSwarm project), and an embedded monocular depth estimation project. In SmartMesh, I redesigned some of their sample GUI applications using custom tkinter. I also created a dynamic mesh topology explorer webpage with a live updating topology. In the monocular depth estimation project, I researched techniques and trained a convolutional neural network to estimate depth from a monocular camera stream on a MAX7800 microcontroller. ",
    image: "/images/analog.jpg",
    alt: "Analog Devices Logo",
    aspectRatio: "3 / 2",
  },
  {
    company: "Consulting and Entrepreneurship Society",
    role: "Web Developer",
    date: "September 2023 - Present",
    description:
      "I developed an informational website for the Consulting and Entrepreneurship society as their lead web-developer. I designed the website to be visually interesting and intuitive for users and deployed it using GitHub pages. The website is used to promote the society across UL. Visit it here: https://ulces.ie ",
    image: "/images/ulces.png",
    alt: "UL Logo",
    aspectRatio: "3 / 2",
  },
  {
    company: "IEEE Robotics Society",
    role: "Student Branch Member",
    date: "September 2020 - May 2024",
    description:
      "As part of the IEEE Robotics Society, I’ve contributed to a number of projects for robotics competitions. I was part of the team that competed—and won—at the International Robotics Championship in Malta, where we built and programmed a battle-bot. I’m currently working on programming an underwater robot for the upcoming Rami UAV competition. ",
    image: "/images/ieee.jpg",
    alt: "UL Logo",
    aspectRatio: "3 / 2",
  },
];

const Experience: React.FC = () => {
  return (
    <>
      {jobs.map((job, index) => (
        <React.Fragment key={job.company}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 6,
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Typography variant="h3">{job.company}</Typography>
              <Typography variant="h5">{job.role}</Typography>
              <Typography variant="h6">{job.date}</Typography>
              <Typography variant="body1">{job.description}</Typography>
            </Box>
            <Box
              sx={{
                position: "relative",
                width: { xs: 150, sm: 200, md: 250 },
                aspectRatio: job.aspectRatio,
              }}
            >
              <Image
                src={job.image}
                alt={job.alt}
                fill
                style={{
                  objectFit: "contain",
                  borderRadius: "1rem",
                }}
              />
            </Box>
          </Box>
          {index !== jobs.length - 1 && <Divider />}
        </React.Fragment>
      ))}
    </>
  );
};

export default Experience;
