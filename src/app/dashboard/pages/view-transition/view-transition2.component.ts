import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TitleComponent } from "@shared/title/title.component";

@Component({
    selector: 'app-view-transition',
    standalone: true,
    template: `
    <app-title title="View Transition 2" />
    <section class="flex justify-end">
      <img srcset="https://picsum.photos/id/237/200/300"
        alt="Picsum"
        with="200" height="300"
        style="view-transition-name: hero-1"
      />
      <div class="fixed bottom-16 right-10 bg-blue-800 w-32 h-32 rounded" style="view-transition-name: hero-2">


      </div>
    </section>
  `,
    styles: `
    :host {
      display: block;
    }
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        TitleComponent
    ]
})
export default class ViewTransition2Component { }