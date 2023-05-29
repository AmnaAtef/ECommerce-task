import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsList } from 'src/app/_fake/Dummy-list';
import { ICategoriesList } from '../models/category';
import { IPricesList } from '../models/price';
import { IProductsList } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class FakeApiService {
  products:IProductsList[]=[] ;
  product:any = {};
  categories:ICategoriesList[]= [];
  prices:IPricesList[]= [];

  constructor() { }
  
   // Create Fake DB and API
   
    getProducts() {
       this.products = ProductsList.products;
      return this.products;
    }

    ChangeRate(id:number,rate:number){
      debugger;
      console.log(this.products);
     this.product= this.products.find(c =>c.id==id);
     this.products.forEach((element,index)=>{
      if(element.id==id) this.products.splice(index,0);
   });
   this.product.rate=rate;
   this.products.push(this.product);
   console.log(this.products)

    }

    FilterCategory(searchKeys:string[]){
      let filteredProducts:IProductsList[]=[];
      for (let i = 0; i < searchKeys.length; i++) {
        let searchProducts: IProductsList[]= this.products.filter(element =>element.category==searchKeys[i]        );
        if(searchProducts.length > 0){
          searchProducts.forEach(element => {
            filteredProducts.push(element);
          });
        }
        
      }
      return filteredProducts.length==0?this.products:filteredProducts;
    }
    
     FilterPrice(minPrice:Number,maxPrice:Number){
       debugger
        let filteredProducts: IProductsList[]= 
        this.products.filter(element =>element.price>=minPrice&&element.price<=maxPrice);  
      
      return filteredProducts.length==0?this.products:filteredProducts;
    }
    getCategories() {
      this.categories = ProductsList.categories;
     return this.categories;
   }

   getPrices() {
    this.prices = ProductsList.prices;
   return this.prices;
 }
}
