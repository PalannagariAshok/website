/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import "./Works.css";

// Import ../../assets/recentprojects/
import Portfolio from "../../assets/recentprojects/react-portfolio.svg";
import Veritru from "../../assets/recentprojects/confluence1.svg";
import Lofo from "../../assets/recentprojects/diquark.svg";
import Startup from "../../assets/recentprojects/compost.svg";
import Lacalle from "../../assets/recentprojects/causeway.svg";
import tride from "../../assets/recentprojects/tride.png";
import evrides from "../../assets/recentprojects/evrides.png";
import potholes from "../../assets/recentprojects/potholes.png";
import franklin from "../../assets/recentprojects/franklin.png";
import telematics from "../../assets/recentprojects/telematics.png";
const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: "100vw",
    marginTop: "3em",
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Tride Mobility Website",
      description: `This application is developed in web & mobile, for Two Wheeler Electric Vehicles`,
      alter: "Startup Project",
      image: `${tride}`,
      href: "https://tridemobility.com/",
    },

    {
      id: 2,
      title: "Evrides Website",
      description: `Showcase the website for evrides saas platform`,
      alter: "Evrides Project",
      image: `${evrides}`,
      href: "https://evrides.in/",
    },
    {
      id: 2,
      title: "Pothole Management",
      description: `It is a Telangana Government Project for finding potholes`,
      alter: "Pothole Management Project",
      image: `${potholes}`,
      href: "https://potholemgmt.evrides.in/",
    },
    {
      id: 2,
      title: "Franklinev Website",
      description: `Showcase the website for Franklinev customers and clients`,
      alter: "Franklinev Website",
      image: `${franklin}`,
      href: "https://www.franklinev.com/",
    },
    {
      id: 2,
      title: "Telematics Application",
      description: `It is a Telematics Application for tracking the vehicle information`,
      alter: "Telematics Website",
      image: `${telematics}`,
      href: "",
    },
    {
      id: 3,
      title: "Wishwa Project",
      description: `A Web Application for Crowd Funding. Support
      for designing and developing the finance module.`,
      alter: "Wishwa Project",
      image: `${Portfolio}`,
      href: "https://wishwa.org/",
    },
    {
      id: 4,
      title: "ConfluenceEdu Project",
      description: `A Customized Web Application to manage a Study
       Abroad Business including Analytics
      .`,
      alter: "React Portfolio",
      image: `${Veritru}`,
      href: "https://dashboard.confluenceedu.com/",
    },
    {
      id: 5,
      title: "Diquark Project",
      description: `An IoT Ecosystem with Admin Dashboard, User Dashboard, Android and
      iOS Mobile Applications. The mobile applications act as companion
      apps to the Diquark Secure IoT Device to view live data and
      control the device.`,
      image: `${Lofo}`,
      href: "https://diquarkproducts.com/",
    },
    {
      id: 6,
      title: "Compost Project",
      description: `Collaborated with AutoMac Technologies to provide various IIoT
      Web Applications.`,
      image: `${Startup}`,
      href: "https://automactechnologies.in/",
    },
    {
      id: 7,
      title: "Causeway365 Project",
      description: `This application is developed in web & mobile, for Medical Staffing`,
      alter: "Startup Project",
      image: `${Lacalle}`,
      href: "https://causeway365.com/",
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={project.title}>
            <div className="__img_wrapper">
              <a className="__img_wrapper" href={project.href} target="_blank">
                <img src={project.image} alt={project.alter} />
              </a>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={project.id + ". " + project.title} />
              </h3>
              <p className="description">{project.description}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
