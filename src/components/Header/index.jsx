import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/Dandevcard.png" alt="imagem usuário" />
        <div>
          <span>Bem-vindo</span>
          <strong>Daniel Cardoso</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
