import { Component } from "@angular/core";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
})
export class SkillsComponent {
  technicalSkills: { title: string; value: number }[] = [
    { title: "Angular 2+ (Typescript)", value: 4.2 },
    { title: "Node/Express (Javascript)", value: 3.6 },
    { title: "Ionic  (Typescript)", value: 3.2 },
    { title: "Django/Flask (Python)", value: 3.8 },
    { title: "Mysql/Sqlite3/PostgreSQL", value: 3.4 },
  ];

  softSkills: { title: string; value: number }[] = [
    { title: "Communication", value: 4.6 },
    { title: "Language", value: 4.4 },
    { title: "Sports", value: 4.2 },
  ];

  constructor() {}
}
