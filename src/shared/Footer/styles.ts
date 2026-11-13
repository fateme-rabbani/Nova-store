"use client";

import styled from "styled-components";

export const Container = styled.footer`
  margin-top: 30px;
  background: ${({ theme }) => theme.colors.primary950};
  color: ${({ theme }) => theme.colors.primary100};
`;

export const Content = styled.div`
  display: grid;
  gap: 32px;
  max-width: 1200px;
  margin-inline: auto;
  padding: 30px 16px;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr auto;
    gap: 20px;
  }
`;

export const Logo = styled.div`
  p {
    max-width: 300px;
    margin-top: 16px;
    font-size: 14px;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  font-size: 14px;

  h3 {
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const Socials = styled.div`
  display: flex;
  align-items: center;
  align-self: start;
  gap: 16px;

  span {
    display: inline-flex;
  }
`;

export const Copyright = styled.p`
  padding: 20px 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.primary800};
  text-align: center;
  font-size: 14px;
`;
