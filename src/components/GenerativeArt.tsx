"use client";

import type React from "react";
import { useEffect, useState, useCallback, useMemo } from "react";
import styles from "@/assets/styles/generative-art.module.css";

const GenerativeArt: React.FC = () => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [cells, setCells] = useState<boolean[]>([]);

  const cellSize = Math.round(
    Math.max(dimensions.width, dimensions.height) / 30
  );
  const cols = Math.min(Math.floor(dimensions.width / cellSize), 30);
  const rows = Math.min(Math.floor(dimensions.height / cellSize), 30);

  const [isFlippedAgain, setIsFlippedAgain] = useState<boolean[]>([]);

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
    };

    // Initial dimensions update
    updateDimensions();

    // Debounced resize handler
    let timeoutId: NodeJS.Timeout;
    const debouncedUpdateDimensions = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(updateDimensions, 250);
    };

    window.addEventListener("resize", debouncedUpdateDimensions);

    return () => {
      window.removeEventListener("resize", debouncedUpdateDimensions);
      clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    initializeCells();
  }, [initializeCells]);

  const handleCellHover = (index: number) => {
    setCells((prevCells) => {
      const newCells = [...prevCells];
      newCells[index] = !newCells[index];
      return newCells;
    });
  };

  return (
    <div
      className={styles.grid}
      style={{
        "--cell-size": `${cellSize}px`,
        gridTemplateColumns: `repeat(${cols}, var(--cell-size))`,
        gridTemplateRows: `repeat(${rows}, var(--cell-size))`,
      }}
    >
      {cells.map((isFlipped, index) => (
        <div
          key={index}
          className={styles.cell}
          onMouseEnter={() => handleCellHover(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <div
            className={cellPatterns[index] ? styles.triangle : styles.striped}
            style={{
              "--triangle-rotation": isFlipped ? "45deg" : "-45deg",
              "--triangle-color": isFlippedAgain[index]
                ? "lightblue"
                : isFlipped
                  ? "var(--color-1, blue)"
                  : "var(--color-2, navy)",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default GenerativeArt;
