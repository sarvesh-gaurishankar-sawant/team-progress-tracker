import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import * as React from 'react';



const ShareBoardModal: React.FC = () => {

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <button onClick={handleOpen} className="text-white">
            Team up with fellow users
            </button>
            <Dialog open={open} fullWidth maxWidth="sm" PaperProps={{ style: { backgroundColor: 'transparent' } }} >
                <form className='bg-[#2B2C37] flex flex-col w-full rounded-lg px-4 py-8'>
                    <h2 className='mb-4 text-white font-bold text-xl text-center'>Share the board with another user</h2>
                    <h3 className='mb-2 text-white font-bold ml-12'>User's Email Address</h3>
                    <input
                        type="email"
                        name="useremail"
                        placeholder="Enter user's email address"
                        className='mx-auto w-10/12 mb-4 rounded-sm px-3.5 py-2 bg-[#2B2C37] border-solid border-gray-500 border-2 text-white'
                        required
                    />
                    <button className="bg-[#635FC7] mx-auto w-10/12 text-white font-bold px-3.5 py-2 rounded-xl" type='submit'>Share Board</button>
                </form>
            </Dialog>
        </React.Fragment>
    );
};

export default ShareBoardModal;
