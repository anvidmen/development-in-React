const tasks = [
  {
    name: 'Start React web',
    duration: 120
  },
  {
    name: 'Work out',
    duration: 60
  },
  {
    name: 'Procrastinate on facebook',
    duration: 240
  }
]

const names = []

tasks.forEach(element => names.push(element.name))
console.log(names)

const nameTasks = tasks.map(names => names.name)
console.log(nameTasks)
