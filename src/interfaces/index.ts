import type { Tproduct } from "../types"



export interface IProduct {
    id?: string | undefined
    title: string
    price: string
    description: string
    imageUrl: string
    color: string[]
    category: {
        name: string,
        imageUrl: string 
    }

}

export interface ISliceText {
    text: string
    maxLength: number
}

export interface IFormInput {
    id: string
    name: Tproduct 
    label: string
    type: string
    placeholder: string
}

export interface ICategory {
    id: string
    name: string
    imageUrl: string
}