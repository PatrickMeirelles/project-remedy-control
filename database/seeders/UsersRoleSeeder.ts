import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UsersRole from 'App/Models/UsersRole'

export default class extends BaseSeeder {
  public async run () {
    await UsersRole.createMany([
      {
        role: 'master'
      },
      {
        role: 'editor'
      },
      {
        role: 'reader'
      }
    ])
  }
}
