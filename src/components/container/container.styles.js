import { css } from "@emotion/core"
import { mediaQuery as mq } from "../../styles"

// TODO: Change border, inner padding styling to conditional prop
export const container = ({ columns, theme }) => css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  padding: ${theme.baseSpacing(1.5)} ${theme.baseSpacing()};

  ${mq({ orientation: "portrait" })} {
    max-width: 600px;
  }

  ${mq("tablet-md")} {
    padding: ${theme.baseSpacing(2.5)} ${theme.baseSpacing()};
  }

  ${mq("desktop")} {
    max-width: ${theme.maxWidth}px;
    padding: ${theme.baseSpacing(3.5)} ${theme.baseSpacing(2)};
  }

  ${mq("widescreen-sm")} {
    padding: ${theme.baseSpacing(4)} ${theme.baseSpacing(2)};
  }

  > * {
    border: 2px solid #fff;
    margin: ${theme.baseSpacing(0.5)} 0;
    padding: ${theme.baseSpacing()};

    ${mq({ orientation: "landscape" })} {
      width: calc(${100 / columns}% - ${theme.baseSpacing(0.5)});
    }

    ${mq("desktop")} {
      width: calc(${100 / columns}% - ${theme.baseSpacing(0.5)});
    }

    ${mq("widescreen-sm")} {
      margin: ${theme.baseSpacing()} 0;
      padding: ${theme.baseSpacing(2)};
      width: calc(${100 / columns}% - ${theme.baseSpacing()});
    }

    > * {
      &:first-child {
        margin-top: 0;
      }
      &:last-child {
        margin-bottom: 0;
      }
    }

    h1 {
      font-size: clamp(18px, 5.625vw, ${theme.h4.fontSize});
    }
  }
`

export default container