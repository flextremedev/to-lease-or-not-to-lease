import * as React from "react";
import { styled } from "../../theme";
type HeadingProps = {
  h: 1 | 2;
  children: string;
  invertColor?: boolean;
};
type HeadingType = "h1" | "h2";
const makeHeadingStyled = (h: number) => {
  const headingType = `h${h}` as HeadingType;
  return styled[headingType]<Pick<HeadingProps, "invertColor">>`
    font-size: ${props => props.theme.fonts[headingType].fontSize};
    font-family: ${props => props.theme.fonts[headingType].fontFamily};
    font-weight: ${props => props.theme.fonts[headingType].fontWeight};
    padding: 0;
    margin: 0;
    color: ${props =>
      !props.invertColor
        ? props.theme.colors.onForeground
        : props.theme.colors.onForegroundAlt};
  `;
};

export const Heading: React.FC<HeadingProps> = React.memo(
  ({ h = 1, children, invertColor }) => {
    const Heading = makeHeadingStyled(h);
    return <Heading invertColor={invertColor}>{children}</Heading>;
  }
);
Heading.displayName = "Heading";
