import React, { useEffect } from 'react';
import { Box, ScrollView } from 'native-base';
import Header from '@/layouts/Header';
import AppBar from '../AppBar';
import { CSlick } from '@/components/common/Slick/container';
import { Category } from '@/modules/categoty/container';
import { Trending } from '../Trending';
import { Footer } from '../Footer/container';
import { FooterAppBar } from '../FooterAppBar';
import { useGetProductNew } from '@/hooks/useGetProductNew';
import { useGetProductSale } from '@/hooks/useGetProductSale';
import { useGetProductDiscount } from '@/hooks/useGetProductDiscount';
import { appStore } from '@/store';
import { useGetCartByUserId } from '@/modules/cart/hook/getCartByUserId';

export default function Home() {
    const { data: listProductNew, isFetching: loadingProductNew } = useGetProductNew()
    const { data: listProductSale, isFetching: loadingProductSale } = useGetProductSale()
    const { data: listProductDiscount, isFetching: loadingProductDiscount } = useGetProductDiscount()
    const { user_info, setCartInfo, cart_info } = appStore()
    const { data: getCartById } = useGetCartByUserId(user_info._id)
    useEffect(() => {
        if (Array.isArray(getCartById)) {
            setCartInfo(getCartById)
        } else if (getCartById) {
            setCartInfo([getCartById])
        } else {
            setCartInfo([])
        }
    }, [getCartById])
    return (
        <Box backgroundColor={"white"} flex={1}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Header />
                <AppBar />
                <CSlick />
                <Box marginTop={4} marginBottom={3} paddingX={5}>
                    <Category />
                    <Trending type='new' loading={loadingProductNew} data={listProductNew || []} title='Top Sản Phẩm Mới Nhất' total={listProductNew?.length ?? 0} />
                    <Trending type='sale' loading={loadingProductSale} data={listProductSale || []} title='Top Sản Phẩm Bán Chạy Nhất' total={listProductSale?.length ?? 0} />
                    <Trending type='discount' loading={loadingProductDiscount} data={listProductDiscount || []} title='Top Sản Phẩm Sale' total={listProductDiscount?.length ?? 0} />
                    <Footer />
                </Box>
            </ScrollView>
            <FooterAppBar />
        </Box>
    );
}

