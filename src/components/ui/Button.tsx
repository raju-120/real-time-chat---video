"use client"

import { FC } from "react";

interface ButtonProps {}

const Button: FC<ButtonProps> = () => {
    return (
    <button className="button text-bold font-2xl text-green-600">
        Click Here
    </button>);
}

export default Button;