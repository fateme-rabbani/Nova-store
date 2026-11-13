"use client";

import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
`;

export const Viewport = styled.div`
  overflow: hidden;
`;

export const Track = styled.div<{ $activeSlide: number }>`
  display: flex;
  direction: ltr;
  transform: translateX(${({ $activeSlide }) => -$activeSlide * 100}%);
  transition: transform 350ms ease;
`;

export const Slide = styled.div`
  position: relative;
  flex: 0 0 100%;
  min-width: 0;
  min-height: 360px;
  display: flex;
  align-items: flex-start;
  padding: 28px 24px;
  background: #ead7c4;
  color: ${({ theme }) => theme.colors.primary900};

  @media (min-width: 768px) {
    align-items: center;
    min-height: 380px;
    padding: 48px 32px;
  }

  @media (min-width: 1024px) {
    min-height: 480px;
  }
`;

export const Banner = styled.picture`
  position: absolute;
  inset: 0;

  img {
    object-fit: cover;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: 16px;
  direction: rtl;
`;

export const Copy = styled.div`
  width: 100%;

  h2 {
    font-size: 50px;
  }

  p {
    margin: 8px 0 24px;
    font-size: 20px;
    color: ${({ theme }) => theme.colors.primary800};
  }
  @media (max-width: 768px) {
    h2 {
      font-size: 30px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const Dots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  direction: ltr;
  padding: 8px 0;
`;

export const Dot = styled.button<{ $active: boolean }>`
  display: grid;
  place-items: center;
  width: 20px;
  height: 44px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: pointer;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${({ theme, $active }) =>
      $active ? theme.colors.secondary500 : theme.colors.primary400};
  }
`;
