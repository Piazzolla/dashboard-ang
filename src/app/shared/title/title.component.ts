import { CommonModule } from '@angular/common';
import { booleanAttribute, ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [
    CommonModule,
  ],
  // template: `<h1 class="text-3xl mb-5">{{title }} - {{withShadow}}</h1>`,
  template: `<h1 class="text-3xl mb-5">{{title }}</h1>`,
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class TitleComponent {
  // title = signal<String>('Control Flow')
  @Input({ required: true}) title!: string;
  @Input({ transform: booleanAttribute}) withShadow: boolean = false;
 }
