import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { LearnComponent } from './learn/learn.component';
import { FeatureComponent } from './feature/feature.component';
import { FaqComponent } from './faq/faq.component';
import { SupportComponent } from './support/support.component';
import { UpdatesComponent } from './updates/updates.component';
import { RequirementComponent } from './requirement/requirement.component';

export const appRoutes: Routes = [
  { path: "", redirectTo: "/", pathMatch: 'full'},
  { path: "", component: HomeComponent },
  { path: "learn", component: LearnComponent },
  { path: "feature", component: FeatureComponent },
  { path: "faq", component: FaqComponent },
  { path: "support", component: SupportComponent },
  { path: "updates", component: UpdatesComponent },
  { path: "requirement", component: RequirementComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
