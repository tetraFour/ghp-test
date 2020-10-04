class Component {
    constructor($el, content, styles, events) {
        this.$el = document.createElement($el)
        for (let style in styles) {
            this.$el.style[style] = styles[style]
        }
        this.$el.textContent = content
        document.body.appendChild(this.$el)

        this._events = events.forEach(event => {
            this.$el.addEventListener(event.type, event.eventHandler.bind(this))
        });
    }
}


const h1Evnts = [{
    type: 'mouseover', eventHandler: function () {
        this.$el.style.color = 'black'
    },
}, {
    type: 'mouseout', eventHandler: function () {
        this.$el.style.color = 'red'
    },
}
]


const h1 = new Component('h1', 'hello world', { color: 'red' }, h1Evnts)


const divCircle = new Component('div', 'circle', {
    backgroundColor: 'yellow',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '40px'
}, [])