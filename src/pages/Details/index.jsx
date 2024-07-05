import { Container, Links, Content } from "./style";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota" />
          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime sunt
            veritatis doloribus placeat, veniam ratione iusto natus, voluptatum
            esse harum dignissimos cupiditate asperiores qui atque quo minus ex,
            saepe recusandae! eritatis doloribus placeat, veniam ratione iusto
            natus, voluptatum esse harum dignissimos cupiditate asperiores qui
            atque quo minus ex, saepe recusandae!
          </p>
          <Section title="links ulteis">
            <Links>
              <li>
                <a href="#">Https://www.rocketseat.com</a>
              </li>
              <li>
                <a href="#">Https://www.rocketseat.com</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="Node" />
          </Section>

          <Button title="voltar" />
        </Content>
      </main>
    </Container>
  );
}
