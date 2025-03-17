import React from "react";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  isActive: boolean;
  className?: string;
}
// export default function Button({ children, isActive, onClick }) {
// export default function Button({ children, isActive, ...props }: Props) {
//   export default function Button({ children, isActive, onClick }:ButtonProps) {
// const Button: React.FC<ButtonProps> = ({ children, onClick, isActive
//                                        }) => {
const Button: React.FC<ButtonProps> = ({ children, isActive, ...props
                                       }) => {
  // console.log(children)
  // console.log(props)
  //this way allows to many different standard props like "onClick", "disabled" and more
  // const classActive = isActive ? "button active" : "button";

  return (
    // <button className={isActive ? "button active" : "button"} onClick={onClick}>
    // <button className={isActive ? "button active" : "button"} {onClick, children}>
    //   {children}
    // </button>
    //   <button className={isActive ? "button active" : "button"} onClick={onClick}>
    //     {children}
    //   </button>
    <button  className={`${isActive ? "border-primary text-primary" : ""} px-8 py-3 border rounded my-4 hover:border-primary hover:text-primary transition-all`} {...props}>
      {children}
    </button>
  );
}
export default Button
