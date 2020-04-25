import { NgModule } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { LayoutModule } from "@angular/cdk/layout";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSliderModule } from "@angular/material/slider";
import { MatMenuModule } from "@angular/material/menu";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatChipsModule } from "@angular/material/chips";
import { MatDialogModule } from "@angular/material/dialog";

@NgModule({
  imports: [
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatCardModule,
    MatListModule,
    MatSliderModule,
    MatMenuModule,
    MatExpansionModule,
    MatChipsModule,
    MatDialogModule,
  ],
  exports: [
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatCardModule,
    MatListModule,
    MatSliderModule,
    MatMenuModule,
    MatExpansionModule,
    MatChipsModule,
    MatDialogModule,
  ],
})
export class AngularMaterialModule {}
