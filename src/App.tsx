
import { useState } from 'react';
import './App.css'
import MyModal from './components/Dialog/Dialog';
import ProductCard from './components/ProductCard/ProductCard';
import { formInputs, products, colorsList, categoriesList } from './data/index';
import { Button } from '@headlessui/react';
import Inputs from './components/Inputs/Inputs';
import type { ICategory, IProduct } from './interfaces';
import { productValidation } from './validation';
import ErorrMessage from './components/ErorrMessage/ErorrMessage';
import CircleColor from './components/CircleColor/CircleColor';
import { v4 as uuid } from 'uuid';
import SelectMenu from './components/SelectMenu/SelectMenu';
import type { Tproduct } from './types';
import toast, { Toaster } from 'react-hot-toast';





const defaultProduct = {

  title: "",
  price: '',
  description: "",
  imageUrl: "",
  color: [],
  category: {
    name: "",
    imageUrl: ""
  }
}

function App() {
  //state for the modal
  const [isOpen, setIsOpen] = useState(false)
  //state for the update product modal
  const [editOpen, seteditOpen] = useState(false)
  //state for the product
  const [renderProducts, setRenderProducts] = useState<IProduct[]>(products)
  const [product, setProduct] = useState<IProduct>(defaultProduct)
  const [updateProduct, setupdateProduct] = useState<IProduct>(defaultProduct)
  const [updateIndex, setupdateIndex] = useState<number>(0)
  const [TempColor, setTempColor] = useState<string[]>([])
  const [errors, setErrors] = useState<{ title: string, description: string, price: string, imageUrl: string, color: string }>({ title: "", description: "", price: "", imageUrl: "", color: "" })
  const [selectedCategory, setSelectedCategory] = useState<ICategory>(categoriesList[0])
  const [deleteOpen, setdeleteOpen] = useState(false)
  //Handler for the product
  const handleProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value } = e.target
    setProduct({ ...product, [name]: value })

    setErrors({ ...errors, [name]: "" })


  }
  const handleEditProduct = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value } = e.target
    setupdateProduct({ ...updateProduct, [name]: value })

    setErrors({ ...errors, [name]: "" })
    toast.success('Product updated successfully', {
      position: 'top-center',
      duration: 2000,
      icon: '🚀',


      style: {
        background: '#000',
        color: '#fff',
      }
    })


  }
  //Handler for the submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

    const { title, description, price, imageUrl } = product
    e.preventDefault()
    const errors = productValidation({
      title,
      description,
      price,
      imageUrl,
      color: TempColor


    })


    //check if there is any error
    const hasError = Object.values(errors).some(error => error === "") && Object.values(errors).every(error => error === "")
    if (!hasError) {
      setErrors(errors)

      return
    }

    //add the product to the renderProducts
    setRenderProducts([{ ...product, id: uuid(), color: TempColor, category: selectedCategory }, ...renderProducts])
    setProduct(defaultProduct)
    setIsOpen(false)
    setTempColor([])
    toast.success('Product added successfully', {
      position: 'top-center',
      duration: 2000,
      icon: '🚀',
      style: {
        background: '#000',
        color: '#fff',
      }
    })


  }
  //Handler for the edit submit
  const handleEditSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const { title, description, price, imageUrl } = updateProduct
    e.preventDefault()
    const errors = productValidation({
      title,
      description,
      price,
      imageUrl,
      color: TempColor



    })


    //check if there is any error 
    const hasError = Object.values(errors).some(error => error === "") && Object.values(errors).every(error => error === "")
    if (!hasError) {
      setErrors(errors)

      return
    }

    //add update the product to the renderProducts
    const updatedProduct = [...renderProducts]
    updatedProduct[updateIndex] = { ...updateProduct, color: TempColor.concat(updateProduct.color) }
    setRenderProducts(updatedProduct)

    setupdateProduct(defaultProduct)
    setIsOpen(false)
    seteditOpen(false)
    setTempColor([])

    toast.success('Product updated successfully', {
      position: 'top-center',
      duration: 2000,
      icon: '🚀',
      style: {
        background: '#000',
        color: '#fff',
      }
    })
  }
  //Handler for the delete product
  const handelDeleteProduct = (id: string) => {

    const filteredProducts = renderProducts.filter(product => product.id !== id)
    setupdateProduct(defaultProduct)
    setdeleteOpen(false)
    setRenderProducts(filteredProducts)
    toast.success('Product deleted successfully', {
      position: 'top-center',
      duration: 2000,
      icon: '🚀',
      style: {
        background: '#000',
        color: '#fff',
      }
    })
  }
  //Handler for the clear product
  const clearProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setProduct(defaultProduct)
    setIsOpen(false)
    seteditOpen(false)
    setTempColor([])




  }

  const handleColor = (color: string) => {

    if (TempColor.includes(color)) {
      setTempColor(prev => prev.filter(c => c !== color))
      return
    }
    if (updateProduct.color.includes(color)) {
      setTempColor(prev => prev.filter(c => c !== color))
      return
    }
    setTempColor(prev => [...prev, color])





  }


  //function to open the add product modal
  const open = () => {
    setIsOpen(true)
  }

  //function to close the add product modal
  const close = () => {
    setIsOpen(false)
  }
  //function to open the edit product modal
  const openEdit = () => {
    seteditOpen(true)
  }
  //function to close the edit product modal
  const closeEdit = () => {
    seteditOpen(false)
  }
  //function to open the delete product modal
  const openDelete = (id: string) => {

    setupdateProduct(renderProducts.find(product => product.id === id) || defaultProduct);
    setdeleteOpen(true)
  }
  //function to close the delete product modal
  const closeDelete = () => {
    setdeleteOpen(false)
  }
  //mapping the products
  const mappingProducts = renderProducts.map((product, index) => (
    <ProductCard key={index} products={product} openDelete={openDelete} setupdateProduct={setupdateProduct} openEdit={openEdit} setupdateIndex={setupdateIndex}
      index={index} />
  ))


  const mappingColors = colorsList.map((color) => (
    <CircleColor key={color} color={color}
      onClick={() => handleColor(color)} />
  ))



  const handelInoutEdit = (id: string, label: string, type: string, placeholder: string, name: Tproduct) => {

    return (
      <>
        <label className='font-bold ' htmlFor={id}>{label}</label>
        <Inputs id={id} type={type} placeholder={placeholder} name={name} onChange={handleEditProduct} value={updateProduct[name]} />
        <  ErorrMessage msg={errors[name]} />
      </>
    )


  }

  return (
    <>

      <main className='container mx-auto'>
        <Button className='bg-blue-500 text-white p-2 rounded-md cursor-pointer w-1/2 mx-auto flex justify-center items-center md:w-[80%]
         mt-4' onClick={open}>Open Modal</Button>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 p-4 m-6'>
          {mappingProducts}
        </div>

      </main>


      {/*add product modal */}

      <MyModal isOpen={isOpen} title="Add New Product" setIsOpen={close}   >
        <form className='flex flex-col  space-y-2 ' onSubmit={handleSubmit} >
          {formInputs.map((input) => (
            <div key={input.id}>
              <label className='font-bold ' htmlFor={input.id}>{input.label}</label>
              <Inputs id={input.id} type={input.type} placeholder={input.placeholder} name={input.id} onChange={handleProduct} value={product[input.name]} />
              <  ErorrMessage msg={errors.title} />

            </div>



          ))}
          {/* color */}

          <SelectMenu selected={selectedCategory} setSelected={setSelectedCategory} />
          <div className='flex flex-col space-y-1 '>
            <label className='font-bold ' htmlFor="color">Color</label>
            <div className='flex flex-wrap space-x-2 '>
              {errors.color && <  ErorrMessage msg={errors.color} />}
              {TempColor.map((color, index) => (
                <span key={index} className='p-1 mr-1 mb-1 text-xs rounded-md text-white' style={{ backgroundColor: color }} >
                  {color == color ? color : null}
                </span>
              ))}
            </div>



            <div className='flex flex-wrap space-x-2 my-1'>
              {mappingColors}
            </div>

          </div>

          <div className='flex  justify-between items-center  space-x-4'>
            <Button className='bg-blue-500 text-white p-2 rounded-md w-full cursor-pointer' type='submit' >Submit</Button>
            <Button className=' bg-red-500 text-white p-2 rounded-md w-full cursor-pointer' onClick={clearProduct}>cancel</Button>
          </div>
        </form>

      </MyModal>

      {/*Edit product modal*/}
      <MyModal isOpen={editOpen} title="Update Product" setIsOpen={closeEdit}   >
        <form className='flex flex-col  space-y-2 ' onSubmit={handleEditSubmit} >
          {handelInoutEdit("title", "Title", "text", "Enter Title", "title")}
          {handelInoutEdit("description", "Description", "text", "Enter Description", "description")}
          {handelInoutEdit("price", "Price", "number", "Enter Price", "price")}
          {handelInoutEdit("imageUrl", "Image Url", "text", "Enter Image Url", "imageUrl")}

          {/* color */}

          <SelectMenu selected={updateProduct.category} setSelected={(value) => {
            setupdateProduct({ ...updateProduct, category: value })
          }} />
          <div className='flex flex-col space-y-1 '>
            <label className='font-bold ' htmlFor="color">Color</label>
            <div className='flex flex-wrap space-x-2 '>
              {errors.color && <  ErorrMessage msg={errors.color} />}
              {TempColor.concat(updateProduct.color).map((color, index) => (
                <span key={index} className='p-1 mr-1 mb-1 text-xs rounded-md text-white' style={{ backgroundColor: color }} >
                  {color == color ? color : null}
                </span>
              ))}
            </div>



            <div className='flex flex-wrap space-x-2 my-1'>
              {mappingColors}
            </div>

          </div>

          <div className='flex  justify-between items-center  space-x-4'>
            <Button className='bg-blue-500 text-white p-2 rounded-md w-full cursor-pointer' type='submit' >Update</Button>
            <Button className=' bg-red-500 text-white p-2 rounded-md w-full cursor-pointer' onClick={clearProduct}>cancel</Button>
          </div>
        </form>

      </MyModal>

      {/*Delete product modal*/}
      <MyModal isOpen={deleteOpen} title="Delete Product" setIsOpen={closeDelete}  className='relative'>
      <img src={updateProduct.imageUrl} alt={updateProduct.title} className='w-10 h-10 object-cover rounded-full absolute top-0 right-0 m-5' />
       <div className='flex flex-col space-y-2 justify-center items-center font-bold mt-4'>
       <p className='text-center'>Are you sure you want to delete this product?</p>
       <span className='text-red-500 text-center text-lg font-bold bg-gray-200 p-2 rounded-md my-3'>{updateProduct.title}
        <span className='text-gray-500 text-sm'>
        
        </span>
        
       </span>
       </div>
        <div className='flex  justify-between items-center  space-x-4'>
          <Button className='bg-red-500 text-white p-2 rounded-md w-full cursor-pointer' type='submit' onClick={() => handelDeleteProduct(updateProduct.id || "")}>Delete</Button>
          <Button className=' bg-blue-500 text-white p-2 rounded-md w-full cursor-pointer' onClick={closeDelete}>cancel</Button>
        </div>
      </MyModal>
      <Toaster />

    </>
  )
}

export default App
