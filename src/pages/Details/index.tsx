import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { DetailsContainer, Links, MainContentContainer } from "./styles";

export function Details() {
  return (
    <DetailsContainer>
      <Header/>
      <main>
        <MainContentContainer>
          <ButtonText text="Excluir nota"/>
          <h1>
            Introdução ao React
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            Aperiam, quibusdam. Eius perferendis facere minus rerum ipsum vitae, 
            inventore quaerat illum, dicta doloribus, similique tempora ipsa accusamus 
            culpa dolor aut commodi? Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Voluptatem earum ex deleniti optio inventore at ducimus commodi unde molestiae 
            tempore nesciunt fugiat quibusdam nihil temporibus aliquid quidem, dicta 
            neque cupiditate?
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="#">
                  https://www.rocketseat.com.br/
                </a>
              </li>
              <li>
                <a href="#">
                  https://www.rocketseat.com.br/
                </a>
              </li>
            </Links>
          </Section>
          <Section title="Marcadores">
              <Tag title="express"/>
              <Tag title="node"/>
          </Section>
          <Button>Voltar</Button>
        </MainContentContainer>
      </main>
    </DetailsContainer>
  )
}