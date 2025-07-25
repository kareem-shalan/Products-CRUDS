 /**
  * @param product.title
  * @param product.description
  * @param product.price
  * @param product.imageUrl
  * @param product
  * @returns errors
  * @description This function validates the product data
  * @example
  * const product = {
  *   title: "Product 1",
  *   description: "Description 1",
  *   price: "100",
  *   imageUrl: "https://example.com/image.jpg"
  * }
  * const errors = productValidation(product)
  * console.log(errors)
  * @returns {
  *   title: "Title must be between 10 and 80 characters",
  *   description: "Description must be between 10 and 500 characters",
  *   imageUrl: "Image URL is required and must be a valid URL",
  *   price: "Price is required and must be a valid number"
  * }
  */
 
 export  const  productValidation = (product: { title: string, price: string, description: string, imageUrl: string ,color:string[] } ) => {
     const errors: { title: string, price: string, description: string, imageUrl: string ,color:string } = {
        title: "",
        description: "",
        price: "",
        imageUrl: "",
        color: ""
    } 
 const validUrl = /^ftp|http|https:\/\/[^ "]+$/.test(product.imageUrl)

    if (!product.title.trim()  || product.title.length < 10 || product.title.length > 80) {
        errors.title = "Title must be between 10 and 80 characters"
    }

    if (!product.description.trim() || product.description.length < 10 || product.description.length > 500) {
        errors.description = "Description must be between 10 and 500 characters"
    }
    if (!product.imageUrl.trim() || !validUrl) {
        errors.imageUrl = "Image URL is required and must be a valid URL"
    }
    if (!product.price.trim() || isNaN(Number(product.price))) {
        errors.price = "Price is required and must be a valid number"
    }
    if (!product.color || product.color.length === 0) {
        errors.color = "At least one color is required"
    }
    return errors
}
