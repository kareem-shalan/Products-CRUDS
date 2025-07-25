import type { ICategory, IFormInput, IProduct } from "../interfaces"
import { v4 as uuid } from 'uuid';
export const products: IProduct[] = [
    // CLOTHES CATEGORY
    {
        id: "1",
        title: "Premium Cotton T-Shirt",
        price: "29.99",
        imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        color: ["coral", "turquoise", "deepskyblue"],
        category: {
            name: "Clothes",
              imageUrl: './../public/clothes.jpeg',
        },
        description: "Comfortable organic cotton t-shirt with a modern fit and sustainable materials. ",
    },
    {
        id: "2",
        title: "Denim Jacket",
        price: "89.99",
        imageUrl: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=400&fit=crop",
        color: ["dodgerblue", "coral", "mediumseagreen"],
        category: {
            name: "Clothes",
              imageUrl: './../public/clothes.jpeg',
        },
        description: "Classic denim jacket with comfortable fit and durable construction.",
    },
    {
        id: "3",
        title: "Running Shoes",
        price: "129.99",
        imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
        color: ["coral", "crimson", "deepskyblue"],
        category: {
            name: "Clothes",
              imageUrl: './../public/clothes.jpeg',
        },
        description: "High-performance running shoes with superior comfort and support.",
    },
    {
        id: "4",
        title: "Leather Handbag",
        price: "199.99",
        imageUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop",
        color: ["peachpuff", "coral", "gold"],
        category: {
            name: "Clothes",
              imageUrl: './../public/clothes.jpeg',
        },
        description: "Elegant leather handbag with multiple compartments and premium finish.",
    },
    {
        id: "5",
        title: "Winter Coat",
        price: "249.99",
        imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
        color: ["coral", "turquoise", "lavender", "mediumseagreen"],
        category: {
            name: "Clothes",
              imageUrl: './../public/clothes.jpeg',
        },
        description: "Warm winter coat with insulation and water-resistant exterior.",
    },

    // CARS CATEGORY
    {
        id: "6",
        title: "Tesla Model 3",
        price: "45000",
        imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=400&h=400&fit=crop",
        color: ["dodgerblue", "coral", "turquoise"],
        category: {
            name: "Cars",
              imageUrl: './../../public/car.jpeg',
        },
        description: "Electric sedan with autopilot, long range, and premium interior.",
    },
    {
        id: "7",
        title: "BMW X5",
        price: "65000",
        imageUrl: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=400&fit=crop",
        color: ["coral", "mediumseagreen", "deepskyblue"],
        category: {
            name: "Cars",
              imageUrl: './../../public/car.jpeg',
        },
        description: "Luxury SUV with advanced technology and superior driving dynamics.",
    },
    {
        id: "8",
        title: "Honda Civic",
        price: "25000",
        imageUrl: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=400&fit=crop",
        color: ["coral", "mediumseagreen", "crimson"],
        category: {
            name: "Cars",
              imageUrl: './../../public/car.jpeg',
        },
        description: "Reliable compact car with excellent fuel efficiency and safety features.",
    },
    {
        id: "9",
        title: "Mercedes-Benz C-Class",
        price: "55000",
        imageUrl: "https://i.pinimg.com/736x/d3/0f/a3/d30fa35f357bcbf3f52f0ef2dab3ac86.jpg",
        color: ["coral", "turquoise", "lavender"],
        category: {
            name: "Cars",
              imageUrl: './../../public/car.jpeg',
        },
        description: "Luxury sedan with premium interior and advanced driver assistance.",
    },
    {
        id: "10",
        title: "Toyota Camry",
        price: "28000",
        imageUrl: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=400&fit=crop",
        color: ["dodgerblue", "mediumseagreen", "deepskyblue"],
        category: {
            name: "Cars",
              imageUrl: './../../public/car.jpeg',
        },
        description: "Midsize sedan known for reliability, comfort, and fuel efficiency.",
    },

    // FOOD CATEGORY
    {
        id: "11",
        title: "Organic Fresh Fruits Basket",
        price: "49.99",
        imageUrl: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=400&h=400&fit=crop",
        color: ["mixed"],
        category: {
            name: "Food",
            imageUrl: "./../../public/food.jpeg",
        },
        description: "Assorted organic fruits including apples, oranges, bananas, and berries.",
    },
    {
        id: "12",
        title: "Artisan Bread Selection",
        price: "24.99",
        imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=400&fit=crop",
        color: ["peachpuff", "gold"],
        category: {
            name: "Food",
            imageUrl: "./../../public/food.jpeg",
        },
        description: "Freshly baked artisan breads including sourdough, whole grain, and ciabatta.",
    },
    {
        id: "13",
        title: "Premium Coffee Beans",
        price: "34.99",
        imageUrl: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=400&fit=crop",
        color: ["peachpuff", "coral"],
        category: {
            name: "Food",
            imageUrl: "./../../public/food.jpeg",
        },
        description: "Single-origin coffee beans with rich flavor and smooth finish.",
    },
    {
        id: "14",
        title: "Gourmet Cheese Collection",
        price: "39.99",
        imageUrl: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400&h=400&fit=crop",
        color: ["yellow", "orange"],
        category: {
            name: "Food",
            imageUrl: "./../../public/food.jpeg",
        },
        description: "Assorted premium cheeses including aged cheddar, brie, and gouda.",
    },
    {
        id: "15",
        title: "Organic Vegetables Box",
        price: "44.99",
        imageUrl: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop",
        color: ["green", "red", "orange"],
        category: {
            name: "Food",
            imageUrl: "./../../public/food.jpeg",
        },
        description: "Fresh organic vegetables including carrots, broccoli, tomatoes, and spinach.",
    },

    // ELECTRONICS CATEGORY
    {
        id: "16",
        title: "Wireless Bluetooth Headphones",
        price: "89.99",
        imageUrl: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
        color: ["coral", "deepskyblue"],
        category: {
            name: "Electronics",
            imageUrl: "https://i.pinimg.com/736x/fd/b2/b9/fdb2b91117d29768639b6103168d70f5.jpg",
        },
        description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
    },
    {
        id: "17",
        title: "Smart Fitness Watch",
        price: "199.99",
        imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
        color: ["mediumseagreen", "coral", "peachpuff"],
        category: {
            name: "Electronics",
            imageUrl: "https://i.pinimg.com/736x/fd/b2/b9/fdb2b91117d29768639b6103168d70f5.jpg",
        },
        description: "Advanced fitness tracking with heart rate monitor, GPS, and water resistance.",
    },
    {
        id: "18",
        title: "Portable Bluetooth Speaker",
        price: "79.99",
        imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
        color: ["crimson", "deepskyblue", "mediumseagreen", "coral"],
        category: {
            name: "Electronics",
            imageUrl: "https://i.pinimg.com/736x/fd/b2/b9/fdb2b91117d29768639b6103168d70f5.jpg",
        },
        description: "Waterproof portable speaker with 360-degree sound and 12-hour battery life.",
    },
    {
        id: "19",
        title: "Wireless Charging Pad",
        price: "39.99",
        imageUrl: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=400&h=400&fit=crop",
        color: ["coral", "turquoise", "mediumseagreen"],
        category: {
            name: "Electronics",
            imageUrl: "https://i.pinimg.com/736x/fd/b2/b9/fdb2b91117d29768639b6103168d70f5.jpg",
        },
        description: "Fast wireless charging pad compatible with all Qi-enabled devices.",
    },
    {
        id: "20",
        title: "Smart LED Light Bulb",
        price: "19.99",
        imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
        color: ["gold", "deepskyblue", "lavender"],
        category: {
            name: "Electronics",
            imageUrl: "https://i.pinimg.com/736x/fd/b2/b9/fdb2b91117d29768639b6103168d70f5.jpg",
        },
        description: "WiFi-enabled smart bulb with voice control and customizable colors.",
    }
]


export const formInputs: IFormInput[] = [
    {
        id: "title",
        label: "Title",
        type: "text",
        placeholder: "Enter title",
        name: "title"
    },

    {
        id: "imageUrl",
        label: "Image URL",
        type: "text",
        placeholder: "Enter image URL",
        name: "imageUrl"
    },
    {
        id: "price",
        label: "Price",
        type: "number",
        placeholder: "Enter price",
        name: "price"
    },


    {
        id: "description",
        label: "Description",
        type: "text",
        placeholder: "Enter description",
        name: "description"
    }

]

export const colorsList: string[] = ["coral", "turquoise", "deepskyblue", "peachpuff", "mediumseagreen", "gold", "lavender", "dodgerblue", "crimson", "lightgreen"]


export const categoriesList :ICategory[]= [
    {
        id: uuid(),
        name: "Clothes",
        imageUrl: './../public/clothes.jpeg',
    },
    {
        id: uuid(),
        name: "Cars",
        imageUrl: "https://i.pinimg.com/1200x/10/50/4b/10504b020949904143d7154b3bf48a22.jpg",
    },
    {
        id: uuid(),
        name: "Food",
        imageUrl: './../public/food.jpeg',
    },
    {
        id: uuid(),
        name: "Electronics",
        imageUrl: "https://i.pinimg.com/736x/fd/b2/b9/fdb2b91117d29768639b6103168d70f5.jpg",
    },


]