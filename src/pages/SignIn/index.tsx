import { Link } from 'react-router-dom'
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Background, FormContainer, SignInContainer } from "./styles";
import {FiMail, FiLock} from 'react-icons/fi'

export function SignIn() {
  return (
    <SignInContainer>
      <FormContainer>
        <h1>Memorandum</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Faça seu login</h2>
          <Input 
            placeholder="E-mail"
            type="text"
            icon={FiMail}
          />
          <Input 
            placeholder="Senha"
            type="password"
            icon={FiLock}
          />
          <Button>
            Entrar
          </Button>

          <Link to='/signup'>Criar conta</Link>
      </FormContainer>
      <Background/>
    </SignInContainer>
  )
}