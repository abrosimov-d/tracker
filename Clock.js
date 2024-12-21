export default class Clock {
    constructor(title, timezone, id) {

        this.title = title;
        this.timezone = timezone;
        this.id = 'clock' + id;

        this.element = null;



        setInterval(() => {

            if (this.element == null) {
                this.element = document.querySelector('.'+this.id);
                this.style();
            }
            let dots = (new Date().getSeconds() % 2)?':':' '
            this.element.innerHTML = this.title + ' ' +new Date().toLocaleTimeString('ru-RU', {timeZone: this.timezone}).substring(0, 5).replaceAll(':', dots)

        }, 1000);
    }

    render() {
        return `<div style="display: block; ;" class="${this.id}"></div>`;
    }

    style() {
        this.element.style.color = 'gray'
        this.element.style.fontSize = '48px';
        this.element.style.padding = '10px';
        this.element.style.fontFamily = 'Courier'
    }
}