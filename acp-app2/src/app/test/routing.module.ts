import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { TestComponent } from "./component";

const routes: Routes = [{ path: "", component: TestComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule {}