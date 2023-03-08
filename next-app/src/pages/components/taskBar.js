import React, {useState} from "react";
import styled from "styled-components";
import TaskList from "./taskList";


const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  margin-top: 50px;
  padding: 20px 150px;
`
const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

const TaskInput = styled.input`
  margin-right: 10px;
  padding: 16px 28px;
  width: 940px;
  font-size: 18px;
  background: #FFFFFF;
  border: 1px solid #D0D5DD;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  &:hover {
    border: 1px solid #12B76A;
  }
`;

const CreateButton = styled.button`
  padding: 16px 28px;
  width: 224px;
  color: white;
  font-size: 18px;
  cursor: pointer;
  background: #12B76A;
  border: 1px solid #12B76A;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;

  &:hover {
    background-color: #16cc77;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 24px;
  margin-bottom: 10px;
`;
const FilterButton = styled.button`
  padding: 16px 28px;
  background: #FFFFFF;
  border: 1px solid #D0D5DD;
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  &:hover {
    border: 1px solid #12B76A;
  }
`;


export default function TaskBar() {

    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const handleInputChange = (event) => {
        setNewTask(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTask(newTask);
        setNewTask("");
    };

    const onAddTask = (taskName) => {
        setTasks([...tasks, { id: tasks.length + 1, name: taskName }]);
    };

    const handleItemDelete = (id) => {
        setTasks(tasks.filter((item) => item.id !== id));
    };

    const handleItemEdit = (id, newName) => {
        setTasks(
            tasks.map((item) => {
                if (item.id === id) {
                    return { ...item, name: newName };
                } else {
                    return item;
                }
            })
        );
    };

    return (
        <SearchWrapper>
            <SearchForm onSubmit={handleFormSubmit}>
                <TaskInput
                    type="text"
                    name="SearchBar"
                    placeholder="Write your task here..."
                    value={newTask}
                    onChange={handleInputChange}
                />
                <CreateButton type="submit">Create</CreateButton>
            </SearchForm>
            <FilterContainer>
                <FilterButton>All</FilterButton>
                <FilterButton>Completed</FilterButton>
                <FilterButton>Incompleted</FilterButton>
            </FilterContainer>
            <TaskList tasks={tasks} onItemDelete={handleItemDelete} onItemEdit={handleItemEdit}/>
        </SearchWrapper>
    );
}

