import { Component, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { filter } from 'rxjs';
import { ICategoriesList } from 'src/app/core/models/category';
import { IPricesList } from 'src/app/core/models/price';
import { IProductsList } from 'src/app/core/models/products';
import { FakeApiService } from 'src/app/core/services/fake-api.service';
import { ProductsList } from 'src/app/_fake/Dummy-list';

@Component({
  selector: 'app-filter-product',
  templateUrl: './filter-product.component.html',
  styleUrls: ['./filter-product.component.scss']
})
export class FilterProductComponent {
  categories_list!: ICategoriesList[];
  selectedCategory:string[] =[];
  filtered_list!: IProductsList[];

  prices_List!:IPricesList[];
  minValue:number=0;
  maxValue:number=0;

  constructor(
    private fakeApiService:FakeApiService
  ){}

  ngOnInit(): void {
    this.getCategories();
    this.getPrices();
  }

  getCategories(){
    this.categories_list = this.fakeApiService.getCategories();
  }
  // filterCategory
  filterCategory($event: MatCheckboxChange){
    if ($event.checked) {
      this.selectedCategory.push($event.source.value);
    }else{
      let index = this.selectedCategory.indexOf($event.source.value);
      this.selectedCategory.splice(index, 1);
    }
    this.filtered_list =this.fakeApiService.FilterCategory(this.selectedCategory)
    ProductsList.products = this.filtered_list  
  }

  getPrices(){
    this.prices_List = this.fakeApiService.getPrices();
  }
  filterByPrice(minValue:number,maxValue:number){
    this.filtered_list = this.fakeApiService.FilterPrice(minValue, maxValue);
    ProductsList.products = this.filtered_list  
  }

}
