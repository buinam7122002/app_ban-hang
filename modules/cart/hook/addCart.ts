import HttpRequest from "@/utils/HttpRequest"
import { useMutation } from "@tanstack/react-query"

const fetcher = async (userId: string) => {
    const res = await HttpRequest.post("cart", userId)
    return res
}
export const useAddCart = () => {
    return useMutation({
        mutationFn: fetcher,
        onSuccess: () => {
            console.log("Thêm giỏ hàng thành công")
        },
        onError: (error) => {
            console.log(error)
        }
    })
}