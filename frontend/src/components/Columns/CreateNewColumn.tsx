import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Delete from '../../icons/Delete';
import { Board } from '../type';

interface NewBoardColumn {
  boardName: String;
  boardColumns: String[];
}

interface Props {
  boardData: Board;
}
export default function CreateNewColumn({ boardData }: Props) {
  
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


 // State to manage the inputs' values
 const [inputValues, setInputValues] = React.useState<string[]>([]);
 const [boardName, setBoardName] = React.useState("");

 // Function to handle changes in input values
 const handleInputChange = (index: number, value: string) => {
   const newValues: string[] = [...inputValues];
   newValues[index] = value;
   setInputValues(newValues);
 };

 // Function to add a new input
 const addInput = () => {
   setInputValues([...inputValues, '']);
 };

  // Function to remove an input
  const removeInput = (index: number) => {
    const newValues = [...inputValues];
    newValues.splice(index, 1);
    setInputValues(newValues);
  };

  function handleBoardNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBoardName(event.target.value)
  }

function handleSubmit(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    // submitToApi(formData)
}

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen} className="w-72 h-screen">
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm" PaperProps={{ style: { backgroundColor: 'transparent'}}}>
          <form className='bg-[#2B2C37] flex flex-col w-full rounded-lg px-4 py-8'>
                <h2 className='mb-4 text-white font-bold text-xl'>Edit Board</h2>
                <h3 className='mb-2 text-white font-bold'>Board Name</h3>
                <input
                    type="text"
                    name="boardname"
                    value={boardName}
                    className='mx-auto w-10/12 mb-4 rounded-sm px-3.5 py-2 bg-[#2B2C37] border-solid border-gray-500 border-2'
                    onChange={handleBoardNameChange}
                    required
                />
                <h3 className='mb-2 text-white font-bold'>Board Columns</h3>
                {inputValues.map((value, index) => (
                  <div key={index} className='mx-auto flex flex-row w-10/12 justify-between mb-3'>
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      className='rounded-sm px-3.5 py-2 w-10/12 bg-[#2B2C37] border-solid border-gray-500 border-2'
                      required
                    />
                    <button type='button' onClick={() => removeInput(index)}><Delete /></button>
                  </div>
                ))}
                <button className="bg-[#FFFFFF] text-[#635FC7] mx-auto w-10/12 mb-4 font-bold px-3.5 py-2 rounded-xl" onClick={addInput} type='button'>+ Add New Columns</button>
                <button className="bg-[#635FC7] mx-auto w-10/12 text-white font-bold px-3.5 py-2 rounded-xl" onClick={handleClose} type='submit'>Save Changes</button>
            </form>
      </Dialog>
    </React.Fragment>
  );
}