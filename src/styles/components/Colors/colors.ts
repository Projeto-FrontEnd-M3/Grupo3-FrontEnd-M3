import { IColor } from "../../../interface/TypeGlobalStyles";

export const setColors = (color: IColor) => {
  switch (color) {
    case "primary":
      return "var(--color-primary)";

    case "secundary":
      return "var(--color-secundary)";

    case "negative":
      return "var(--color-primary-negative)";

    case "error":
      return "var(--color-error)";

    case "success":
      return "var(--color-success)";

    case "white":
      return "var(--color-grey-1)";

    case "grey":
      return "var(--color-grey-2)";

    case undefined:
      return "var(--color-grey-1)";
  }
};
