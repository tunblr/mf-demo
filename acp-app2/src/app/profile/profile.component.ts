import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "app-profile-2",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  version = "acp-app2 ProfileComponent. jquery version:  " + $().jquery;
  constructor() {}

  ngOnInit(): void {}
}
