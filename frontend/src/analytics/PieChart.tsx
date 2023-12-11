import { FetchData, FetchTasksinColumn } from "../analytics/FetchDataAnalytics";
import React, { useState, useEffect } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart, ArcElement, PieController, Tooltip, Legend, CategoryScale, LinearScale, BarElement, BarController, PointElement 
    , LineElement, LineController} from 'chart.js';
import { VictoryChart, VictoryLine, VictoryLegend, VictoryAxis } from 'victory';
import { Modal, Button } from '@mui/material';
import { Line } from 'react-chartjs-2';
import {  } from 'chart.js';

Chart.register(ArcElement, PieController, Tooltip, Legend, CategoryScale, LinearScale, BarElement, BarController, PointElement, 
    LineElement, LineController);

export default function PieChart() {
    const boardId = '657766dcd6306c0036a67e44';
    const column = 'test1'

    const [columnData, setColumnData] = useState<{ [key: string]: number }>({});
    const [showModal, setShowModal] = useState(false);
    const [taskDueDates, setTaskDueDates] = useState<{ [key: string]: { [key: string]: string[] } }>({});

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleShowModal = () => {
        setShowModal(true);
    };

    useEffect(() => {
        const fetchDataAndTasks = async () => {
            try {
                const columns = await FetchData(boardId);

                const columnTasksCounts: { [key: string]: number } = {};
                const tasksDueDates: { [key: string]: { [key: string]: string[] } } = {};

                // Loop through each column name
                for (const columnName of columns) {
                    const tasks = await FetchTasksinColumn(boardId, columnName);
                    columnTasksCounts[columnName] = tasks.length;

                    // Store task due dates by column name and task title
                    tasks.forEach((task: { title: string | number; dueDate: Date; }) => {
                        if (!tasksDueDates[columnName]) {
                            tasksDueDates[columnName] = {};
                        }
                        if (!tasksDueDates[columnName][task.title]) {
                            tasksDueDates[columnName][task.title] = []; // Initialize as an empty array if it doesn't exist
                        }
                        const dueDate = new Date(task.dueDate);
                        const year = dueDate.getFullYear();
                        const month = dueDate.getMonth() + 1; // Month is zero-indexed, so adding 1
                        const day = dueDate.getDate();

                        const completeDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
                        tasksDueDates[columnName][task.title].push(completeDate); // Append the due date to the list
                    });
                }
                setColumnData(columnTasksCounts);
                setTaskDueDates(tasksDueDates);

                // console.log(tasksDueDates);
            }
            catch (error) {
                console.error('Error:', error);
            }
        }
        fetchDataAndTasks();
    }, []);


    const generateRandomColorPalette = (count: number): string[] => {
        const palette: string[] = [];
        for (let i = 0; i < count; i++) {
            const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
                Math.random() * 256
            )}, ${Math.floor(Math.random() * 256)}, 0.6)`;
            palette.push(color);
        }
        return palette;
    };


    const pieChartData = {
        labels: Object.keys(columnData),
        datasets: [
            {
                label: 'Tasks Count',
                data: Object.values(columnData),
                backgroundColor: generateRandomColorPalette(Object.keys(columnData).length),
                borderWidth: 1,
            },
        ],
    };

    const barChartData = {
        labels: Object.keys(columnData),
        datasets: [
            {
                label: 'Tasks Count',
                data: Object.values(columnData),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderWidth: 1,
            },
        ],
    };


    

    return (
        <div>
            <Button variant="contained" onClick={handleShowModal}>
                Open Modal
            </Button>
            <Modal open={showModal} onClose={handleCloseModal} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '50%', height: '50%', backgroundColor: '#fff', padding: '20px', overflow: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 style={{ color: '#000', marginBottom: '20px', textDecoration: 'underline' }}>Board Analytics</h2>

                    <div style={{ width: '100%', height: '50%' }}>
                        <h2 style={{ color: '#000', textAlign: 'center', marginTop: '10px', textDecoration: 'underline' }}>Pie Chart</h2>
                        <div style={{ width: '100%', height: '90%', maxWidth: '100%' }}>
                            <Pie data={pieChartData} options={{ maintainAspectRatio: false }} />
                        </div>
                        <hr style={{ width: '100%', marginTop: '20px', marginBottom: '20px', borderTop: '1px solid #000' }} />
                    </div>

                    <div style={{ width: '100%', height: '50%' }}>
                        <h2 style={{ color: '#000', textAlign: 'center', marginTop: '10px', textDecoration: 'underline' }}>Bar Graph</h2>
                        <div style={{ width: '100%', height: '90%', maxWidth: '100%' }}>
                            <Bar data={barChartData} options={{ maintainAspectRatio: false }} />
                        </div>
                        <hr style={{ width: '100%', marginTop: '20px', marginBottom: '20px', borderTop: '1px solid #000' }} />
                    </div>
                </div>
            </Modal>
        </div>
    );
}







{/* <Modal open={showModal} onClose={handleCloseModal} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '50%', height: '50%', backgroundColor: '#fff', padding: '20px', overflow: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div>
            <h2 style={{ color: '#000' }}>Your Task's Distribution according to status: Pie Chart</h2>
            <Pie data={pieChartData}  />
          </div>

          <div style={{ marginTop: '20px' }}>
            <h2 style={{ color: '#000' }}>Count of each tasks under a status: Bar Graph</h2>
            <Bar data={barChartData}/>
          </div>
        </div>
      </Modal> */}