import React, { useState, useEffect } from "react";
import { ReactComponent as FullLogo } from '../../assets/svg/full-icon.svg';
import PlusIcon from "../../icons/PlusIcon";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store"
import CreateNewBoard from "../Boards/CreateNewBoard";
import DisplayCharts from "../../analytics/DisplayCharts";
import Board from "../Boards/Board";
import {  useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store"
import { BoardType } from "../type";

interface Board {
    _id: string;
    name: string;
    columns: string[];
    tasks: any[];
}



const Sidebar: React.FC = () => {
    const [boards, setBoards] = useState<Board[]>([]);
    const [activeBoardId, setActiveBoardId] = useState<string | null>(null); 

    let userId: string = useSelector((state: RootState) => state.singleUser.value);

    let isSidebarOpen: boolean = useSelector((state: RootState) => state.sideBarFlag.value);

    // const { boardId } = useParams<{ boardId: string }>();
    // console.log("boardId", boardId);

    const handleBoardClick = (boardId: string) => {
        setActiveBoardId(boardId); // Set the clicked board as active
    };

    console.log("activeBoardId", activeBoardId);

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

    const totalBoards = boards.length;


    return (
        <aside className={isSidebarOpen ? 'sidebar open' : 'sidebar'}>
            <div className={`fixed block sm:flex flex-col bg-gray-800 w-3/5 h-screen sm:h-screen sm:w-1/5 border border-gray-900`}>
                <div className={`fixed flex flex-col bg-gray-800 h-screen w-3/5 sm:w-1/5 border border-gray-900`}>
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
                                        onClick={() => handleBoardClick(board._id)}
                                    >
                                        <span >{board.name}</span>
                                    </NavLink>
                                ))}
                            </div>
                        </div>

                        <div className="absolute inset-x-0 bottom-10 text-center">
                            <button className="flex border border-gray-600 mb-8 items-center justify-center h-12 w-full bg-[#625FC7] text-white rounded-full py-2 px-4 mx-auto hover:bg-purple-400">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" className="w-6 h-6 mr-2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                                </svg>
                                {/* <DisplayCharts boardId=""}/> */}
                                <DisplayCharts />
                            </button>

                            <button className="flex border border-gray-600 items-center justify-center h-12 w-full bg-[#625FC7] text-white rounded-full py-2 px-4 mx-auto hover:bg-purple-400">
                                <CreateNewBoard />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
