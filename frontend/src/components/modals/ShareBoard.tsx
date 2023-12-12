import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import * as React from 'react';
import { useSelector } from "react-redux";
import { RootState } from "../../store/store"
import { BoardType } from "../../components/type";
import Swal from 'sweetalert2';



async function FetchData(userEmail: string): Promise<any> {
    try {
        const response = await fetch(`http://localhost:3001/users/email/${userEmail}`);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }

}


async function UpdateUserData(userData: any, userID: string): Promise<any> {
    try {
        const response = await fetch(`http://localhost:3001/users/${userID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        console.log('Data:', data);

        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }

}

const ShareBoardModal: React.FC = () => {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);

    };

    const emptyBoard: BoardType = {
        columns: [],
        name: "",
        tasks: [],
        _id: ""
    }

    let board: BoardType = useSelector((state: RootState) => state.activeBoard.value) || emptyBoard;
    let boardId: string = board._id;


    const handleSubmit = async () => {
        setLoading(true);
        try {
            // Fetch initial user details based on email
            const userData = await FetchData(email);
    
            // Modify the boards in the response by adding the current board id to it
            if (userData && userData.boards) {
                const updatedBoards = [...userData.boards, boardId];

                // Update the user data with the modified 'boards' array
                const updatedUserData = { ...userData, boards: updatedBoards };

                console.log('Updated user data:', updatedUserData);
    
                // Hit another endpoint with the updated user data
                const secondResponse = await UpdateUserData(updatedUserData, userData._id);
                console.log('Updated user data:', secondResponse);

                if (secondResponse) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success!',
                        text: 'Data updated successfully!',
                    });
                }
            }
        } catch (error) {
            // Handle error if any API call fails
            console.error('Error:', error);
            // Display an error message using SweetAlert if the API call fails
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });
        }
        setLoading(false);
        handleClose(); // Close the modal after the API call
    };
    


    return (
        <React.Fragment>
            <button onClick={handleOpen} className="text-white">
                Team up with fellow users
            </button>
            <Dialog
                open={open}
                fullWidth
                maxWidth="sm"
                PaperProps={{ style: { backgroundColor: 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' } }}
            >
                <form className='bg-[#2B2C37] flex flex-col w-full rounded-lg px-4 py-8'>
                    <h2 className='mb-4 text-white font-bold text-xl text-center'>Share the board with another user</h2>
                    <h3 className='mb-2 text-white font-bold text-center'>User's Email Address</h3>
                    <input
                        type="email"
                        name="useremail"
                        className='mx-auto w-10/12 mb-4 rounded-sm px-3.5 py-2 bg-[#2B2C37] border-solid border-gray-500 border-2 text-white'
                        required
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                        className="bg-[#635FC7] mx-auto w-10/12 text-white font-bold px-3.5 py-2 rounded-xl"
                        type='button'
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Share Board'}
                    </button>
                </form>
            </Dialog>
        </React.Fragment>
    );
};

export default ShareBoardModal;
