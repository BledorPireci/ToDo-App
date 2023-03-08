import styled from "styled-components";
import {useState} from "react";
import ListOfItems from "./ListOfItems";
import Popup from "reactjs-popup";
import trashCan from '.././assets/Featured-icon.png'
import Image from "next/image";

const Wrapper = styled.div`
  backdrop-filter: blur(4px);
  background: rgba(196, 196, 196, 0.6);
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
`;

const PopupCard = styled.div`
  width: 400px;
  padding: 20px;
  background: #FFFFFF;
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  border-radius: 12px;
  backdrop-filter: blur(5px);
`;
const PopupWrapper = styled.div`
  
`;
const PopupTitle = styled.h1`
  font-weight: 500;
  font-size: 18px;
  color: #101828;
  font-family: Poppins;
`;
const PopupContent = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #667085;
  font-family: Poppins;

`;
const ButtonWrapper = styled.div`
  display: flex;
  flex: 1 1 50%;
  gap: 10px;
`
const ConfirmBtn = styled.button`
  padding: 10px 18px;
  width: 100%;
  background: #D92D20;
  border: 1px solid #D92D20;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  color: white;
  &:hover {
    background: #e50000;
  }
  `;
const DeclineBtn = styled.button`
  padding: 10px 18px;
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #D0D5DD;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  &:hover{
    border: 1px solid gray;
  }
`;

const TaskList = ({ tasks, onItemDelete,onItemEdit }) => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedItemId, setSelectedItemId] = useState(null);

    const handleDeleteClick = (id) => {
        setSelectedItemId(id);
        setShowPopup(true);
    };

    const handleConfirmDelete = () => {
        onItemDelete(selectedItemId);
        setShowPopup(false);
    };
    const handleItemEdit = (id, newName) => {
        onItemEdit(id, newName);
    };

    return (
        <>
            {tasks.map((item) => (
                <ListOfItems
                    key={item.id}
                    ListName={item.name}
                    onItemDelete={() => handleDeleteClick(item.id)}
                    onItemEdit={(newName) => handleItemEdit(item.id, newName)}
                />
            ))}

            <Wrapper style={{ display: showPopup ? "block" : "none" }} />
            <Popup open={showPopup} onClose={() => setShowPopup(false)}>
                <PopupCard>
                    <PopupWrapper>
                        <Image src={trashCan} />
                        <PopupTitle>Delete Task</PopupTitle>
                        <PopupContent>Are you sure you want to delete this task? This action cannot be undone.</PopupContent>
                        <ButtonWrapper>
                            <DeclineBtn onClick={() => setShowPopup(false)}>Cancel</DeclineBtn>
                            <ConfirmBtn onClick={handleConfirmDelete}>Delete</ConfirmBtn>
                        </ButtonWrapper>
                    </PopupWrapper>
                </PopupCard>
            </Popup>
        </>
    );
};

export default TaskList



