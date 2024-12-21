import Tracker from './Tracker.js'
import Clock from './Clock.js'

window.onload = () => {
    console.log('qawewqe')
    let actions = [
        {'name': 'Почта', 'time': 0.33},
        {'name': 'Задания', 'time': 0.33},
        {'name': 'Пуш', 'time': 0.66},
    ]
    let tracker1 = new Tracker(actions, 60*60, 0)

    let tracker = new Tracker()

    actions = [
    {'name': '!!!!', 'time': 0.1},
    {'name': 'Рега', 'time': 0.9},
    ]
    let tracker2 = new Tracker(actions, 15*60, 1)

    let clock1 = new Clock('msk', 'Europe/Moscow', 0)
    let clock2 = new Clock('ebrg', 'Asia/Yekaterinburg', 1)
    let clock3 = new Clock('nvsk', 'Asia/Novosibirsk', 2)
    let clock4 = new Clock('vldk', 'Asia/Vladivostok', 3)

    let appElement = document.querySelector('.app')
    appElement.innerHTML = `
    ${tracker1.render()}
    ${tracker2.render()}
    ${clock1.render()}
    ${clock2.render()}
    ${clock3.render()}
    ${clock4.render()}

    `

    document.body.style.background = 'black';


}