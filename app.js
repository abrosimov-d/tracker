import Tracker from './Tracker.js'

window.onload = () => {
    console.log('qawewqe')
    let actions = [
        {'name': 'Почта', 'time': 0.33},
        {'name': 'Задания', 'time': 0.33},
        {'name': 'Пуш', 'time': 0.66},
    ]
    let tracker1 = new Tracker(actions, 60*60, 0)

    let tracker = new Tracker()

    let appElement = document.querySelector('.app')
    appElement.innerHTML = tracker1.render()
}