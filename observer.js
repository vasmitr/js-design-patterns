class ObserverList {
  constructor () {
    this.observerList = []
  }

  add (obj) {
    this.observerList.push(obj)
  }

  count () {
    return this.observerList.length
  }

  get (index) {
    if (index > -1 && index < this.observerList.length) {
      return this.observerList[index]
    }
  }

  indexOf (obj) {
    let res = -1
    this.observerList.map((observer, index) => {
      if (observer === obj) {
       res = index
      }
    })
    return res
  }

  removeAt (index) {
    this.observerList.splice(index, 1)
  }
}

class Subject {
  constructor () {
    this.observers = new ObserverList()
  }

  addObserver (observer) {
    this.observers.add(observer)
  }

  removeObserver (observer) {
    this.observers.removeAt(this.observers.indexOf(observer))
  }

  notify(context) {
    const observerCount = this.observers.count()
    for (let i=0; i < observerCount; i+=1) {
      this.observers.get(i).update(context)
    }
  }
}

class Observer {
  constructor (name) {
    this.name = name
  }

  update (context) {
    console.log(`Observer with name ${ this.name } received context ${ context }`)
  }
}

const subject = new Subject()
const observer1 = new Observer('One')
const observer2 = new Observer('Two')
const observer3 = new Observer('Three')

subject.addObserver(observer1)
subject.addObserver(observer2)
subject.addObserver(observer3)

subject.notify('Hello!')
// Observer with name One received context Hello!
// Observer with name Two received context Hello!
// Observer with name Three received context Hello!

console.log('*Removing third observer*')
subject.removeObserver(observer3)

subject.notify('Hello, again')
// Observer with name One received context Hello, again
// Observer with name Two received context Hello, again

// There is also Publish/Subscribe pattern
// Example is $(el).trigger, $(el).on and $(el).off jQuery methods
