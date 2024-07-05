import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import {Button} from "../../components/Button"
import { Link } from "react-router-dom";


export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h2> Criar Nota</h2>
            <Link to="/">
            voltar
            </Link>
          </header>
          <Input placeholder="Titulo" />
          <Textarea placeholder="Observações" />
          <Section title="Links úteis">
            <NoteItem value="www.google.com.br" />
            <NoteItem isNew placeholder="Novo Link" />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>
          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>
  );
}
