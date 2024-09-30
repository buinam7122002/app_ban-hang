import { QUERY_KEY } from "@/constants/queryKey"
import { IProduct } from "@/types"
import HttpRequest from "@/utils/HttpRequest"
import { useQuery } from "@tanstack/react-query"

const fetcher = async () => {
    const res = await HttpRequest.get<IProduct[]>(`product/new`)
    return res
}

export const useGetProductNew = () => {
    return useQuery({
        queryKey: [QUERY_KEY.GET_PRODUCT_NEW],
        queryFn: () => fetcher(),
        select: (data) => data.data,
    })
}