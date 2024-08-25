import { useMutation, useQuery } from "@tanstack/react-query";
import { SingUpService } from "../services";
import { QUERY_KEY } from "@/constants/queryKey";
import { AlertTypes, Notification } from "@/components/Notification";
import { AnyElement } from "@/constants";
// export const useCreateUseSr = useQuery({
//     queryKey: [QUERY_KEY.SING_UP],
//     queryFn: () => SingUpService.createUser
// })
export const useCreateUser = (onSuccess: () => void) => {
    return useMutation({
        mutationFn: SingUpService.singUp,
        onSuccess: () => {
            onSuccess && onSuccess()
        },
        onError(error: AnyElement) {
            Notification({
                description: error.response.data.message,
                alertType: AlertTypes.ERROR
            })
        },
    });
};
