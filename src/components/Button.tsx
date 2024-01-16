import React from "react";
// import type { FC } from 'react'

// 什么时候用 type、设么时候用 interface

const buttonTypes = ["primary", "default"] as const;

export type ButtonType = (typeof buttonTypes)[number];

export interface ButtonProps {
  type?: ButtonType;
}

export const Button: React.FC<ButtonProps> = () => {
  return <div>Button</div>;
};
