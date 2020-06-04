import { Component, HostBinding, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Pokemon } from '@shared/interfaces/pokemon';
import { DatabaseFacadeService } from '../../database/database-facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DetailedComponent implements OnInit {

  @HostBinding('class.grid-item') true;

  @HostBinding('class.inactive') get inactive() {
    return !this.pokemon?.isOwned;
  }

  @Input() pokemon: Pokemon;
  private dbpokemon$: Observable<any>;

  constructor(private databaseFacadeService: DatabaseFacadeService) {
  }

  ngOnInit(): void {
    this.dbpokemon$ = this.databaseFacadeService.findPokemon(this.pokemon?.name)
  }

}
