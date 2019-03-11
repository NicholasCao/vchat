import * as mongoose from 'mongoose'

const schema = new mongoose.Schema({
  username: String,
  password: String,
  name: String,
  contacts: Array,
})

schema.set('toJSON', { versionKey: false })
schema.set('toObject', { versionKey: false })

export default mongoose.model("user", schema)