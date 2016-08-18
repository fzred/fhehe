import path from 'path'

const file = path.resolve(__dirname, './data.db')

const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: file
  }
})

export function getDiarys() {
  return knex.select().table('diary')
}
