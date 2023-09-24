import { InputContainer } from "./styles";
import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
  icon?: string
}

export function Input({icon: Icon, ...rest}: InputProps) {
  return (
    <InputContainer>
      {Icon && <Icon size={20}/>}
      <input {...rest} />
    </InputContainer>
  )
}