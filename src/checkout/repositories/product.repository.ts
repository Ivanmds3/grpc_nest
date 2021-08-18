import { Injectable, OnModuleInit } from "@nestjs/common";
import * as fs from "fs";
import { join } from "path";
import { ProductData } from "./data/product.data";


@Injectable()
export class ProductRepository implements OnModuleInit {

    private products: Array<ProductData>;

    async onModuleInit() {
        const pathFile = join(__dirname, 'products.json');
        const valueFile = await fs.readFileSync(pathFile, 'utf8');
        this.products = JSON.parse(valueFile);
    }
    
    get(id: number): ProductData {
        const products = this.products.filter(p => p.id == id);
        if(!products || products.length == 0) {
            throw new Error('product not found');
        } 

        return products[0];
    }
}