import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  constructor(public _service: GameService) {}
  noOFGames: number = 0;
  currentPage: number = 1;
  lastPage: number = 1;
  total: number = 1;
  ngOnInit(): void {
    this.noOFGames = this._service.games.length;
    this.total = Math.ceil(this.noOFGames / 10);
    this.lastPage = this.total;
    console.log(this.total, this.noOFGames);
  }

  public onPageChange(page) {
    this.currentPage = page;
    console.log(page);
    const limit = 10;
<<<<<<< HEAD
    const skip = page * limit;
=======
    const skip = (page - 1) * limit;
>>>>>>> 46bfd05fc3c08057d6b01cc26c118781f9ff2c30
    this._service.games1 = this._service.games(skip, skip + 10);
  }
}
