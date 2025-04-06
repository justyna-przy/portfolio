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
      "I am currently an intern at a tech company, where I am gaining hands-on experience in software development and collaborating with a talented team.",
    image: "/images/stripe.png",
    alt: "Stripe Logo",
    aspectRatio: "4 / 3",
  },
  {
    company: "Analog Devices",
    role: "Software Engineer Intern",
    date: "September 2024 - December 2024",
    description:
      "I am currently an intern at a tech company, where I am gaining hands-on experience in software development and collaborating with a talented team.",
    image: "/images/analog.jpg",
    alt: "Analog Devices Logo",
    aspectRatio: "3 / 2",
  },
  {
    company: "Consulting and Entrepreneurship Society",
    role: "Web Developer",
    date: "September 2023 - Present",
    description:
      "I am currently pursuing a Bachelor of Science in Computer Science at the University of Limerick. My studies focus on software development, algorithms, and data structures.",
    image: "/images/ulces.png",
    alt: "UL Logo",
    aspectRatio: "3 / 2",
  },
  {
    company: "IEEE Robotics Society",
    role: "Student Branch Member",
    date: "September 2020 - May 2024",
    description:
      "I am currently pursuing a Bachelor of Science in Computer Science at the University of Limerick. My studies focus on software development, algorithms, and data structures.",
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
              gap: 5,
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
