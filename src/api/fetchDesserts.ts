import { useQuery } from "@tanstack/react-query"
import bolo from '../assets/dessert1.jpg'

const mockedData = [
    {
        id: "1",
        name: "Chocolate Cake",
        price: 5,
        image: bolo
    },
    {
        id: "2",
        name: "Cheesecake",
        price: 4,
        image: bolo
    },
    {
        id: "3",
        name: "Tiramisu",
        price: 6,
        image: bolo
    }
]

interface IOutput {
    id: string;
    name: string;
    price: number;
    image: string;
}

const fetchDesserts = async (): Promise<IOutput[]> => {
 const data = new Promise<IOutput[]>((resolve) => {
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