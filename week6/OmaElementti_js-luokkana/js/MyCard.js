class MyCard extends HTMLElement {
    constructor() {
        super()
        this.attachShadow({mode: "open"})

        const title = this.getAttribute("title") ?? "Unknown"
        const text = this.getAttribute("text") ?? "Unknown"
        const image = this.getAttribute("image") ?? "./images/default.svg"

        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./css/my-card.css">
        <div class="card">
            <image class="image" src="${image}" alt="Image for card" />
            <div class="content">
                <h3>${title}</h3>
                <p>${text}</p>
            <div/>
        </div>
        `
    }
}


customElements.define("my-card", MyCard)