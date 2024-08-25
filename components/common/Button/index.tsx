import React, { FC } from 'react';
import { ButtonProps } from 'react-native';
import styled from 'styled-components/native';

const StyledButton = styled.TouchableOpacity<{ disabled?: boolean }>`
    background-color: ${({ disabled }) => (disabled ? '#57534e' : 'black')};
    width: 100%;
    height: 44px;
    border: none;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    font-size: 12px;
    text-transform: uppercase;
    outline: none;
    line-height: 10px;
    box-shadow: none;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
    cursor: ${({ disabled }) => (disabled ? "pointer" : "default")};
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;

interface Props extends ButtonProps {
    title: string;
}

const CButton: FC<Props> = ({ title, disabled, onPress, ...props }) => {
    return (
        <StyledButton activeOpacity={0.8} onPress={onPress} disabled={disabled} {...props}>
            <ButtonText>{title}</ButtonText>
        </StyledButton>
    );
};

export default CButton;
