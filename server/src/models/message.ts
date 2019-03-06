import * as mongoose from 'mongoose'

const schema = new mongoose.Schema({
  type: String,
  content: String,
  from: String,
  to: String,
})

schema.set('toJSON', { versionKey: false })
schema.set('toObject', { versionKey: false })


export default mongoose.model("message", schema)