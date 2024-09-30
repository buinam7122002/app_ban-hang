import { QUERY_KEY } from "@/constants/queryKey"
import HttpRequest from "@/utils/HttpRequest"
import { useQuery } from "@tanstack/react-query"

const fetcher = async () => {
    const res = await HttpRequest.get(`product/sale`)
    return res
}

export const useGetProductSale = () => {
    return useQuery({
        queryKey: [QUERY_KEY.GET_PRODUCT_SALE],
        queryFn: () => fetcher(),
        select: (data) => data.data,
    })
}