import React from 'react';
import { Box, NativeBaseProvider, ScrollView } from 'native-base';
import CButton from '@/components/common/Button';
import { CSpinner } from '@/components/common/Spinner';
import Product from '@/components/common/Product';
import Header from '@/layouts/Header';
import AppBar from '../AppBar';
import { CSlick } from '@/components/common/Slick/container';
import { Category } from '@/modules/categoty/container';
import { Trending } from '../Trending';

export default function Home() {
    return (
        <Box backgroundColor={"white"} flex={1}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Header />
                <AppBar />
                <CSlick />
                <Box marginTop={4} marginBottom={3} paddingX={5}>
                    <Category />
                    <Trending />
                    {/* <CButton title="Mua ngay" />
                    <CSpinner />
                    <Product /> */}
                </Box>
            </ScrollView>
        </Box>
    );
}

