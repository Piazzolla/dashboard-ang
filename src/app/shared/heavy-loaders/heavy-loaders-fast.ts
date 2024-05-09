import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-heavy-loaders-fast',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <section [ngClass]="['w-full', cssClass]">
      <ng-content />
    </section>
  `
})
export class HeavyLoadersFastComponent {
  @Input({required: true}) cssClass!: string;
  constructor() {
    console.log('heavy loader fast created')
  }

}
