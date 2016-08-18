import path from 'path'
import sqlite3 from 'sqlite3'

const file = path.resolve(__dirname, './data.db')
const Sqlite3 = sqlite3.verbose()
const db = new Sqlite3.Database(file)
export default {}
