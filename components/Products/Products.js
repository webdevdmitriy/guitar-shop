class Products {
  textBtnAdd = 'Добавить в корзину'
  textBtnRemove = 'Удалить из корзины'
  classBtnActive = 'products-element__btn_active'
  idProduct = ''

  handlerBtn = e => {
    const { products, addProduct } = localStorageUtil.putProduct(this.idProduct)

    console.log('addProduct: ', addProduct)
    if (addProduct) {
      e.currentTarget.textContent = this.textBtnRemove
      e.currentTarget.classList.add(this.classBtnActive)
    } else {
      e.currentTarget.textContent = this.textBtnAdd
      e.currentTarget.classList.remove(this.classBtnActive)
    }

    header.render(products.length)
  }

  render() {
    const productsStore = localStorageUtil.getProducts()

    let htmlCatalog = ''
    CATALOG.forEach(({ id, name, img, price }) => {
      let textBtn = this.textBtnAdd
      let classBtn = ''
      this.idProduct = id

      if (productsStore.indexOf(id) !== -1) {
        textBtn = this.textBtnRemove
        classBtn = this.classBtnActive
      }

      htmlCatalog += `
                <li class='products-element'>
                    <span class='products-element__name'>${name}</span>
                    <img class='products-element__img' src="${img}"></img>
                    <span class='products-element__price' >${price}</span>
                    <button class='products-element__btn ${classBtn}' onClick="this.handlerBtn">${textBtn}</button>
                </li>
            
            `
    })
    const html = `
        <ul class = 'products-container'>
        ${htmlCatalog}
        </ul>
    `

    ROOT_PRODUCTS.innerHTML = html

    this.addEventListeners()
  }

  addEventListeners() {
    document.querySelectorAll('.products-element__btn').forEach(item => item.addEventListener('click', this.handlerBtn))
  }
}

const productsPage = new Products()
productsPage.render()
