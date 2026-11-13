"use client";

import { useState, type ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Button from "@/shared/Button";
import { Container, Viewport, Track, Dots, Dot } from "./styles";

interface SliderControlsProps {
  children: ReactNode;
  labels: string[];
}

export default function SliderControls({
  children,
  labels,
}: SliderControlsProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <Container>
      <Viewport>
        <Track $activeSlide={activeSlide}>{children}</Track>
      </Viewport>

      <Dots>
        {labels.map((label, index) => (
          <Dot
            key={index}
            type="button"
            title={label}
            $active={activeSlide === index}
            onClick={() => setActiveSlide(index)}
          />
        ))}
      </Dots>
    </Container>
  );
}

export function ProductsButton({
  text,
  isRtl,
}: {
  text: string;
  isRtl: boolean;
}) {
  return (
    <Button
      rightIcon={isRtl ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
      onClick={() => {}}
    >
      {text}
    </Button>
  );
}
