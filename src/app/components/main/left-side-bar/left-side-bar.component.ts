import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-left-side-bar',
  templateUrl: './left-side-bar.component.html',
  styleUrls: ['./left-side-bar.component.scss'],
})
export class LeftSideBarComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}
}
