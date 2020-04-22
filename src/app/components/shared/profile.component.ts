import { Component, Input } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-profile",
  template: `
    <div class="profile">
      <img
        src="assets/img/me.jpg"
        [style.height.px]="height ? height : 250"
        [style.width.px]="width ? width : 250"
      />
    </div>
    <h3 *ngIf="isName" style="{text-align: center;}">{{ isName }}</h3>
    <div class="icons">
      <button
        mat-icon-button
        *ngFor="let link of links"
        (click)="onNavigate(link.link)"
      >
        <mat-icon [svgIcon]="link.icon"></mat-icon>
      </button>
    </div>
  `,
  styles: [
    `
      .profile {
        margin: 2rem 0;
        text-align: center;
      }

      h3 {
        text-align: center;
      }

      img {
        height: fit-content;
        max-height: 250px !important;
        object-fit: cover;
        object-position: center;
        border-radius: 50%;
        vertical-align: middle;
      }

      .icons {
        text-align: center;
      }
    `,
  ],
})
export class ProfileComponent {
  @Input() isName: string;
  @Input() width: string;
  @Input() height: string;
  links: { icon: string; link: string }[] = [
    {
      icon: "linkedin",
      link: "https://www.linkedin.com/in/shashank-rawat-24797a5a",
    },
    { icon: "github", link: "https://github.com/Shapboyz" },
  ];
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      `linkedin`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "/assets/icons/linkedin-in-brands.svg"
      )
    );
    this.matIconRegistry.addSvgIcon(
      `github`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        "/assets/icons/github-brands.svg"
      )
    );
  }

  onNavigate(url) {
    var win = window.open(url, "_blank");
    if (win) {
      //Browser has allowed it to be opened
      win.focus();
    } else {
      //Browser has blocked it
      alert("Please allow popups for this website");
    }
  }
}
