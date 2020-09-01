import { Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { Pokemon } from '@shared/interfaces/pokemon';
import { DatabaseFacadeService } from '../../database/database-facade.service';
import { forkJoin, Observable } from 'rxjs';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailedComponent implements OnInit, OnChanges {

  @HostBinding('class.grid-item') true;
  isEggMove$: Observable<boolean[]>;

  @HostBinding('class.inactive') get inactive() {
    return !this.pokemon?.isOwned;
  }

  @Input() pokemon: Pokemon;
  dbpokemon$: Observable<any>;
  moves$: Observable<any[]>;

  constructor(private databaseFacadeService: DatabaseFacadeService) {
  }

  ngOnInit(): void {
    this.initPokemonAttributes();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initPokemonAttributes();
  }

  initPokemonAttributes() {
    this.dbpokemon$ = this.databaseFacadeService.findPokemon(this.pokemon?.name);
    this.moves$ = forkJoin(this.pokemon.moves.map(move => {
      return this.databaseFacadeService.findMove(move);
    }));

    this.isEggMove$ = forkJoin(this.pokemon.moves.map(move => {
      return this.databaseFacadeService.isEggMove(this.pokemon.name, move);
    }));
  }

}
