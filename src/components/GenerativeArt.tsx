"use client";

import type React from "react";
import { useEffect, useState, useCallback, useMemo } from "react";
import cx from "classix";
import styles from "@/assets/styles/generative-art.module.css";
import useDebounce from "@/lib/hooks/useDebounce";
import { LOGO_SIZE } from "@/lib/constants";

const GenerativeArt: React.FC = () => {
  const [cellNumber, setCellNumber] = useState(LOGO_SIZE);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const debouncedDimensions = useDebounce(dimensions, 100);
  const [cells, setCells] = useState<boolean[]>([]);

  const cellSize = Math.round(
    Math.max(debouncedDimensions.width, debouncedDimensions.height) / cellNumber
  );
  const cols = Math.min(
    Math.floor(debouncedDimensions.width / cellSize),
    cellNumber
  );
  const rows = Math.min(
    Math.floor(debouncedDimensions.height / cellSize),
    cellNumber
  );

  const [isFlippedAgain, setIsFlippedAgain] = useState<boolean[]>([]);

  const handleCellHover = useCallback((index: number) => {
    setCells((prevCells) => {
      const newCells = [...prevCells];
      newCells[index] = !newCells[index];
      return newCells;
    });
  }, []);

  const handleMouseLeave = useCallback((index: number) => {
    setIsFlippedAgain((prevIsFlippedAgain) => {
      const newIsFlippedAgain = [...prevIsFlippedAgain];
      newIsFlippedAgain[index] = !newIsFlippedAgain[index];
      return newIsFlippedAgain;
    });
  }, []);

  const cellPatterns = useMemo(() => {
    return Array.from({ length: cols * rows }, () => Math.random() < 0.5);
  }, [cols, rows]);

  const initializeCells = useCallback(() => {
    const newCells = Array.from(
      { length: cols * rows },
      () => Math.random() < 0.5
    );
    setCells(newCells);
  }, [cols, rows]);

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      setCellNumber(
        Math.floor(Math.min(window.innerWidth, window.innerHeight) / 24)
      );
    };

    // Initial dimensions update
    updateDimensions();

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    initializeCells();
  }, [initializeCells]);

  return (
    <div
      className={cx(styles.grid, "contain-strict")}
      style={
        {
          "--cell-size": `${cellSize}px`,
          gridTemplateColumns: `repeat(${cols}, var(--cell-size))`,
          gridTemplateRows: `repeat(${rows}, var(--cell-size))`,
        } as React.CSSProperties
      }
    >
      {cells.map((isFlipped, index) => (
        <div
          key={index}
          onMouseEnter={() => handleCellHover(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          className={cx(
            styles.cell,
            cellPatterns[index] ? styles.triangle : styles.striped
          )}
          style={
            {
              "--triangle-rotation": isFlipped ? "45deg" : "-45deg",
              "--triangle-color": isFlippedAgain[index]
                ? "var(--color-0, lightblue)"
                : isFlipped
                  ? "var(--color-1, blue)"
                  : "var(--color-2, navy)",
            } as React.CSSProperties
          }
        ></div>
      ))}
    </div>
  );
};

export default GenerativeArt;
