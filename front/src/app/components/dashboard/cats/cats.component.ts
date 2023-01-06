import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ListCatsBreeds } from 'src/app/interfaces/listCatsBreeds';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit{
  loading = false;
  emptyResult = false;
  catsBreeds: any;

  public dataSource = new MatTableDataSource<any>();

  @ViewChild('paginator') paginator!: MatPaginator;
  displayedColumns: string[] = [
    'name'
  ]

  constructor(private apiService: ApiService ) {

  }

  ngOnInit(): void {
    this.getCatsBreeds()
  }

  getCatsBreeds() {
    this.apiService.getCatsBreed()
    .subscribe((res: ListCatsBreeds) => {
      this.loading = true;
      let arr: any[] = [];
      if(res.result.length === 0) {
        this.emptyResult = true;
        this.catsBreeds = []
      } else {
        this.emptyResult = false;
        this.catsBreeds = arr;
        setTimeout(() => {
          this.dataSource.paginator = this.paginator;
        }, 2001);
        res.result.forEach((element: any) => {
          arr.push(
            {
             id: element.breed.id,
             name: element.breed.name,
             origin: element.breed.origin,
             temperament: element.breed.temperament,
             description: element.breed.description,
             image: element.breed.image,
            });
        })
      }
      setTimeout(() => {
        this.dataSource.data = arr;
        this.dataSource.paginator = this.paginator;
        this.loading = false;
      }, 2000);
    })
  }

  applyFilter(event: any) {
    const filterValues = (event.target as HTMLInputElement).value
    this.apiService.getCatsBreedByOrigin(filterValues.trim().toLocaleLowerCase())
    .subscribe((res: ListCatsBreeds) => {
      let arr: any[] = [];
      if(res.result.length === 0) {
        this.emptyResult = true;
        this.catsBreeds = []
      } else {
        this.emptyResult = false;
        this.catsBreeds = arr;
        res.result.forEach((element: any) => {
          arr.push(
            {
             id: element.breed.id,
             name: element.breed.name,
             origin: element.breed.origin,
             temperament: element.breed.temperament,
             description: element.breed.description,
             image: element.breed.image,
            });
        })
      }
      setTimeout(() => {
        this.dataSource.data = arr;
      }, 2000);
    })
  }
}
