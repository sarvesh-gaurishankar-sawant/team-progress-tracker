export async function FetchData(boardId: string): Promise<any> {
    try {
      const response = await fetch(`http://localhost:3001/boards/${boardId}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();

      const columnNames: string[] = data.columns;
      return columnNames;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  export async function FetchTasksinColumn(boardId: any, columnName: any): Promise<any> {
    try {
      const response = await fetch(`http://localhost:3001/tasks/getTasksByColumnNameAndBoard/${boardId}/${columnName}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      const data = await response.json();
      console.log('Data:', data);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    
  }
  

  