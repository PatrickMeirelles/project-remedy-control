import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Login from 'App/Services/utils/LoginService'

const login = new Login()

export default class LoginController {

    public async login({ auth, request, response }: HttpContextContract) {
        const { email, password } = request.all()
        
        const loginUser = await login.login(auth, email, password)

        return response.accepted(loginUser)
    }

    public async create({ auth, request, response }: HttpContextContract) {
        const { email, password } = request.all()

        await login.createUser(auth, email, password)

        return response.created()
    }

    public async logout({ auth, response }: HttpContextContract){
        
        await login.logout(auth)

        return response.finish()
        
    }
    }


