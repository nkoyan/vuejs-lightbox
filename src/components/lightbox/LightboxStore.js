class LightboxStore {
    constructor () {
        this.state = {
            images: [],
            index: false
        }
    }

    addImage (url) {
        return this.state.images.push(url)
    }

    open (index) {
        this.state.index = index
    }

    close () {
        this.state.index = false
    }

    prev () {
        this.state.index--
        if (this.state.index < 0) {
            this.state.index = this.state.images.length - 1
        }
    }

    next () {
        this.state.index++
        if (this.state.index >= this.state.images.length) {
            this.state.index = 0
        }
    }
}

export default new LightboxStore()