import path from 'path'
import knex from 'knex'

const file = path.resolve(__dirname, './data.db')

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: file
  }
})

export function getDiarys() {
  return db.select().table('diary')
}
export function insertDiary(data) {
  return db('diary').insert(data)
}
