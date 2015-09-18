class View {
    constructor(options) {
        this.model = options.model;
        this.template = options.template;
    }

    render() {
        console.log("Rendering");
    }
}

module.exports = View;