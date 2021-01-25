import {
  AfterContentInit,
  Component,
  ContentChildren,
  HostBinding,
  Input,
  OnDestroy,
  QueryList,
  ViewEncapsulation
} from '@angular/core';
import {GridAppearanceType} from './grid-appearance.type';
import {GridItemComponent} from './grid-item/grid-item.component';
import {MatTableDataSource} from '@angular/material/table';
import {Subscription} from 'rxjs';
import {GridService} from './services/grid.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent implements AfterContentInit, OnDestroy {

  @HostBinding('class.grid') isGrid = true;
  @Input() @HostBinding('class.hide-inactives') hideInactiveItems = false;

  @HostBinding('class') get class() {
    return this.appearance ?? 'normal';
  }

  @Input() appearance: GridAppearanceType | undefined | null;

  @ContentChildren(GridItemComponent) contentChildren !: QueryList<GridItemComponent>;

  private subscriptions: Subscription[] = [];
  items: GridItemComponent[] | undefined;

  dataSource: MatTableDataSource<GridItemComponent>;


  constructor(private gridService: GridService) {
    this.dataSource = new MatTableDataSource<GridItemComponent>([]);

    this.dataSource.filterPredicate = (data: GridItemComponent, filter: string) => {
      return (data.pokemon?.name ?? '').toLowerCase().includes(filter);
    };

    this.dataSource.connect().subscribe({
      next: value => console.log('val', value)
    });

    this.subscriptions.push(this.gridService.getFilter$().subscribe(
      {
        next: filter => {
          this.dataSource.filter = filter;
        }
      })
    );


  }


  ngAfterContentInit() {

    // initial load of list
    if (!this.items) {
      this.items = this.contentChildren.toArray();
      this.dataSource.data = this.items;
    }
    this.contentChildren.changes.subscribe((items: QueryList<GridItemComponent>) => {
      this.items = items.toArray();
      this.dataSource.data = this.items;
    });

  }

  trackByFn(index: number, item: GridItemComponent): string {
    return item.pokemon?.id ?? '';
  }


  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
