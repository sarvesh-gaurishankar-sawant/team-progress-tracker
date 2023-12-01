import React from "react";

const Sidebar = () => {
  return (
    <div className="w-[261px] h-[1024px] relative">
    <div className="w-[260px] h-[1024px] left-0 top-0 absolute bg-gray-800"></div>
    <div className="w-[235px] h-12 left-[13px] top-[880px] absolute">
        <div className="w-[235px] h-12 left-0 top-0 absolute bg-zinc-800 rounded-md"></div>
        <div className="w-[120.67px] h-5 left-[57px] top-[14px] absolute">
            <div className="w-10 h-5 left-[42px] top-0 absolute">
                <div className="w-10 h-5 left-0 top-0 absolute bg-indigo-500 rounded-xl"></div>
                <div className="w-3.5 h-3.5 left-[23px] top-[3px] absolute bg-white rounded-full"></div>
            </div>
            <img className="w-[15px] h-[15px] left-[105.67px] top-[2.67px] absolute" src="https://via.placeholder.com/15x15" />
            <img className="w-[18.33px] h-[18.33px] left-0 top-[1px] absolute" src="https://via.placeholder.com/18x18" />
        </div>
    </div>
    <div className="w-60 h-12 left-0 top-[944px] absolute">
        <div className="w-60 h-12 left-0 top-0 absolute rounded-tr-[100px] rounded-br-[100px]"></div>
        <div className="w-[122px] h-[19px] left-[24px] top-[14px] absolute justify-center items-end gap-2.5 inline-flex">
            <img className="w-[18px] h-4" src="https://via.placeholder.com/18x16" />
            <div className="text-slate-400 text-[15px] font-bold font-['Plus Jakarta Sans']">Hide Sidebar</div>
        </div>
    </div>
    <div className="w-px h-[1024px] left-[260px] top-0 absolute bg-gray-700"></div>
    <div className="w-60 h-[226px] left-0 top-[112px] absolute">
        <div className="w-60 h-12 left-0 top-[34px] absolute">
            <div className="w-60 h-12 left-0 top-0 absolute bg-indigo-500 rounded-tr-[100px] rounded-br-[100px]"></div>
            <div className="w-[148px] h-[19px] pr-px left-[24px] top-[14px] absolute justify-center items-end gap-3 inline-flex">
                <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                <div className="text-white text-[15px] font-bold font-['Plus Jakarta Sans']">Platform Launch</div>
            </div>
        </div>
        <div className="w-60 h-12 left-0 top-[82px] absolute">
            <div className="w-60 h-12 left-0 top-0 absolute rounded-tr-[100px] rounded-br-[100px]"></div>
            <div className="w-[136px] h-[19px] left-[24px] top-[14px] absolute justify-center items-end gap-3 inline-flex">
                <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                <div className="text-slate-400 text-[15px] font-bold font-['Plus Jakarta Sans']">Marketing Plan</div>
            </div>
        </div>
        <div className="w-60 h-12 left-0 top-[130px] absolute">
            <div className="w-60 h-12 left-0 top-0 absolute rounded-tr-[100px] rounded-br-[100px]"></div>
            <div className="w-[100px] h-[19px] pr-px left-[24px] top-[14px] absolute justify-center items-end gap-3 inline-flex">
                <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                <div className="text-slate-400 text-[15px] font-bold font-['Plus Jakarta Sans']">Roadmap</div>
            </div>
        </div>
        <div className="w-60 h-12 left-0 top-[178px] absolute">
            <div className="w-60 h-12 left-0 top-0 absolute rounded-tr-[100px] rounded-br-[100px]"></div>
            <div className="w-[175px] h-[19px] left-[24px] top-[14px] absolute justify-center items-end gap-3 inline-flex">
                <img className="w-4 h-4" src="https://via.placeholder.com/16x16" />
                <div className="text-indigo-500 text-[15px] font-bold font-['Plus Jakarta Sans']">+ Create New Board</div>
            </div>
        </div>
        <div className="left-[24px] top-0 absolute text-slate-400 text-xs font-bold font-['Plus Jakarta Sans'] tracking-[2.40px]">ALL BOARDS (3)</div>
    </div>
    <div className="w-[152.53px] h-[25.22px] left-[26px] top-[32.78px] absolute">
        <img className="w-[112.77px] h-[24.61px] left-[39.76px] top-0 absolute" src="https://via.placeholder.com/113x25" />
        <div className="w-6 h-[25px] left-0 top-[0.22px] absolute">
            <div className="w-1.5 h-[25px] left-0 top-0 absolute bg-indigo-500 rounded-sm"></div>
            <div className="w-1.5 h-[25px] left-[9px] top-0 absolute opacity-75 bg-indigo-500 rounded-sm"></div>
            <div className="w-1.5 h-[25px] left-[18px] top-0 absolute opacity-50 bg-indigo-500 rounded-sm"></div>
        </div>
    </div>
</div>
  );
};

export default Sidebar;