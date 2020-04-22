import { Component, Input } from "@angular/core";

@Component({
  selector: "app-vertical-timeline",
  templateUrl: "./vertical-timeline.component.html",
  styleUrls: ["./vertical-timeline.component.scss"],
})
export class VerticalTimelineComponent {
  @Input() items: {
    title: string;
    subtitle?: string;
    duration?: string;
    company?: string;
    location?: string;
    description: string;
  }[];

  constructor() {}
}
