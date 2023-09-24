import { Link } from 'react-router-dom'
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { MemoItem } from "../../components/MemoItem";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/TextArea";
import { CreateMemorandumContainer, Form } from "./styles";

export function CreateMemorandum () {
  return (
    <CreateMemorandumContainer>
      <Header/>
      <main>
        <Form>
          <header>
            <h1>Novo memorandum</h1>
            <Link to='/'>voltar</Link>
          </header>
          <Input placeholder="Título"/>
          <TextArea placeholder="Observações" value=""/>
          <Section title="Links úteis">
            <MemoItem value="https://rocketseat.com.br"/>
            <MemoItem isNew placeholder="Novo link" />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              <MemoItem value="react"/>
              <MemoItem isNew placeholder="Nova tag" />
            </div>
          </Section>
          <Button>Salvar</Button>
        </Form>
      </main>
    </CreateMemorandumContainer>
  )
}