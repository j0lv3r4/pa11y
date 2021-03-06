import { useContext } from "react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Block } from "./color-item";
import { PaletteContext } from "../components/palette-context";

const AddButton = styled.button`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: 2px dashed #ccc;
  cursor: pointer;
  border-radius: 18px;
`;

const Placeholder = ({ blockId, isButton }) => {
  const { blocks, dispatch } = useContext(PaletteContext);
  // const newId = `block-${blocks.length + 1}`;
  return (
    <Block bg="#eee" color="#111" minHeight="265.2px">
      {isButton && (
        <AddButton
          onClick={() =>
            dispatch({
              type: "ADD_BLOCK",
              payload: {
                blockId: newId,
                fg: "#333333",
                bg: "#eeeeee"
              }
            })
          }
        >
          <FontAwesomeIcon icon={faPlus} size="3x" />
        </AddButton>
      )}
    </Block>
  );
};

export default Placeholder;
