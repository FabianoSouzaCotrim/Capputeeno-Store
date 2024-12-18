"use client";

import { FilterBar } from "@/components/filter-bar";
import { ProductsList } from "@/components/products-list";
import { DefaultPageLayout } from "@/components/default-page-layout";
import {styled} from "styled-components";

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  min-height: 100vh;
  background-color: var(--bg-primary);

  @media (min-width: ${props => props.theme.desktopBreakpoint}){
        padding: 34px 160px;
    }
`;

export default function Home() {
  return (
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar />
        <ProductsList />
      </PageWrapper>
    </DefaultPageLayout>
  );
}
