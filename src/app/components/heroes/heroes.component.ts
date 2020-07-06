import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [],
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private _heroService: HeroesService, private router: Router) {}

  ngOnInit(): void {
    this.heroes = this._heroService.getHeroes();
  }

  verHeroe(idx: number) {
    //console.log(idx);
    this.router.navigate(['/heroe', idx]);
  }
}
