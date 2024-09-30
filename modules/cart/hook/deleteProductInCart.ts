import HttpRequest from "@/utils/HttpRequest"
import { useMutation } from "@tanstack/react-query"
export interface IDeleteProductInCart {
    userId: string
    productId: string
}
const fetcher = async (data: IDeleteProductInCart) => {
    const res = await HttpRequest.delete("cart", {
        data: data
    })
    return res
}
export const useDeleteProductInCart = () => {
    return useMutation({
        mutationFn: fetcher,
        onSuccess: () => {
            console.log("Xoa thanh cong")
        },
        onError: (error) => {
            console.log(error)
        }
    })
}