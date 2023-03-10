import { Fragment } from "react";
import classNames from "classnames";

export default function Button({
  text,
  variant = "primary",
  type = "button",
  onClick = null,
}) {
  return (
    <Fragment>
      <button
        className={classNames({
          primary: variant === "primary",
          danger: variant === "danger",
          warning: variant === "warning",
          dark: variant === "dark",
        })}
        type={type}
        onClick={
          onClick
            ? onClick
            : () => {
                console.warn("button click");
              }
        }
      >
        {text}
      </button>
      <br />
      <br />
    </Fragment>
  );
}
