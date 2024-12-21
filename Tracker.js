export default class Tracker {
    constructor(actions, period, id) {

        this.id = 'tracker' + id;

        this.element = null;

        this.actions = actions;

        this.period = period;

        setInterval(() => {

            if (this.element == null) {
                this.element = document.querySelector('.'+this.id);
                this.style();
            }
                
            let current = Math.trunc(new Date().valueOf() / 1000) % this.period;

            let sum = 0;
            for (let i = 0; i < this.actions.length; i++) {
                sum = sum + this.actions[i].time;
            }

            let currentAction =  current / this.period * sum;
            let resultAction = -1;
            sum = 0;
            let progress = 0;
            for (let i = 0; i < this.actions.length; i++) {
                sum = sum + this.actions[i].time;
                if (sum > currentAction){
                    resultAction = i;
                    progress = 100 - Math.trunc(100 * (sum - currentAction) / this.actions[i].time);
                    break;
                }
            }
            if (this.actions[resultAction].name[0] != '#')
                this.element.innerHTML = `${this.actions[resultAction].name} ${progress}%`;
            else
                this.element.innerHTML = '';
        }, 1000);
    }

    render() {
        return `<div style="display: inline;" class="${this.id}"></div>`;
    }

    style() {
        this.element.style.fontSize = '72px';
        this.element.style.padding = '10px';
    }
}