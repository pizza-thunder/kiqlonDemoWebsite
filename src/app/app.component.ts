import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from "./components/navigation/navigation.component";
import { MastHeadComponent } from './components/mast-head/mast-head.component';
import { ServicesComponent } from './components/services/services.component';
import { PortfolioGridComponent } from './components/portfolio-grid/portfolio-grid.component';
import { AboutComponent } from './components/about/about.component';
import { TeamComponent } from './components/team/team.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from "./components/footer/footer.component";
import { PortfolioModalsComponent } from "./components/portfolio-modals/portfolio-modals.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
            NavigationComponent, 
            MastHeadComponent, 
            ServicesComponent, 
            PortfolioGridComponent, 
            AboutComponent, 
            TeamComponent, 
            ClientsComponent, 
            ContactComponent, 
            FooterComponent, 
            PortfolioModalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bootstrapLandingProject';
}
