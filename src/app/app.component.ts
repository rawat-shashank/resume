import {
  Component,
  OnDestroy,
  ElementRef,
  AfterViewInit,
  QueryList,
  ViewChildren,
  HostListener,
} from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Subscription } from "rxjs";
import { slide } from "./router.animations";
import { ActivatedRoute } from "@angular/router";
import { share } from "rxjs/operators";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [slide],
})
export class AppComponent implements AfterViewInit, OnDestroy {
  activeFragment = this.route.fragment.pipe(share());
  breakPointSubscription: Subscription;
  ids: Array<String> = [
    "about",
    "skills",
    "experience",
    "projects",
    "education",
  ];
  isMobile: boolean;
  isMenuOpen = false;

  //for scroll
  @ViewChildren("links") links: QueryList<ElementRef>;

  currentActive = 0;
  aboutElementOffset: Number = null;
  skillsElementOffset: Number = null;
  experienceElementOffset: Number = null;
  projectsElementOffset: Number = null;
  educationElementOffset: Number = null;

  @HostListener("window:scroll", ["$event"])
  checkOffsetTop($event) {
    if (window.pageYOffset + 200 >= this.educationElementOffset) {
      this.currentActive = 4;
    } else if (
      window.pageYOffset + 200 < this.educationElementOffset &&
      window.pageYOffset + 200 >= this.projectsElementOffset
    ) {
      this.currentActive = 3;
    } else if (
      window.pageYOffset + 200 < this.projectsElementOffset &&
      window.pageYOffset + 200 >= this.experienceElementOffset
    ) {
      this.currentActive = 2;
    } else if (
      window.pageYOffset + 200 < this.experienceElementOffset &&
      window.pageYOffset + 200 >= this.skillsElementOffset
    ) {
      this.currentActive = 1;
    } else {
      this.currentActive = 0;
    }
  }

  constructor(
    breakpointObserver: BreakpointObserver,
    public route: ActivatedRoute
  ) {
    this.breakPointSubscription = breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe((result) =>
        result.matches ? (this.isMobile = false) : (this.isMobile = true)
      );
  }

  ngAfterViewInit() {
    this.links.forEach((link) => {
      switch (link.nativeElement.id) {
        case "about":
          this.aboutElementOffset = link.nativeElement.offsetTop;
          break;
        case "skills":
          this.skillsElementOffset = link.nativeElement.offsetTop;
          break;
        case "experience":
          this.experienceElementOffset = link.nativeElement.offsetTop;
          break;
        case "projects":
          this.projectsElementOffset = link.nativeElement.offsetTop;
          break;
        case "education":
          this.educationElementOffset = link.nativeElement.offsetTop;
          break;
      }
    });
  }

  ngOnDestroy() {
    if (this.breakPointSubscription) {
      this.breakPointSubscription.unsubscribe();
    }
  }
}
