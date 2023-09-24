import React from "react";
import { TextAreaContainer } from "./styles";

interface TextAreaProps  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  value: string
}


export function TextArea({value, ...rest}: TextAreaProps) {
  return (
    <TextAreaContainer 
      {...rest}
    >
      {value}
    </TextAreaContainer>
  )
}