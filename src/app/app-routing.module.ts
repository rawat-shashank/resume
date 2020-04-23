import { NgModule } from "@angular/core";
import { Routes, RouterModule, ExtraOptions } from "@angular/router";
import { AppComponent } from "./app.component";

const routerOptions: ExtraOptions = {
  onSameUrlNavigation: "reload",
  scrollPositionRestoration: "enabled",
  anchorScrolling: "enabled",
  scrollOffset: [0, 50],
};

const routes: Routes = [{ path: "", component: AppComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
