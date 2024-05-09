"use client"

import React from 'react';
import styled from 'styled-components';
import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInputSearchIcon } from './PrimaryInput';

const sairaStencilOne = Saira_Stencil_One({
   subsets: ["latin"],
   weight: ['400']
  });

interface HeaderProps {
    
}

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;
`

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
`

export function Header(props : HeaderProps){
    return (
        <>
            <TagHeader>
                <Logo className={sairaStencilOne.className}>Capputeeno</Logo>
                <div>
                    <PrimaryInputSearchIcon placeholder='Procurando por algo específico?'/>
                </div>
            </TagHeader>
        </>
    );
};
