import { useMutation } from "@tanstack/react-query";
import { SingInService } from "../services";
import { AnyElement } from "@/constants";
import { AlertTypes, Notification } from "@/components/Notification";
import { IUser } from "@/types";
import { appStore } from "@/store";
import { useGetCartByUserId } from "@/modules/cart/hook/getCartByUserId";
import { ICart } from "../../../../api_app-ban-hang/src/model/cart.model";
export const useSingIn = (onSuccess: () => void) => {
    const { setUserInfo } = appStore()
    return useMutation({
        mutationFn: SingInService.singin,
        onSuccess: (data: IUser) => {
            onSuccess && onSuccess()
            setUserInfo(data)
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