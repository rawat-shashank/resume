import { Component } from "@angular/core";

@Component({
  selector: "app-experience",
  templateUrl: "./experience.component.html",
  styleUrls: ["./experience.component.scss"],
})
export class ExperienceComponent {
  items: {
    title: string;
    duration: string;
    company: string;
    location: string;
    description: string;
  }[] = [
    {
      title: "Software Engineer",
      duration: "DEC 2018 - Present",
      company: "CropIn",
      location: "Bangalore",
      description:
        "Sr. Software Engineer (Full-Stack), with responsibilities of handling front-end architecture, a team of three,  backend support and providing proof of concepts for various ideas related to geospatial data. I have been working with leaflet (an open-source JavaScript library for mobile-friendly interactive maps), Angular, NgRX, Django (V1 of smartrisk backend), Node, PostgreSQL, AWS, Nginx and many more.",
    },
    {
      title: "Software Developer",
      duration: "FEB 2018 - DEC 2018",
      company: "Xelpmoc/Techl33t InfoSystem",
      location: "Bangalore",
      description:
        "Full Stack software developer, with responsibilities to provide end to end projects delivery from proof of concepts to environment and project setup to QA release to Production release. While working there I got to choose and work with numbers of technologies such as Angular (Typescript), Django ( Python), Laravel (PHP), MySQL and many more.",
    },
    {
      title: "Technical and Operation Analyst",
      duration: "JUL 2013 - JAN 2018",
      company: "Amdocs",
      location: "Gurgaon",
      description:
        "Working on Amdoc’s in house billing system as support to provide SLA based work around, solutions and root cause analysis of issues on a daily basis. Writing scripts to maintain multiple virtual machines from health-check, clean-up to automation of daily tasks. Also, supported Airtel India Amdocs Transition from IBM especially on self-care portal and payments.",
    },
    {
      title: "Subject Matter Expert",
      duration: "AUG 2014 - JUL 2017",
      company: "Amdocs",
      location: "Pune",
      description:
        "Working on day to day billing cycles of Various clients from all around the globe. Monitoring and Maintaining virtual server, health-checkups, clean-up and automation of tasks.",
    },
  ];

  constructor() {}
}
