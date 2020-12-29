import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  constructor() {
    console.log("acp-app ProfileComponent", $().jquery);
  }

  ngOnInit(): void {}
}
