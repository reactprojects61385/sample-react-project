import styled, { css } from "styled-components";

export const Title = styled.h1`
  font-size: 3rem;
  font-family: sans-serif;
  color: #1d1d1f;
  margin: 12px 0;
  cursor: default;

  ${(props) =>
    props.size === "small" &&
    css`
      font-size: 1rem;
      color: #7d7d7d;
    `}

  &:hover {
    opacity: 0.76;
  }
`;

export const Tailwind = () => {
  return <p className="bg-slate-900 text-pink-300">Tailwind Component</p>;
};
