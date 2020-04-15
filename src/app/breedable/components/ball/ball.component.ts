import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { SpreadsheetDataService } from '@shared/services/spreadsheet-data.service';
import { Worksheet } from '@shared/interfaces/worksheet';
import { SlugifyPipe } from '@shared/pipes/slugify.pipe';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.scss'],
})
export class BallComponent implements OnInit, OnDestroy {

  worksheetTitle: string;
  worksheet: Worksheet;

  subscriptions: Subscription[] = [];

  constructor(
    private spreadsheetDataService: SpreadsheetDataService,
    private route: ActivatedRoute,
    private slugifyPipe: SlugifyPipe
  ) {
  }

  ngOnInit(): void {

    this.route.paramMap.pipe(
      tap(params => this.worksheetTitle = params.get('worksheetTitle')),
      switchMap(
        () => {
          return this.spreadsheetDataService.getSpreadsheetInformation()
        }
      )).subscribe(
      {
        next: (spreadsheetData) => {

          this.worksheet = spreadsheetData.worksheets.filter(
            worksheet => this.slugifyPipe.transform(worksheet.title) === this.worksheetTitle
          )?.[0];
          console.log('Www',this.worksheet);

        }
      }
    );
  }

  trackBy(index, pokemon){
    return index + pokemon.dex;
  }

  ngOnDestroy(): void {
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
