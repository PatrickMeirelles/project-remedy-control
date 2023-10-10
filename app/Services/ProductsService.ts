import Product from "App/Models/Product";

export default class ProductsService {
  public async createProduct(data: object) {
    try {
      await Product.create(data);

      console.log("successfully created");
    } catch (error) {
      throw new Error("E_PRODUCT_DUPLICATE");
    }
  }

  public async showProducts() {
    const products = (await Product.query()
    .where('is_revoked', false))
    .map((item) => {
      return {
        Products: {
          id: item.id,
          name: item.name,
          stock: item.stock,
          balance: item.balance,
          minimunStock: item.minimunStock,
          userLastUpdate: item.userLastUpdate,
        },
      };
    });

    return products;
  }

  public async updateProdcut(id, data) {
    await Product.query()
      .where("id", id)
      .update({
        name: `${data.name}`,
        minimunStock: `${data.minimunStock}`,
      });
  }

  public async deleteProduct(id) {
    const [idProduct] = await Product.query()
      .where('id', id)
      .where('isRevoked', false)
      .update({ isRevoked: true })
      .select('name')

    const product = await Product.query()
      .where('id', idProduct).first()

    return product
    
  }
}
