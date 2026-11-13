"use client";

import styled from "styled-components";

export const Card = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.contentBackground};
`;

export const Picture = styled.div`
  position: relative;
  height: 220px;
  margin: 12px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};

  img {
    object-fit: contain;
  }
`;

export const Details = styled.div`
  padding: 8px 20px 20px;

  > button {
    width: 100%;
    margin-top: 20px;
  }
`;

export const Category = styled.p`
  display: inline-block;
  margin-bottom: 8px;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 13px;
  background: ${({ theme }) => theme.colors.positive50};
  color: ${({ theme }) => theme.colors.positive700};
`;

export const Title = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 18px;
`;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-top: 30px;
`;

export const Price = styled.span`
  font-size: 20px;
  font-weight: 700;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;

  svg {
    width: 20px;
    height: 20px;
  }
`;
