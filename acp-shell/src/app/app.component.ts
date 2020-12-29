import { Component } from "@angular/core";
import * as $ from "jquery";
import { MicrofrontendService } from "./microfrontends/microfrontend.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  version = "acp-shell AppComponent. jquery version:  " + $().jquery;
  constructor(public mfService: MicrofrontendService) {}
}
