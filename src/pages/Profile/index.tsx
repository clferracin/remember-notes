import { Link } from 'react-router-dom'
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Avatar, Form, ProfileContainer } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

export function Profile() {
  return (
    <ProfileContainer>
      <header>
        <Link to="/">
          <FiArrowLeft/>
        </Link>
      </header>
      <Form>
        <Avatar>
          <img 
            src="https://github.com/clferracin.png" 
            alt="Foto do usuário" 
          />
          <label htmlFor="avatar">
            <FiCamera/>
            <input 
              id="avatar"
              type="file"
            />
          </label>
        </Avatar>
        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />
        <Input
          placeholder="Email"
          type="text"
          icon={FiMail}
        />
        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />     
        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />        
        <Button>Salvar</Button>              
      </Form>
    </ProfileContainer>
  )
}