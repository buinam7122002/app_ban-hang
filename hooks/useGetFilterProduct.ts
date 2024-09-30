import { QUERY_KEY } from "@/constants/queryKey"
import HttpRequest from "@/utils/HttpRequest"
import { useQuery } from "@tanstack/react-query"

const fetcher = async (filter: string) => {
    const res = await HttpRequest.get(`product/filter/${filter}`)
    return res
}

export const useGetFilterProduct = (filter: string) => {
    return useQuery({
        queryKey: [QUERY_KEY.GET_FILTER_PRODUCT, filter],
        queryFn: () => fetcher(filter),
        select: (data) => data,
        enabled: !!filter
    })
}