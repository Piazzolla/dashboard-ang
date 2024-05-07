import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: "./side-menu.componet.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {
    public menuItems = routes.map( route => route.children ?? [] )
    .flat()
    .filter( route => route && route.path)
    .filter( route => !route.path!.includes(':'));
 }
