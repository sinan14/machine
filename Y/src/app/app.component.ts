import { Component } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Games';
  constructor(public _service: GameService) {}
  search(event: any) {
    const str = event.target.value;
    if (str != '') {
      this._service.games1 = this._service.games.filter(
        (s: any) => s.title.toLowerCase().indexOf(str.toLowerCase()) !== -1
      );
    } else {
      this._service.games1 = this._service.games.slice(0, 22);
    }
  }
}
