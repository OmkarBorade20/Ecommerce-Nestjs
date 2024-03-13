import { EntityRepository, Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@EntityRepository(Product)
export class ProductRepository extends Repository<Product> {
  getProductbyTitle(title: string): Promise<Product> {
    return this.findOne({ where: { title: title } });
  }
}
