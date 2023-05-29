import { ICategoriesList } from "../core/models/category";
import { IPricesList } from "../core/models/price";
import { IProductsList } from "../core/models/products";

export class ProductsList { 
      // Dummy Products List
    public static products: IProductsList[] = [
        { 
            id: 1,
            image: '../../../../assets/images/product1.png',
            title: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
            price: 249.50,
            description: 'Eligible for Shipping To Mars or somewhere else',
            rate: 4,
            category:"Electronics"
        },
        {
            id: 2,
            image: '../../../../assets/images/product2.png',
            title: 'Lee Pucker design. Leather botinki for handsome designers. Free shipping.',
            price: 513.95,
            description: '1258 bids, 359 watchers $5.95 for shipping',
            rate: 4,
            category:"Business & Industrial"
        },
        {
            id: 3,
            image: '../../../../assets/images/product3.png',
            title: 'Timesaving kitten to save months on development. Playful, cute, cheap!',
            price: 423.95,
            description: '1258 bids, 359 watchers $5.95 for shipping',
            rate: 4,
            category:"Business & Industrial"
        },
        {
            id: 4,
            image: '../../../../assets/images/product4.png',
            title: 'Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!',
            price: 613.95,
            description: 'Eligible for Shipping To Mars or somewhere else',
            rate: 4 ,
            category:"Cell Phones & Smartphones"
        },
        {
            id: 5,
            image: '../../../../assets/images/product1.png',
            title: 'Vintage Typewriter to post awesome stories about UI design and webdev.',
            price: 749.50,
            description: 'Eligible for Shipping To Mars or somewhere else',
            rate: 4,
            category:"Business & Industrial"
        },
        {
            id: 6,
            image: '../../../../assets/images/product2.png',
            title: 'Lee Pucker design. Leather botinki for handsome designers. Free shipping.',
            price: 513.95,
            description: '1258 bids, 359 watchers $5.95 for shipping',
            rate: 4,
            category:"Business & Industrial"
        },
        {
            id: 7,
            image: '../../../../assets/images/product3.png',
            title: 'Timesaving kitten to save months on development. Playful, cute, cheap!',
            price: 413.95,
            description: '1258 bids, 359 watchers $5.95 for shipping',
            rate: 4,
            category:"Electronics"
        },
        {
            id: 8,
            image: '../../../../assets/images/product4.png',
            title: 'Plastic useless plugs and tubes for high-fidelity prototyping. Fit & Eat!',
            price: 313.95,
            description: 'Wordwide shitting available Buyers protection possible!',
            rate: 2,
            category:"Electronics"
        },
    ]
      // Dummy Categories List
    public static categories: ICategoriesList[] =[
        { 
            id:1,
            category_name: 'Electronics'
        },
        { 
            id:2,
            category_name: 'Business & Industrial'
        },
        { 
            id:3,
            category_name: 'Cell Phones & Smartphones'
        }
    ]
     // Dummy Prices List
    public static prices: IPricesList[] =[
        { 
            id: 1,
            min_price: 100,
            max_price: 300
        },
        { 
            id: 2,
            min_price: 200,
            max_price: 400
        },
        { 
            id: 3,
            min_price: 300,
            max_price: 500
        },
        { 
            id: 4,
            min_price: 400,
            max_price: 600
        },
        { 
            id: 5,
            min_price: 500,
            max_price: 700
        },
        { 
            id: 6,
            min_price: 600,
            max_price: 800
        },
    ]
}