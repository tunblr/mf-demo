import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TestRoutingModule } from "./routing.module";
import { TestComponent } from "./component";

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, TestRoutingModule],
})
export class TestModule {}
