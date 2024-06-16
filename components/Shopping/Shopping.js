class Shopping {
  handleCLear() {
    ROOT_SHOPPING = ''
  }
  render() {
    const productsStore = LocalStorageUtil.getProducts()
    let htmlCatalog = ''
    let sum = 0

    CATALOG.forEach(({ id, name, price }) => {
      if (productsStore.indexOf(item) !== -1) {
        htmlCatalog += `
            <tr>
                <td> ${name}</td>
                <td> ${price}</td>
            </tr>
            
            `
        sum += +price
      }
    })

    const html = `
    <div class="shopping-container">
        <div class="shopping__close" onclick="shopping.handleClear();"></div>
        <table>
            ${htmlCatalog}
            <tr>
                <td class="shopping-element__name">💥 Сумма:</td>
                <td class="shopping-element__price">${sum} USD</td>
            </tr>
        </table>
    </div>
      `
    ROOT_SHOPPING.innerHTML = html
  }
}

const shopping = new Shopping()

shopping.render()
