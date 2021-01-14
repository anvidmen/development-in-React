const { buildSchema } = require('graphql')
const Note = require('./models/notes')

const ourSchema = buildSchema(` 
type Query{
  notes: [Note]
  note(id: ID): Note 
}
type Note{
  id: ID
  title: String
  content: String
  image: String
  userCreator: User!
}
type User{
  _id: ID
  username: String
  email: String
  password: String
  createNotes: [Note]
}
input noteinput{
  title: String
  content: String
  image: String
}
input userinput{
  username: String
  email: String
  password: String
}
type Mutation{
  createUser(userInput: userinput): User!
  createNote(noteInput: noteinput): Note!
  deleteNote(id: ID): Note
}
`)

const resolver = {
  createNote: async ({ noteInput }) => {
    const note = new Note({
      title: noteInput.title,
      content: noteInput.content,
      image: noteInput.image
    })
    let notes

    try {
      const result = await note.save()
      notes = {
        ...result
      }
    } catch (err) {
      return new Error(err)
    }
    return notes
  }
}

module.exports = { ourSchema, resolver }
