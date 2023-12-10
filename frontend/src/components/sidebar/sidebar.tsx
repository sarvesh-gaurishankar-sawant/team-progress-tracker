import React, { useState, useEffect } from "react";
import { ReactComponent as FullLogo } from '../../assets/svg/full-icon.svg';
import { ReactComponent as BoardLogo } from '../../assets/svg/board-icon.svg';
import { Button, Typography } from "@mui/material";
import '../../styles/styles.css';

interface Board {
    _id: string;
    name: string;
    columns: string[];
    tasks: any[];
}

interface BoardComponentProps {
    userId: string;
    isSidebarOpen: boolean;
    setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}


const Sidebar: React.FC<BoardComponentProps> = ({ userId, isSidebarOpen, setIsSidebarOpen }) => {
    const [boards, setBoards] = useState<Board[]>([]);
    const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const fetchBoards = async () => {
            try {
                const response = await fetch(`http://localhost:3001/boards/?userId=${userId}`);
                if (response.ok) {
                    const data = await response.json();
                    setBoards(data);
                } else {
                    throw new Error('Failed to fetch boards');
                }
            } catch (error) {
                console.error('Error fetching boards:', error);
            }
        };

        fetchBoards();
    }, [userId]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Set breakpoint as per your design
        };

        handleResize(); // Set initial width

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleButtonClick = (index: number) => {
        if (activeButtonIndex === index) {
            // Clicked on the already active button, toggle it off
            setActiveButtonIndex(null);
        } else {
            // Clicked on a different button, set it as active
            setActiveButtonIndex(index);
        }
    };

    const totalBoards = boards.length;


    return (
        <aside className={isSidebarOpen ? 'sidebar open' : 'sidebar'}>
        <div className={`fixed ${isMobile ? 'block' : 'flex'} flex-col bg-gray-800 ${isMobile ? 'w-3/5 h-screen' : 'h-screen w-1/5'} border border-gray-900`}>
        <div className={`fixed flex flex-col bg-gray-800 h-screen ${isMobile ? 'w-3/5 ' : 'w-1/5'}  border border-gray-900`}>
            <div className="h-screen">
                <div className="flex mx-auto mt-8">
                    <FullLogo className="mx-auto" />
                </div>

                <div className="flex flex-col mt-24">
                    <div className="w-full ">
                        <div className="text-center py-2 h-2 mb-10 uppercase text-slate-400 text-xs font-bold font-['Plus Jakarta Sans'] mx-auto tracking-[2.40px]">
                            all boards ({totalBoards})
                        </div>
                        {boards.map((board, index) => (
                            <button
                                key={index}
                                className={`w-full h-12 border border-gray-600 text-hm rounded-full rounded-l-none flex bg-purple-500 text-white uppercase items-center justify-center
                            ${
                                activeButtonIndex === index ? 'bg-purple-500 text-white' : 'bg-transparent text-gray-500'
                            } ${!isMobile ? 'hover:bg-gray-400': 'hover:bg-purple-500'} hover:text-white`}
                                onClick={() => handleButtonClick(index)}
                            >
                                <span className="">{board.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-10 text-center">
                    <button className="flex border border-gray-600 items-center justify-center h-12 w-full bg-[#625FC7] text-white rounded-full py-2 px-4 mx-auto hover:bg-purple-400">
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className={`mr-4 mt-[0.15rem] fill-mediumGrey group-hover:fill-purple   `}
                        >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <title></title>
                                <g id="Complete">
                                    <g id="add-square">
                                        <g>
                                            <rect
                                                data-name="--Rectangle"
                                                fill="none"
                                                height="20"
                                                id="_--Rectangle"
                                                rx="2"
                                                ry="2"
                                                stroke="#000000"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                width="20"
                                                x="2"
                                                y="2"
                                            ></rect>
                                            <line
                                                fill="none"
                                                stroke="#000000"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                x1="15.5"
                                                x2="8.5"
                                                y1="12"
                                                y2="12"
                                            ></line>
                                            <line
                                                fill="none"
                                                stroke="#000000"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                x1="12"
                                                x2="12"
                                                y1="15.5"
                                                y2="8.5"
                                            ></line>
                                        </g>
                                    </g>
                                </g>
                            </g>
                        </svg>
                        <div className="text-hm capitalize">Create New Board</div>
                    </button>
                </div>
            </div>
        </div>
        </div>
        </aside>
    );
};

export default Sidebar;
