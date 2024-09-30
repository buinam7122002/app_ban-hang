import { QUERY_KEY } from "@/constants/queryKey"
import HttpRequest from "@/utils/HttpRequest"
import { useQuery } from "@tanstack/react-query"

const fetcher = async () => {
    const res = await HttpRequest.get(`product/discount`)
    return res
}

export const useGetProductDiscount = () => {
    return useQuery({
        queryKey: [QUERY_KEY.GET_PRODUCT_DISCOUNT],
        queryFn: () => fetcher(),
        select: (data) => data.data,
    })
}