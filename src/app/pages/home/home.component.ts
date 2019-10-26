import { Component, OnInit } from '@angular/core';

//
import { MatTableDataSource } from '@angular/material/table';
import { ServicesService } from 'src/app/services/services.service';

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
  displayedColumns: string[] = ['position', 'name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private data: ServicesService) { }

  ngOnInit() {
    this.getProducs();
  }

  public getProducs(): Promise<any> {
    const url = '/v1/products.json';
    return this.data.getData(url)
    .then(res => {
      console.log(res.items);
      this.dataSource = res.items;
    });
  }

}
