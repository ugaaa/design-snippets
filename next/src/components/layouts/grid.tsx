/** How to use:
 *
 * export { Grid, GridItem };
 *
 * // 使用例
 * const App = () => {
 *   return (
 *     <Grid gap="60px" gapSp="20px" style={{ color: "red" }} styleSp={{ color: "blue" }}>
 *       <GridItem span={6} spanSp={6} gap="60px" gapSp="20px">Item 1</GridItem>
 *       <GridItem span={6} spanSp={6} gap="60px" gapSp="20px">Item 2</GridItem>
 *       <GridItem span={4} spanSp={6} gap="60px" gapSp="20px">Item 3</GridItem>
 *       <GridItem span={8} spanSp={6} gap="60px" gapSp="20px">Item 4</GridItem>
 *     </Grid>
 *   );
 * };
 */
"use client";
import { sizes } from "@/components/constants/sizes";
import React from "react";
import styled, { CSSProperties, css } from "styled-components";

type GridPropsType = {
  columnGap?: string;
  columnGapSp?: string;
  rowGap?: string;
  rowGapSp?: string;
  style?: React.CSSProperties;
  styleSp?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
};

type GridItemPropsType = {
  span?: number;
  spanSp?: number;
  columnGap?: string;
  columnGapSp?: string;
  children?: React.ReactNode;
};

const getDynamicStyle = (style?: React.CSSProperties) => {
  if (!style) return "";
  return Object.entries(style)
    .map(
      ([key, value]) =>
        `${key.replace(
          /[A-Z]/g,
          (match) => `-${match.toLowerCase()}`
        )}: ${value};`
    )
    .join(" ");
};

const GridContainer = styled.div<{
  $columnGap: string;
  $columnGapSp: string;
  $rowGap: string;
  $rowGapSp: string;
  $style?: CSSProperties;
  $styleSp?: CSSProperties;
}>`
  display: flex;
  flex-wrap: wrap;
  column-gap: ${({ $columnGap }) => $columnGap};
  row-gap: ${({ $rowGap }) => $rowGap};
  ${({ $style }) =>
    $style &&
    css`
      ${getDynamicStyle($style)}
    `};
  width: 100%;

  @media (max-width: ${sizes.breakPoint}px) {
    column-gap: ${({ $columnGapSp }) => $columnGapSp};
    row-gap: ${({ $rowGapSp }) => $rowGapSp};
    ${({ $styleSp }) =>
      $styleSp &&
      css`
        ${getDynamicStyle($styleSp)}
      `};
  }
`;

export const GridItemStyled = styled.div<{
  $width: string;
  $widthSp: string;
}>`
  width: ${({ $width }) => $width};

  @media (max-width: ${sizes.breakPoint}px) {
    width: ${({ $widthSp }) => $widthSp};
  }
`;

export const GridItem = ({
  span = 12,
  spanSp = 6,
  columnGap = "60px",
  columnGapSp = "30px",
  children,
}: GridItemPropsType) => {
  const columnCount = 12 / span;
  const columnCountSp = 12 / spanSp;

  const width =
    span === 12
      ? "100%"
      : `calc(100% / ${columnCount} - (${columnGap} * ${
          columnCount - 1
        } / ${columnCount}))`;
  const widthSp =
    spanSp === 6
      ? "100%"
      : `calc(100% / ${columnCountSp} - (${columnGapSp} * ${
          columnCountSp - 1
        } / ${columnCountSp}))`;
  return (
    <GridItemStyled $width={width} $widthSp={widthSp}>
      {children}
    </GridItemStyled>
  );
};

const Grid = ({
  columnGap = "60px",
  rowGap = "60px",
  columnGapSp = "30px",
  rowGapSp = "30px",
  children,
  style,
  styleSp,
  className,
}: GridPropsType) => {
  return (
    <GridContainer
      $columnGap={columnGap}
      $columnGapSp={columnGapSp}
      $rowGap={rowGap}
      $rowGapSp={rowGapSp}
      $style={style}
      $styleSp={styleSp}
      className={className}
    >
      {children}
    </GridContainer>
  );
};

export default Grid;
