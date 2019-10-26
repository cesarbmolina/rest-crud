import { Component, OnInit, ViewChild } from '@angular/core';

//
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from 'src/app/services/services.service';
import { MatPaginator } from '@angular/material';

export interface ProductsInterface {
  name: string;
  position: number;
}

const ELEMENT_DATA: ProductsInterface[] = [
  { position: 1, name: 'Hydrogen' },
  { position: 2, name: 'Helium' },
  { position: 3, name: 'Lithium' },
  { position: 4, name: 'Beryllium' },
  { position: 5, name: 'Boron' },
  { position: 6, name: 'Carbon' },
  { position: 7, name: 'Nitrogen' },
  { position: 8, name: 'Oxygen' },
  { position: 9, name: 'Fluorine' },
  { position: 10, name: 'Neon' },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['position', 'name'];
  dataSource = new MatTableDataSource([]);

  constructor(private data: ServicesService) { }

  ngOnInit() {
    this.getProducs();
  }

  public getProducs() {
    const url = '/v1/products.json?limit=50&offset=0';
    this.data.getData(url)
      .then(res => {
        console.log(res.items);
        if (res.name !== null) {
          this.dataSource = new MatTableDataSource(res.items);
          this.dataSource.paginator = this.paginator;
        }

      });
  }

  public applyFilter(filterValue: string) {
    // this.dataSource.filter = filterValue.trim().toLowerCase();
    // console.log(this.dataSource.filter);
    const url = `/v1/products.json?name=${filterValue}`;
    this.data.getData(url)
      .then(res => {
        if (res.count !== 0 && res.name !== null) {
          this.dataSource = new MatTableDataSource(res.items);
          return this.dataSource.paginator = this.paginator;
        }
        alert();
      });
  }
}
