import { Component, OnInit } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "test",
  templateUrl: "./component.html",
  styleUrls: ["./component.css"],
})
export class TestComponent implements OnInit {
  version = "acp-app2 TestComponent. jquery version:  " + $().jquery;
  constructor() {}

  ngOnInit(): void {}
}
