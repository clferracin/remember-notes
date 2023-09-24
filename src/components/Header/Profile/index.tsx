import { ProfileContainer } from "./styles";

export function Profile() {
  return (
    <ProfileContainer to='/profile'>
      <img 
        src="https://github.com/clferracin.png" 
        alt="foto do usuário" 
      />
      <div className="welcome">
        <span>Bem vindo,</span>
        <strong>Cesar Ferracin</strong>
      </div>

    </ProfileContainer>
  )
}