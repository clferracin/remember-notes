import { ButtonContainer } from "./styles";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean
  children: React.ReactNode
}

export function Button ({loading=false, children, ...rest}:ButtonProps) {
  return (
    <ButtonContainer 
      type="button" 
      disabled={loading}
      {...rest}
    >
      {loading? 'Carregando...': children}
    </ButtonContainer>
  )
}