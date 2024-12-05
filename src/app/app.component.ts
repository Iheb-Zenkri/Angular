import { Component } from '@angular/core';
import { LoginPageComponent } from "./pages/login-page/login-page.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [LoginPageComponent]
})
export class AppComponent {
}
