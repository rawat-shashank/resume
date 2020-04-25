import { Component, OnDestroy } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Subscription } from "rxjs";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
})
export class AboutComponent implements OnDestroy {
  breakPointSubscription: Subscription;
  isMobile = false;

  constructor(breakpointObserver: BreakpointObserver) {
    this.breakPointSubscription = breakpointObserver
      .observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge])
      .subscribe((result) =>
        result.matches ? (this.isMobile = false) : (this.isMobile = true)
      );
  }

  onContact() {
    const url = "https://api.whatsapp.com/send?phone=+917276521821";
    var win = window.open(url, "_blank");
    if (win) {
      //Browser has allowed it to be opened
      win.focus();
    } else {
      //Browser has blocked it
      alert("Please allow popups for this website");
    }
  }

  ngOnDestroy() {
    if (this.breakPointSubscription) {
      this.breakPointSubscription.unsubscribe();
    }
  }
}
