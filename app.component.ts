// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadBarComponent } from './components/head-bar/head-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Correction: styleUrl -> styleUrls
})
export class AppComponent {
  title = 'library-app';
}
