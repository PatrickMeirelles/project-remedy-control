import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ProductsService from 'App/Services/ProductsService'

export default class ProductsController {

    public async create({ request, response }: HttpContextContract) {
        const data = request.all()
        
        const product = new ProductsService()

        await product.create(data)

        return response.created('Product created')
        
    }

}
