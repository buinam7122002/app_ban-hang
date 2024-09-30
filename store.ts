import { ICart } from './../api_app-ban-hang/src/model/cart.model';
import { create } from 'zustand';
import { IUser } from './types';
interface IAppStore {
    user_info: IUser
    cart_info: ICart[]
    setUserInfo: (user: IUser) => void
    setCartInfo: (cart: ICart[]) => void
}
export const appStore = create<IAppStore>((set) => ({
    user_info: {} as IUser,
    cart_info: [] as ICart[],
    setUserInfo: (user_info: IUser) => set({ user_info }),
    setCartInfo: (cart_info: ICart[]) => set({ cart_info })
}))
