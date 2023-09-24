import { Logout } from "./Logout";
import { Profile } from "./Profile";
import { HeaderContainer } from "./styles";

export function Header () {
  return (
    <HeaderContainer>
      <Profile/>
      <Logout/>
    </HeaderContainer>
  )
}