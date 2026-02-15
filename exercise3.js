const display = document.querySelector('#count-display');
const CounterApp = {
    count: 0,
    updateDisplay: function() {
        display.textContent = this.count;
    },
    increment: function() {
        this.count++;
        this.updateDisplay();
    },
    decrement: function() {
        this.count--;
        this.updateDisplay();
    }
};

document.querySelector('#inc-btn').addEventListener('click', CounterApp.increment.bind(CounterApp));
document.querySelector('#dec-btn').addEventListener('click', CounterApp.decrement.bind(CounterApp));