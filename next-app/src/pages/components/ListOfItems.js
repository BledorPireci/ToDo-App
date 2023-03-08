import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faTrashCan} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const ListWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-content: center;
  gap: 16px;
  margin-bottom: 10px;
  font-family: Poppins;
  
`;
const ListContent = styled.div`
  width: 872px;
  padding: 16px 28px;
  background: white;
  border: 1px solid #D0D5DD;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
`;
const EditWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;
const EditInput = styled.input`
  width: 865px;
  background: white;
  border: 1px solid red;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  font-size: 16px;
  padding-left: 15px;
  font-family: Poppins;
  
`
const EditButton = styled.button`
  padding: 16px 10px;
  width: 200px;
  background: #FFFFFF;
  border: 1px solid #D0D5DD;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  font-size: 15px;
  font-family: Poppins;
  &:hover {
    border: 1px solid #12B76A;
  }`;
const DeleteButton = styled.button`
  padding: 16px 28px;
  background: red;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: #e50000;
  }
`;
const SaveButton = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 16px 40px;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
`;
const CompleteTaskButton = styled.button`
  background-color: #3778ab;
  border: none;
  color: white;
  padding: 16px 40px;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
`
const CancelButton = styled.button`
  background-color: #ffff;
  border: 1px solid gray;
  color: white;
  padding: 16px 40px;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 8px;
`

const ListOfItems = ({ ListName, onItemDelete, onItemEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedName, setEditedName] = useState(ListName);
    const [isComplete, setIsComplete] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleInputChange = (event) => {
        setEditedName(event.target.value);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        onItemEdit(editedName);
    };

    const handleCompleteClick = () => {
        setIsComplete(true);
    };

    return (
        <ListWrapper>
            {isEditing ? (
                <EditWrapper>
                    <EditInput type="text" value={editedName} onChange={handleInputChange}/>
                    <SaveButton onClick={handleSaveClick}>Save</SaveButton>
                    <CompleteTaskButton onClick={handleCompleteClick}>Complete Task</CompleteTaskButton>
                </EditWrapper>
            ) : (
                <ListContent style={{ backgroundColor: isComplete ? "#ECFDF3" : "white" }}>
                    <span>{ListName}</span>
                </ListContent>
            )}
            {isEditing ? (
                <>
                </>
            ) : (
                <>
                    <EditButton onClick={handleEditClick}>Edit</EditButton>
                    <DeleteButton onClick={onItemDelete}>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </DeleteButton>
                </>
            )}
        </ListWrapper>
    );
};
export default ListOfItems;