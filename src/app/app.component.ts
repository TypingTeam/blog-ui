import { Component, model } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'blog-ui';

  counter = model(0);

  inc() {
    this.counter.set(this.counter() + 1);
  }

  dec() {
    this.counter.set(this.counter() - 1);
  }
}
