import { NgModule } from "@angular/core";

import { MaterialModule, SharedModule } from "../shared";

import { HelloFrameworkComponent } from "./hello-framework.component";
import { MosuePositionDirective } from "./mouse-position.directive";

@NgModule({
  declarations: [HelloFrameworkComponent, MosuePositionDirective],
  exports: [HelloFrameworkComponent, MosuePositionDirective],
  imports: [SharedModule, MaterialModule]
})
export class HelloFrameworkModule {}
