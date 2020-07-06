import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService} from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  heroe: any = {};
  key : string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroeService: HeroesService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.heroe = this._heroeService.getHeroe(params['id']); 
      
    });
  }


  ngOnInit(): void {
  }
}
