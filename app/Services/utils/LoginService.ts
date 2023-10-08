import User from "App/Models/User"
import Hash from '@ioc:Adonis/Core/Hash'

export default class login {

    public async login(auth, email, password) {
        try {
          const user = await User.query().where("email", email).firstOrFail();
    
          if (!(await Hash.verify(user.password, password))) {
            throw new Error("The password doesn't match");
          }
    
          const token = await auth.use("api").attempt(email, password, {
            expiresIn: '7 days'
          });
    
          return token;
        } catch {
          throw new Error("User not found, please register first");
        }
      }
    
      public async logout(auth) {
        await auth.use("api").revoke();
        return {
          revoked: true,
        };
      }
    
      public async createUser( email, password) {
    
          await User.create({
            email,
            password,
          });
    
    
    
      }

}