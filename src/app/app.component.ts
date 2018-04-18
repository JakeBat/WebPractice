import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Amazing Web App';

  changeTitle() {
    this.title = 'Tis a Web Page';
  }


}

