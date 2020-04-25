import { Component } from "@angular/core";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.scss"],
})
export class EducationComponent {
  items: {
    title: string;
    duration: string;
    company: string;
    location: string;
    description: string;
  }[] = [
    {
      title: "B. Tech - CSE",
      duration: "2010 - 2014",
      company: "Lovely Professional University",
      location: "Punjab",
      description: "",
    },
    {
      title: "12th CBSE",
      duration: "2009 - 2010",
      company: "Bal Mandir Sr. Sec School",
      location: "Haridwar",
      description: "",
    },
    {
      title: "10th CBSE",
      duration: "2007 - 2008",
      company: "Bal Bharti Sr. Sec School",
      location: "Haridwar",
      description: "",
    },
  ];

  constructor() {}
}
