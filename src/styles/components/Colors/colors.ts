import { IColor } from "../../../interface/TypeGlobalStyles";

export const setColors = (color: IColor) => {
  switch (color) {
    case "primary":
      return "var(--color-primary)";

    case "secundary":
      return "var(--color-primary-focus)";

    case "negative":
      return "var(--color-primary-negative)";

    case "error":
      return "var(--color-error)";

    case "success":
      return "var(--color-success)";

    case "alert":
      return "var(--color-alert)";

    case "white":
      return "var(--color-white)";

    case "grey1":
      return "var(--color-grey-1)";

    case "grey2":
      return "var(--color-grey-2)";

    case "grey3":
      return "var(--color-grey-3)";

    case undefined:
      return "var(--color-grey-1)";
  }
};
