import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import {startWith, map} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  productName="";
  products = ["Yonex", "Badminton"];

  //Start of Searchbar Filter
  filteredProducts: Observable<string[]> | any;


  constructor() { }

  ngOnInit(){
  //  this.filteredStreets = this.control.valueChanges.pipe(
  //    startWith(''),
  //    map(value => this._filter(value)),
  //  );
  }

  searchbarsubmit(searchbarform: NgForm){
    this.filteredProducts = this._filter(searchbarform.form.get('product_searchbar')?.value);
  }


  private _filter(value:string):string[]{
    const filterValue = this._normalizeValue(value);
    return this.products.filter(product => this._normalizeValue(product).includes(filterValue))
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}
