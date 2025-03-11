import { Component } from '@angular/core';
import { PageContainerComponent } from './components/page-container/page-container.component';

@Component({
  selector: 'app-root',
  imports: [PageContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-angular-230040';
}
