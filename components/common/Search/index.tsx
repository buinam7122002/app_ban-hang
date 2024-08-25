import React from 'react';
import { Box, Input, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';

export function SearchBar() {
    return (
        <Box style={{ marginLeft: 12 }} w="66%" alignSelf="center">
            <Input
                placeholder="Nhập tên sản phẩm..."
                width="100%"
                borderRadius="4"
                px="3"
                fontSize="12"
                onSubmitEditing={() => alert('onSubmitEditing')}
                height="32px"
                InputRightElement={
                    <Icon
                        m="2"
                        ml="2"
                        size="5"
                        color="gray.400"
                        as={<MaterialIcons name="search" />}
                    />
                }
            />
        </Box>
    );
}
