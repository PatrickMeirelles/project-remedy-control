import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProductsService from 'App/Services/ProductsService'

export default class ProductsController {

    private product = new ProductsService()

    public async create({ request, response }: HttpContextContract) {
        const data = request.all()

        await this.product.createProduct(data)

        return response.created('Product created')
        
    }

    public async show({}: HttpContextContract) {

        const products = await this.product.showProducts()

        return products
    }

    public async update({ request, response }: HttpContextContract) {
        const id = request.input('id')
        const data = request.body()

        await this.product.updateProdcut(id, data)

        return response.accepted({ message: 'Product updated successfully'})
    }

    public async delete({ request, response }: HttpContextContract) {
        const id = request.input('id')

        const deletedProduct = await this.product.deleteProduct(id)

        let message

        if(deletedProduct) {
           message = `Product "${deletedProduct.name}" deleted`
        } else {
            message = "Product not found"
        }

        return response.ok({message})

    }

}
