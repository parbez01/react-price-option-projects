import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {

    const mathMarksData = [
        { id: 1, studentName: "John", mathMarks: 85 },
        { id: 2, studentName: "Alice", mathMarks: 78 },
        { id: 3, studentName: "Bob", mathMarks: 92 },
        { id: 4, studentName: "Emily", mathMarks: 64 },
        { id: 5, studentName: "David", mathMarks: 70 },
        { id: 6, studentName: "Sarah", mathMarks: 89 },
        { id: 7, studentName: "Michael", mathMarks: 76 },
        { id: 8, studentName: "Olivia", mathMarks: 95 },
        { id: 9, studentName: "Daniel", mathMarks: 88 },
        { id: 10, studentName: "Sophia", mathMarks: 72 }
      ];
      
    

    return (
        <div>
            <LChart width={400} height={400} data={mathMarksData}>
                <Line dataKey="mathMarks"></Line>
            </LChart>
        </div>
    );
};

export default LineChart;