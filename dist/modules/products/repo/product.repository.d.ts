import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
export declare class ProductRepository extends Repository<Product> {
    getProductbyTitle(title: string): Promise<Product>;
}
