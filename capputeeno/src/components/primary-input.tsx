import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { SearchIcon } from './icons/search-icon';


export const PrimaryInput = styled.input`
    width: 352px;
    padding: 10px 16px;
    border-radius:8px;
    border: none;
    font-weight:400;
    font-family: inherit;
    font-size: 14px;
    line-height: 22px;
    color: var(--text-dark);

    background:var(--bg-secondary);
`

const InputContainer = styled.div`
    position: relative;
    width: 352px;

    svg{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function PrimaryInputSearchIcon(props: InputProps) {
    return(
        <InputContainer>
            <PrimaryInput {...props}/>
            <SearchIcon/>
        </InputContainer>
    )
}