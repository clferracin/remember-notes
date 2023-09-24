import { NoteContainer } from "./styles";
import { Tag } from "../Tag";

export interface Tag {
  id: string
  name: string
}

interface NoteProps {
  title: string
  tags?: Tag[]
}

export function Note({title, tags,  ...rest} : NoteProps) {
  return (
    <NoteContainer {...rest}>
      <h1>{title}</h1>

      {
      tags && 
      <footer>
        {
          tags.map( tag => {
            return (
              <Tag key={tag.id}title={tag.name} />
            )
          })
        }
      </footer>
      }
    </NoteContainer>
  )
}