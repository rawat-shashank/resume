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
        "Frontend system solution architect, as well as active maintainer and developer of Smart-risk project",
    },
    {
      title: "Software Developer",
      duration: "FEB 2018 - DEC 2018",
      company: "Xelpmoc/Techl33t InfoSystem",
      location: "Bangalore",
      description:
        "Frontend system solution architect, as well as active maintainer and developer of Smart-risk project",
    },
    {
      title: "Technical and Operation Analyst",
      duration: "JUL 2013 - JAN 2018",
      company: "Amdocs",
      location: "Gurgaon",
      description:
        "Frontend system solution architect, as well as active maintainer and developer of Smart-risk project",
    },
    {
      title: "Subject Matter Expert",
      duration: "AUG 2014 - JUL 2017",
      company: "Amdocs",
      location: "Pune",
      description:
        "Frontend system solution architect, as well as active maintainer and developer of Smart-risk project",
    },
  ];

  constructor() {}
}
