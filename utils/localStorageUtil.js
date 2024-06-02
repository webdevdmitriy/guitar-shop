class LocalStorageUtil {
  keyName = 'products'
  getProducts() {
    const products = localStorage.getItem(this.keyName)
    return JSON.parse(products) || []
  }
  putProduct(id) {
    const products = this.getProducts()

    const index = products.indexOf(id)
    let addProduct = false

    if (index === -1) {
      products.push(id)
      addProduct = true
    } else {
      products.splice(index, 1)
    }

    localStorage.setItem(this.keyName, JSON.stringify(products))

    return {
      products,
      addProduct,
    }
  }
}

const localStorageUtil = new LocalStorageUtil()
// const products = localStorageUtil.getProducts()
// console.log('products: ', products)
