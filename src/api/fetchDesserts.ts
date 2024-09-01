import { useQuery } from "@tanstack/react-query"
import bolo from '../assets/dessert3.jpg'
import cheesecake from '../assets/dessert1.jpg'
import tiramisu from '../assets/dessert2.jpg'
import strawberry from '../assets/dessert4.jpg'
import pudim from '../assets/dessert5.jpg'
import icecream from '../assets/dessert6.jpg'


const mockedData = [
    {
        id: "1",
        name: "Bolo de chocolate",
        price: 5,
        image: bolo
    },
    {
        id: "2",
        name: "Cheesecake",
        price: 4,
        image: cheesecake
    },
    {
        id: "3",
        name: "Tiramisu",
        price: 6,
        image: tiramisu
    },
    {
        id: "4",
        name: "Bolo de morango",
        price: 7,
        image: strawberry
    },
    {
        id: "5",
        name: "pudim",
        price: 5,
        image: pudim
    },
    {
        id: "6",
        name: "Sorvete",
        price: 10,
        image: icecream
    }
]

export interface IDesserts {
    id: string;
    name: string;
    price: number;
    image: string;
}

const fetchDesserts = async (): Promise<IDesserts[]> => {
 const data = new Promise<IDesserts[]>((resolve) => {
    setTimeout(() => {
        resolve(mockedData)
    }, 1000)
 })

    return data
}

export const useFetchDessets = () => {
    return useQuery({
        queryKey: ["desserts"],
        queryFn: fetchDesserts
    })
}