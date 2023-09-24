import { Link } from 'react-router-dom'
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Background, FormContainer, SignUpContainer } from "./styles";
import {FiMail, FiLock, FiUser} from 'react-icons/fi'

export function SignUp() {
  return (
    <SignUpContainer>
      <Background/>
      <FormContainer>
        <h1>Memorandum</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis.</p>

        <h2>Crie sua conta</h2>
          <Input 
            placeholder="Nome"
            type="text"
            icon={FiUser}
          />
          <Input 
            placeholder="E-mail"
            type="email"
            icon={FiMail}
          />
          <Input 
            placeholder="Senha"
            type="password"
            icon={FiLock}
          />
          <Button>
            Cadastrar
          </Button>

          <Link to='/'>Voltar para o login</Link>
      </FormContainer>
    </SignUpContainer>
  )
}