"use client";

import type React from "react";
import { useEffect, useState, useCallback, useMemo, useRef } from "react";
import cx from "classix";
import useDebounce from "@/lib/hooks/useDebounce";
import { LOGO_SIZE } from "@/lib/constants";

export interface Pattern {
  data: boolean[][];
  position?: "center" | "topLeft";
}

interface GenerativeArtProps {
  pattern?: Pattern;
}

const GenerativeArt: React.FC<GenerativeArtProps> = ({ pattern }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [cellNumber, setCellNumber] = useState(LOGO_SIZE);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const debouncedDimensions = useDebounce(dimensions, 150);
  const [cells, setCells] = useState<Array<boolean | null>>([]);
  const [isFlippedAgain, setIsFlippedAgain] = useState<boolean[]>([]);
  const [isClicked, setIsClicked] = useState<boolean[]>([]);

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

  const handleMouseClick = useCallback(
    (index: number) => {
      setIsClicked((prevIsClicked) => {
        const newIsClicked = [...prevIsClicked];
        newIsClicked[index] = !newIsClicked[index];
        return newIsClicked;
      });
    },
    [setIsClicked]
  );

  const handleCellHover = useCallback(
    (index: number, isMouseDown: boolean) => {
      setCells((prevCells) => {
        const newCells = [...prevCells];
        newCells[index] = !newCells[index];
        return newCells;
      });

      if (isMouseDown) {
        handleMouseClick(index);
      }
    },
    [handleMouseClick, setCells]
  );

  const handleMouseLeave = useCallback(
    (index: number) => {
      setIsFlippedAgain((prevIsFlippedAgain) => {
        const newIsFlippedAgain = [...prevIsFlippedAgain];
        newIsFlippedAgain[index] = !newIsFlippedAgain[index];
        return newIsFlippedAgain;
      });
    },
    [setIsFlippedAgain]
  );

  const cellPatterns = useMemo(() => {
    return Array.from({ length: cols * rows }, () => Math.random() < 0.5);
  }, [cols, rows]);

  const initializeCells = useCallback(() => {
    const newCells = Array.from(
      { length: cols * rows },
      () => Math.random() < 0.5
    );

    if (pattern) {
      const { data, position = "center" } = pattern;
      const patternHeight = data.length;
      const patternWidth = data[0]?.length || 0;

      if (!patternHeight || !patternWidth) {
        return setCells(newCells);
      }

      let startRow = 0;
      let startCol = 0;

      if (position === "center") {
        startRow = Math.floor((rows - patternHeight) / 2);
        startCol = Math.floor((cols - patternWidth) / 2);
      }

      data.forEach((row, rowIndex) => {
        row.forEach((cell, colIndex) => {
          const gridIndex =
            (startRow + rowIndex) * cols + (startCol + colIndex);
          if (gridIndex >= 0 && gridIndex < newCells.length) {
            newCells[gridIndex] = cell === true ? null : Math.random() > 0.5;
          }
        });
      });
    }

    setCells(newCells);
  }, [cols, rows, setCells, pattern]);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        const height = entry.contentRect.height;

        setDimensions({ width, height });
        setCellNumber(Math.ceil(Math.max(width, height) / LOGO_SIZE));
      }
    });

    resizeObserver.observe(containerRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [containerRef, setDimensions, setCellNumber]);

  useEffect(() => {
    initializeCells();
  }, [initializeCells]);

  return (
    <div
      className="generative-art"
      ref={containerRef}
      style={
        {
          "--cell-size": `${cellSize}px`,
          gridTemplateColumns: `repeat(${cols ?? "auto-fill"}, minmax(var(--cell-size), 1fr))`,
          gridTemplateRows: `repeat(${rows ?? "auto-fill"}, minmax(var(--cell-size), 1fr))`,
        } as React.CSSProperties
      }
    >
      {cells.map((isFlipped, index) => (
        <div
          key={index}
          onMouseEnter={(event) => handleCellHover(index, event.buttons === 1)}
          onMouseLeave={() => handleMouseLeave(index)}
          onClick={() => handleMouseClick(index)}
          className={cx(
            cellPatterns[index] ? "triangle" : "striped",
            isClicked[index] && "active",
            cells[index] === null
              ? "pattern-cell"
              : cells[index] === false
                ? "cell"
                : null
          )}
          style={
            {
              "--triangle-rotation": isFlipped ? "45deg" : "-45deg",
              "--triangle-color": isClicked[index]
                ? "var(--color-3, ghostwhite)"
                : isFlippedAgain[index]
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
