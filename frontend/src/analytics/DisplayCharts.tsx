import { FetchData, FetchTasksinColumn } from "../analytics/FetchDataAnalytics";
import React, { useState, useEffect } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import {
    Chart, ArcElement, PieController, Tooltip, Legend, CategoryScale, LinearScale, BarElement, BarController, PointElement
    , LineElement, LineController
} from 'chart.js';
import { Modal, Button } from '@mui/material';
import { Line } from 'react-chartjs-2';


Chart.register(ArcElement, PieController, Tooltip, Legend, CategoryScale, LinearScale, BarElement, BarController, PointElement,
    LineElement, LineController);

    type TaskDueDates = { [key: string]: { [key: string]: string } };
    type TasksData = { [key: string]: number };
    
    interface DisplayChartsProps {
        boardId: string;
    }

    const DisplayCharts: React.FC<DisplayChartsProps> = ({ boardId }) => {
    // const boardId = '657766dcd6306c0036a67e44';

    const [columnData, setColumnData] = useState<{ [key: string]: number }>({});
    const [showModal, setShowModal] = useState(false);
    const [taskDueDates, setTaskDueDates] = useState<{ [key: string]: { [key: string]: string } }>({});
    const [tasks, setTasks] = useState({});

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
                const tasksDueDates: { [key: string]: { [key: string]: string } } = {};

                // Loop through each column name
                for (const columnName of columns) {
                    const tasks = await FetchTasksinColumn(boardId, columnName);
                    columnTasksCounts[columnName] = tasks.length;

                    // Store task due dates by column name and task title
                    tasks.forEach((task: { title: string | number; dueDate: Date; }) => {
                        if (!tasksDueDates[columnName]) {
                            tasksDueDates[columnName] = {};
                        }
                        // if (!tasksDueDates[columnName][task.title]) {
                        //     tasksDueDates[columnName][task.title] = []; // Initialize as an empty array if it doesn't exist
                        // }
                        const dueDate = new Date(task.dueDate);
                        const year = dueDate.getFullYear();
                        const month = dueDate.getMonth() + 1; // Month is zero-indexed, so adding 1
                        const day = dueDate.getDate();

                        const completeDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
                        tasksDueDates[columnName][task.title] = completeDate; // Append the due date to the list
                    });
                }
                setColumnData(columnTasksCounts);
                setTaskDueDates(tasksDueDates);
                setTasks(tasks);

                console.log(tasksDueDates);
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


    const [lineChartData, setLineChartData] = useState<{
        labels: string[];
        datasets: { label: string; data: number[] }[];
    }>({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        const datesCountMap: { [date: string]: { [column: string]: number } } = {};
    
        // Calculate task counts for each date and each column
        Object.entries(taskDueDates).forEach(([columnName, columnTasks]) => {
            Object.values(columnTasks).forEach(date => {
                if (!datesCountMap[date]) {
                    datesCountMap[date] = {};
                }
                if (!datesCountMap[date][columnName]) {
                    datesCountMap[date][columnName] = 0;
                }
                datesCountMap[date][columnName]++;
            });
        });
    
        const columns = Object.keys(taskDueDates);
    
        const sortedDates = Object.keys(datesCountMap).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
    
        const datasets = columns.map(column => ({
            label: column,
            data: sortedDates.map(date => datesCountMap[date][column] || 0),
        }));
    
        setLineChartData({
            ...lineChartData,
            labels: sortedDates,
            datasets,
        });
    }, [taskDueDates]);
    


    return (
        <div>
            <button onClick={handleShowModal} className="text-white">
            View Board's Insights
            </button>
            <Modal open={showModal} onClose={handleCloseModal} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: '50%', height: '80%', backgroundColor: '#fff', padding: '20px', overflow: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h1 style={{ color: '#000', marginBottom: '20px', textDecoration: 'underline' }}>Board Analytics</h1>

                    <hr style={{ width: '100%', borderTop: '1px solid #000' }} />


                    <div style={{ width: '100%', height: '50%' }}>
                        <h2 style={{ color: '#000', textAlign: 'center', marginTop: '10px', textDecoration: 'underline' }}>Task's Distribution according to status: Pie Chart</h2>
                        <div style={{ width: '100%', height: '90%', maxWidth: '100%' }}>
                            <Pie data={pieChartData} options={{ maintainAspectRatio: false }} />
                        </div>
                        <hr style={{ width: '100%', marginTop: '20px', marginBottom: '20px', borderTop: '1px solid #000' }} />
                    </div>

                    <div style={{ width: '100%', height: '50%' }}>
                        <h2 style={{ color: '#000', textAlign: 'center', marginTop: '40px', textDecoration: 'underline' }}>Count of each tasks under a status: Bar Graph</h2>
                        <div style={{ width: '100%', height: '90%', maxWidth: '100%' }}>
                            <Bar data={barChartData} options={{ maintainAspectRatio: false }} />
                        </div>
                        <hr style={{ width: '100%', marginTop: '20px', marginBottom: '20px', borderTop: '1px solid #000' }} />
                    </div>

                    <div style={{ width: '100%', height: '50%' }}>
                        <h2 style={{ color: '#000', textAlign: 'center', marginTop: '80px', textDecoration: 'underline' }}>
                            Tasks Due Over Time: Line Graph
                        </h2>
                        <div style={{ width: '100%', height: '90%', maxWidth: '100%' }}>
                            <Line data={lineChartData} options={{ maintainAspectRatio: false }} />
                        </div>
                        <hr style={{ width: '100%', marginTop: '20px', marginBottom: '20px', borderTop: '1px solid #000' }} />
                    </div>
                    <div style={{ marginTop: '120px' }}>
                        <Button variant="contained" onClick={handleCloseModal}>
                            Close
                        </Button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default DisplayCharts;