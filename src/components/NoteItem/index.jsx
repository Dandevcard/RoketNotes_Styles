import { Container } from "./styles";
import { FiPlus, FiX } from "react-icons/fi";

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input
      placeholder=""
        type="text"
        name=""
        id=""
        value={value}
        //readOnly: somente leitura, se for um item adicionado n deixamos editar
        readOnly={!isNew}
        {...rest}
      />
      <button 
      type="button" 
      onClick={onClick}
      className={isNew ? "button-add" : "button-delete"}
      >
      {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
