class Person {
  constructor (name) {
    this.name = name
    this.chatroom = null
  }

  send (message, to) {
    this.chatroom && this.chatroom.send(message, this, to)
  }

  receive (message, from) {
    console.log(`${ this.name } received message ${ message } from ${ from.name }`)
  }
}

const ChatRoom = function () {
  const persons = {}
  
  return {
    register (person) {
      persons[person.name] = person
      person.chatroom = this
    },
    send (message, from, to) {
      if (to) {
        to.receive(message, from)
      } else {
        Object.keys(persons).map((name) => {
          if (name !== from.name) {
            persons[name].receive(message, from)
          }
        })
      }
    }
  }
}

const person1 = new Person('First')
const person2 = new Person('Second')
const person3 = new Person('Third')

const chatroom = new ChatRoom()
chatroom.register(person1)
chatroom.register(person2)
chatroom.register(person3)

person1.send('Hello!', person3)
person2.send('Hello!', person3)
person3.send('Hello guys!')
