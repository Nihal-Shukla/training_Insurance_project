import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavComponent } from './components/top-nav/top-nav.component';
import { MainNavComponent } from './components/main-nav/main-nav.component';
import { InsuranceAdComponent } from './components/insurance-ad/insurance-ad.component';
import { FoooterComponent } from './components/foooter/foooter.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,TopNavComponent,MainNavComponent,InsuranceAdComponent,FoooterComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'insurance_project';
}
