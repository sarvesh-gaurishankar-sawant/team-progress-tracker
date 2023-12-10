import React, { useState, useEffect } from "react";
import { ReactComponent as FullLogo } from '../../assets/svg/full-icon.svg';
import { ReactComponent as BoardLogo } from '../../assets/svg/board-icon.svg';
import { Button, Typography } from "@mui/material";
import '../../styles/styles.css';
import PlusIcon from "../../icons/PlusIcon";
import { Link, NavLink } from "react-router-dom";
import { setSideBarFlag } from "../../store/flags/sideBarFlagSlice"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store"

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


const Sidebar: React.FC<BoardComponentProps> = ({ userId }) => {
    const [boards, setBoards] = useState<Board[]>([]);
    const [activeButtonIndex, setActiveButtonIndex] = useState<number | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    const dispatch = useDispatch<AppDispatch>();

    let isSidebarOpen: boolean = useSelector((state: RootState) => state.sideBarFlag.value);

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
                            <NavLink
                            key={index}
                            className={({ isActive }) => (
                              `w-full h-12 border border-gray-600 text-hm rounded-full rounded-l-none flex text-white uppercase items-center hover:bg-purple-500 justify-center ${isActive && 'bg-purple-500'}`
                            )}
                            to={board._id}
                          >
                            <span className="">{board.name}</span>
                          </NavLink>
                        ))}
                    </div>
                </div>

                <div className="absolute inset-x-0 bottom-10 text-center">
                    <button className="flex border border-gray-600 items-center justify-center h-12 w-full bg-[#625FC7] text-white rounded-full py-2 px-4 mx-auto hover:bg-purple-400">
                        <PlusIcon />
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
