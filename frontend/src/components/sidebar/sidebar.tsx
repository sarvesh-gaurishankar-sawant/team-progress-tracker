import React, { useState, useEffect } from "react";
import {ReactComponent as FullLogo} from '../../assets/svg/full-icon.svg';
import {ReactComponent as BoardLogo} from '../../assets/svg/board-icon.svg';

interface Board {
    _id: string;
    name: string;
    columns: string[];
    tasks: any[]; 
  }


interface BoardComponentProps {
  userId: string;
}

const BoardComponent: React.FC<BoardComponentProps> = ({ userId }) => {
  const [boards, setBoards] = useState<Board[]>([]);

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

  return (
    <div>
      <h2>Boards</h2>
      <ul>
        {boards.map((board) => (
          <li key={board._id}>
            <h3>{board.name}</h3>
            <ul>
              {board.columns.map((column, index) => (
                <li key={index}>{column}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardComponent;