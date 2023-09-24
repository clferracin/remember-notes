import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { FiPlus, FiSearch } from 'react-icons/fi'
import { HomeContainer, Brand, Menu, Search, Content, NewNote  } from "./styles";
import { Input } from "../../components/Input";
import { Note } from "../../components/Note";
import { Section } from "../../components/Section";

export function Home() {

  return (
    <HomeContainer>

      <Brand>
        <h1>Memorandum</h1>
      </Brand>

      <Header/>

      <Menu>
        <li><ButtonText text="Todos" isActive /></li>
        <li><ButtonText text="Frontend" /></li>
        <li><ButtonText text="React" /></li>
        <li><ButtonText text="Node" /></li>
      </Menu>

      <Search>
        <Input placeholder='Pesquisar pelo título' icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note 
            title="React Modal" 
            tags={ [
              {id: '1', name: 'React'}
            ] } 
          />
          <Note 
            title="Exemplo de Middleware" 
            tags={ [
              {id: '2', name: 'express'},
              {id: '3', name: 'nodejs'}
            ] } 
          />
        </Section>
      </Content>

      <NewNote to='/new'>
        <FiPlus/>
        Criar nota
      </NewNote>

    </HomeContainer>
  )
}