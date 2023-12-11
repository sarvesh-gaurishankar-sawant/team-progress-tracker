import { FetchData, FetchTasksinColumn} from "../analytics/FetchDataAnalytics";
import React, { useState, useEffect } from 'react';
import { Pie, Bar} from 'react-chartjs-2';
import { Chart, ArcElement, PieController, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, PieController, Tooltip, Legend);

export default function PieChart() {
  const boardId = '656b8344a83badbd99125a64';
  const column = 'Doing'

  const [columnData, setColumnData] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const fetchDataAndTasks = async () => {
      try {
        const columns = await FetchData(boardId);

        const columnTasksCounts: { [key: string]: number } = {};

        // Loop through each column name
        for (const columnName of columns) {
          const tasks = await FetchTasksinColumn(boardId, columnName);
          columnTasksCounts[columnName] = tasks.length;
        }

        setColumnData(columnTasksCounts);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchDataAndTasks();
  }, []);

  const chartData = {
    labels: Object.keys(columnData),
    datasets: [
      {
        label: 'Tasks Count',
        data: Object.values(columnData),
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderWidth: 1,
      },
    ],
  };

  console.log(columnData);

  return (
    <div style={{ width: '400px', height: '400px' }}>
    <Pie data={chartData} />
  </div>
  );
}