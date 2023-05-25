import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './bootstrap.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'vizsga-alap-frontend';
  isMobileLayout = false;

  ngOnInit(): void {
    window.onresize = () => (this.isMobileLayout = window.innerWidth <= 991);
  }

  ngOnDestroy(): void {}
}
