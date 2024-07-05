import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          {" "}
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/Dandevcard.png" alt="imagem do perfil" />

          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input Placeholder="Nome" type="text" icon={FiUser} />
        <Input Placeholder="Email" type="text" icon={FiMail} />
        <Input Placeholder="Senha atual" type="password" icon={FiLock} />{" "}
        <Input Placeholder="Nova Senha" type="password" icon={FiLock} />
        <Button title="Enviar" />
      </Form>
    </Container>
  );
}
