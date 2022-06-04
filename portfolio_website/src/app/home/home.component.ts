import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Certifications', cols: 2, rows: 1, selector: 'certs'},
          { title: 'Home Servers', cols: 2, rows: 1, selector: 'servers' },
          { title: 'Notable Languages/Frameworks Known', cols: 2, rows: 1, selector: 'langs' },
          { title: 'Socials', cols: 2, rows: 1, selector: 'socials' }
        ];
      }

      return [
        { title: 'Certifications', cols: 1, rows: 1, selector: 'certs'},
        { title: 'Home Servers', cols: 1, rows: 1, selector: 'servers' },
        { title: 'Notable Languages/Frameworks Known', cols: 1, rows: 1, selector: 'langs' },
        { title: 'Socials', cols: 1, rows: 1, selector: 'socials' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
