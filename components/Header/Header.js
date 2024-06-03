class Header {
  render(count) {
    const html = `
           <div class="header-container">
                <div class="header-counter">
                    🔥 ${count}
                </div>
           </div>
        `

    ROOT_HEADER.innerHTML = html
  }
}
const header = new Header()

header.render(localStorageUtil.getProducts().length)
