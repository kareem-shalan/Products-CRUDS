import Button from '../Button/Button';
import ImageUrl from './../ImageUrl/ImageUrl';
import type { IProduct } from './../../interfaces/index';
import { priceFormat, sliceText } from '../../Utils/SliceText';
import CircleColor from '../CircleColor/CircleColor';

interface ProductCardProps {
    products: IProduct,
    openDelete: (id: string) => void
  
    setupdateProduct: (product: IProduct) => void
    openEdit: () => void
    setupdateIndex: (index: number) => void


    
    index: number
}
export default function ProductCard({ products, setupdateProduct, openDelete, openEdit, setupdateIndex, index }: ProductCardProps) {

    const { title, price, description, imageUrl, color, category } = products

    const mappingColors = color?.map((colors, index) => (
        <CircleColor key={index} color={colors} className='w-5 h-5  cursor-pointer rounded-full ' />

    ))

    const handleUpdate = () => {
        setupdateProduct(products)
        openEdit()
        setupdateIndex(index)

    }
    const handleDelete = () => {
        openDelete(products.id || "")
    }

    return (
        <div className='border border-amber-100   rounded-md max-w-2xl shadow-2xl flex flex-col '>
            <div className='w-full h-48 bg-gray-200 rounded-md '>
                <ImageUrl imageUrl={imageUrl} alt={title} className='w-full h-full object-cover rounded-md hover:scale-105 transition-all duration-300 cursor-pointer' />
            </div>
            <div className='p-4'>
                <h3 className='text-lg font-bold'>{title}</h3>
                <p className='text-sm text-gray-500'>{sliceText({ text: description, maxLength: 100 })}</p>
                <div className='flex mt-2 items-center flex-wrap space-x-1'>  {mappingColors}  </div>
                <div className='flex justify-between items-center '>
                    <span className='text-lg font-bold text-green-500'>{priceFormat(Number(price))}</span>

                    <ImageUrl imageUrl={category?.imageUrl} alt={title}

                        className='w-10 h-10 object-cover cursor-pointer rounded-full'
                    />
                </div>
                <div className='flex justify-between items-center pt-2 space-x-3 '>
                    <Button className='bg-blue-500 ' width='w-1/2' onClick={handleUpdate}>Edit</Button>
                    <Button className='bg-red-500 ' width='w-1/2' onClick={handleDelete}>Delete</Button>
                </div>

            </div>


        </div>
    )
}
