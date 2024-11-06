import { HTMLInputTypeAttribute } from "react";

// Define the shape of the states here, remember to export them
export interface CountInterface {
  count: number;
  increaseCount: () => void;
  removeCount: () => void;
}
// Define the shape of the states here, remember to export them
export interface ICustomInput {
  label?: string;
  name?: string;
  type?: HTMLInputTypeAttribute;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
