import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthComponent } from "./layout/auth/auth.component";
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgxSpinnerComponent } from 'ngx-spinner';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AuthComponent , MainComponent ,FooterComponent , NgxSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
role:string=""
adminName:string="youssef"
studentName:string="mohamed"
 
}
