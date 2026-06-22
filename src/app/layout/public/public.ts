import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-public',
  imports: [Header, RouterOutlet, Footer],
  templateUrl: './public.html',
  styleUrl: './public.css',
})
export class Public {}
