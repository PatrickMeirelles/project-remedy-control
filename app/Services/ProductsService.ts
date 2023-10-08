import Product from "App/Models/Product";

type product = {
  name: string;
  stock: number;
  balance: number;
  minimunStock?: number;
  userLastUpdate: string;
};

export default class ProductsService {
  public async create(data: product) {
    try {

      await Product.create(data);

      console.log('successfully created');
      
    } catch (error) {
      throw new Error("E_PRODUCT_DUPLICATE");
    }
  }
}
