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

  observer: any;

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

  doTheThing(e: any) {
    switch (e.target.id) {
      case "about":
        this.currentActive = 0;
        break;
      case "skills":
        this.currentActive = 1;
        break;
      case "experience":
        this.currentActive = 2;
        break;
      case "projects":
        this.currentActive = 3;
        break;
      case "education":
        this.currentActive = 4;
        break;

      default:
        this.currentActive = 0;
        break;
    }
  }

  ngAfterViewInit() {
    const config = {
      rootMargin: "0px 0px -20% 0px",
      threshold: [0.5, 0.75, 1.0],
    };
    this.links.forEach((link) => {
      const elHeight = link.nativeElement.getBoundingClientRect().height;
      const threshold = 0.5;
      let th = threshold;

      // The element is too tall to ever hit the threshold - change threshold
      if (elHeight > window.innerHeight * threshold) {
        th = ((window.innerHeight * threshold) / elHeight) * threshold;
      }

      const config = {
        rootMargin: "0% 0px -20% 0px",
        threshold: [0.25, 0.5, 0.75, 1.0],
      };

      new IntersectionObserver((iEls) => {
        iEls.forEach((iEl) => {
          if (iEl.intersectionRatio >= th && iEl.intersectionRatio <= 1.0) {
            this.doTheThing(iEl);
          }
        });
      }, config).observe(link.nativeElement);
    });

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
