import React from "react";
import {ReactComponent as FullLogo} from '../../assets/svg/full-icon.svg';
import {ReactComponent as BoardLogo} from '../../assets/svg/board-icon.svg';


const Sidebar: React.FC = () => {
    return (
        <div className="flex flex-col h-screen items-start justify-between overflow-x-hidden border-r border-linesLight bg-gray-800 px-6 py-4 dark:border-linesDark dark:bg-darkGrey w-[18.75rem]">
        <div className="">
            {/* LOGO SVG */}
            <FullLogo className="mt-[2rem] ml-[1rem]"/>
            <div className="mt-[3.375rem] relative">
                <div className="pb-5 text-hs uppercase text-slate-400 text-xs font-bold font-['Plus Jakarta Sans'] tracking-[2.40px]">
                    all boards (Demo Number) 
                    {/* TODO: Add Number of Boards in a user */}
                </div>

                {/*TODO: Combine both Declarations to fetch boards from backend and then style it */}
                <div className="-ml-[3.1rem] max-h-[calc(100vh-21rem)] overflow-y-auto overflow-x-hidden ">
                        <div className="justify-between group flex h-10 w-[16.5rem]  pl-14 capitalize w-[19rem] h-12 bg-indigo-500 rounded-tr-[100px] rounded-br-[100px]">
                            <BoardLogo className={`mr-4 h-12 w-5 fill-white mt-[0.75rem]`}/>
                            <span className="... mt-[0.5rem] w-[200px] truncate text-ellipsis text-left text-white text-[15px] font-bold font-['Plus Jakarta Sans']">
                                Test Board Name
                                {/* TODO: Fetch board */}
                            </span>
                        </div>
                </div>
                <div className="-ml-[3.1rem] max-h-[calc(100vh-21rem)] overflow-y-auto overflow-x-hidden ">
                        <div className="justify-between group flex h-12 w-[16.5rem]  pl-14 capitalize w-[19rem] h-12 rounded-tr-[100px] rounded-br-[100px]">
                            <BoardLogo className={`mr-4 mt-[0.12rem] h-4 w-5 fill-grey mt-[0.75rem]`}/>
                            <span className="... mt-[0.75rem] w-[200px] truncate text-ellipsis text-left text-slate-400 text-[15px] font-bold font-['Plus Jakarta Sans']">
                                Test Board Name
                                {/* TODO: Fetch board */}
                            </span>
                        </div>
                </div>
                <div className="group -ml-[3.1rem] flex  w-[16.5rem] pl-14  w-[19rem]">
                    <svg
                        width="16"
                        height="16"
                        className={`mr-4 mt-[0.15rem] h-4 w-4 fill-purple  `}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 2.889A2.889 2.889 0 0 1 2.889 0H13.11A2.889 2.889 0 0 1 16 2.889V13.11A2.888 2.888 0 0 1 13.111 16H2.89A2.889 2.889 0 0 1 0 13.111V2.89Zm1.333 5.555v4.667c0 .859.697 1.556 1.556 1.556h6.889V8.444H1.333Zm8.445-1.333V1.333h-6.89A1.556 1.556 0 0 0 1.334 2.89V7.11h8.445Zm4.889-1.333H11.11v4.444h3.556V5.778Zm0 5.778H11.11v3.11h2a1.556 1.556 0 0 0 1.556-1.555v-1.555Zm0-7.112V2.89a1.555 1.555 0 0 0-1.556-1.556h-2v3.111h3.556Z" />
                    </svg>
                    <div className="text-hm capitalize text-purple">
                        +Create New Board
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-4 tablet:mt-0 ">
            <div className="group -ml-[3.1rem] mt-2 hidden pl-14  tablet:flex tablet:w-[16.5rem] desktop:w-[19rem] ">
                <svg
                    width="18"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`mr-4 mt-[0.15rem] fill-mediumGrey group-hover:fill-purple   `}
                >
                    <path d="M8.522 11.223a4.252 4.252 0 0 1-3.654-5.22l3.654 5.22ZM9 12.25A8.685 8.685 0 0 1 1.5 8a8.612 8.612 0 0 1 2.76-2.864l-.86-1.23A10.112 10.112 0 0 0 .208 7.238a1.5 1.5 0 0 0 0 1.524A10.187 10.187 0 0 0 9 13.75c.414 0 .828-.025 1.239-.074l-1-1.43A8.88 8.88 0 0 1 9 12.25Zm8.792-3.488a10.14 10.14 0 0 1-4.486 4.046l1.504 2.148a.375.375 0 0 1-.092.523l-.648.453a.375.375 0 0 1-.523-.092L3.19 1.044A.375.375 0 0 1 3.282.52L3.93.068a.375.375 0 0 1 .523.092l1.735 2.479A10.308 10.308 0 0 1 9 2.25c3.746 0 7.031 2 8.792 4.988a1.5 1.5 0 0 1 0 1.524ZM16.5 8a8.674 8.674 0 0 0-6.755-4.219A1.75 1.75 0 1 0 12.75 5v-.001a4.25 4.25 0 0 1-1.154 5.366l.834 1.192A8.641 8.641 0 0 0 16.5 8Z" />
                </svg>
                Hide Sidebar
            </div>
        </div>
    </div>
    );
};

export default Sidebar;
