import { ButtonTextContainer } from "./styles";

interface ButtonTextProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  isActive?: boolean
}

export function ButtonText({text, isActive = false, ...rest} : ButtonTextProps) {
  return (
    <ButtonTextContainer
      type="button"
      $isactive={isActive.toString()}
      {...rest}
    >
      {text}
    </ButtonTextContainer>
  )
}