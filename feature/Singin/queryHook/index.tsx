import { useMutation, useQuery } from "@tanstack/react-query";
import { SingInService } from "../services";
import { AnyElement } from "@/constants";
import { AlertTypes, Notification } from "@/components/Notification";
export const useSingIn = (onSuccess: () => void) => {
    return useMutation({
        mutationFn: SingInService.singin,
        onSuccess: () => {
            onSuccess && onSuccess()
        },
        onError(error: AnyElement) {
            console.log(error)
            Notification({
                description: error.response.data.message,
                alertType: AlertTypes.ERROR
            })
        },
    })
}