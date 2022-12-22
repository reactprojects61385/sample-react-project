import { Fragment } from "react";
import classNames from "classnames";

export default function Button({ text, variant = "primary", type = "button" }) {
  return (
    <Fragment>
      <button
        className={classNames({
          primary: variant === "primary",
          danger: variant === "danger",
          warning: variant === "warning",
        })}
        type={type}
      >
        {text}
      </button>
      <br />
      <br />
    </Fragment>
  );
}
