import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Index } from "./pages/private/index";
import { Header } from "./layout/public/header/header";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Index, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TrabajoFinal');
}
