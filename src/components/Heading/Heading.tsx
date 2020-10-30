import * as React from "react";
import { styled } from "../../theme";
type HeadingProps = {
  h?: 1 | 2 | 3;
  children?: string | number;
  invertColor?: boolean;
  style?: React.CSSProperties;
  dataTestId?: string;
  useMarginBottom?: boolean;
};
type HeadingPropsPick = Pick<HeadingProps, "invertColor" | "useMarginBottom">;
type HeadingType = "h1" | "h2" | "h3";
const makeHeadingStyled = (h: number) => {
  const headingType = `h${h}` as HeadingType;
  return styled[headingType]<HeadingPropsPick>`
    font-size: ${props => props.theme.fonts[headingType].fontSize};
    font-family: ${props => props.theme.fonts[headingType].fontFamily};
    font-weight: ${props => props.theme.fonts[headingType].fontWeight};
    line-height: 1;
    padding: 0;
    margin: 0;
    margin-bottom: ${props =>
      props.useMarginBottom ? props.theme.spaces.xl : 0};
    color: ${props =>
      !props.invertColor
        ? props.theme.colors.onForeground
        : props.theme.colors.onForegroundAlt};
  `;
};

export const Heading: React.FC<HeadingProps> = React.memo(
  ({ h = 1, children, invertColor, style, dataTestId, useMarginBottom }) => {
    const Heading = makeHeadingStyled(h);
    return (
      <Heading
        invertColor={invertColor}
        style={style}
        data-testid={dataTestId}
        useMarginBottom={useMarginBottom}
      >
        {children}
      </Heading>
    );
  }
);
Heading.displayName = "Heading";
