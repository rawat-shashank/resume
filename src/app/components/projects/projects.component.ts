import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent {
  dataList: {
    title: string;
    company: string;
    desc: string;
    tech: string[];
  }[] = [
    {
      title: "SmartRisk",
      company: "Cropin",
      tech: ["Angular 8", "NgRX", "Leaflet", "Gdal", "PostgreSQL", "Node"],
      desc:
        "SmartRisk provides Risk Mitigation and forecasting for crop thorough AI based intelligence solution. It provides a graphical representation of Agricultural Data, such as best crop to grow in an area, analysis of crop grown in the past few years in the same area,  yield prediction and water stress. Empowering farmers, farming based company and financial insurance company to access the plots and crops grown.",
    },
    {
      title: "Ribbn Web",
      company: "Xelpmoc",
      tech: ["Angular 4", "Django", "MySql"],
      desc:
        "RIBBN provides healthcare service booking facilities for people in need, targeted closely on the people requiring post hospitalization care, including the ability to book an ambulance, a nurse or doctor, and many other professionals. Patient/User Registration captures all the basic and medical details of the user, directing later to the dashboard, where the previously filled details can be edited, a service can be booked, re-scheduled or cancelled. The entire vendor module, where there are about seven teams through which the users registration application passes, which takes care of getting in touch with the user to acquire any missing information which could be required for the service the user has booked, later appoint a vendor to provide the service, based on the areas the vendor provides the services in, and alloting a final asset such as a nurse to the patient.",
    },
    {
      title: "Ribbn Apps",
      company: "Xelpmoc",
      tech: ["Ionic 3/Angular 4", "Django", "MySql"],
      desc:
        "Made 3 apps, which are for the use of the vendors and their assets. One for the nurse where all the upcoming bookings allotted to the nurse shows up, including integrating Google Maps for the nurse to reach the location of the patient. Second app for the Driver of the Ambulance service, which shows the future bookings, current trip and the cancelled ones with their reasons selected by the user or its own vendor. The Third app is for the Hospital Coordinator, who is the person who is available in the hospitals affiliated with RIBBN, who approaches the patients and acts as a one stop shop for everyone at one hospital. The HC, through the app can register a patient on his/her behalf, book a service for the user on-spot. ",
    },
    {
      title: "Kanban Board",
      company: "Personal",
      tech: ["Angular 7", "Node", "PostgreSQL", "Nginx", "Docker"],
      desc:
        "An implementation of Kanban board, an agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency (or flow). Kanban boards use cards as taks, columns to visualize request list, in progress tasks list and completed tasks list.",
    },
    {
      title: "Web Resume",
      company: "Personal",
      tech: ["Angular 8", "Angular Material", "Github Actions CI/CD"],
      desc:
        "A novel approach to showcase few of my skills as well as providing a visually appealing fully responsive resume with easy navigation.",
    },
  ];
}
