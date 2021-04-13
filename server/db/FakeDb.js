
class FakeDb {

  cats = [
    {
      name: "Mittens"
    },
    {
      name: "Whiskers"
    }]

  dogs = [
    {
      name: "Fluffy"
    },
    {
      name: "Shadow"
    }
  ]
}

export const fakeDb = new FakeDb()