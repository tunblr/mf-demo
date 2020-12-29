import { Component } from "@angular/core";
import * as $ from "jquery";
import { MicrofrontendService } from "./microfrontends/microfrontend.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(public mfService: MicrofrontendService) {
    console.log("acp-shell AppComponent", $().jquery);
  }
}
