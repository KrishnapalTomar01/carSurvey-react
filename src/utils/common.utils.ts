export const calculatePercentage = (value: number, total: number): number => {
    let calcValue = 0;
    if(total > 0)
        calcValue = value / total * 100;
    return Number(calcValue.toFixed(2));
}

export const borderColors = ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'];

export const backgroundColors = ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)'];
    
export const backgroundColorsStack = ["#22aa99", "#994499", "#316395", "#109618", "#66aa00", "#990099", "#dc3912", "#3366cc", "#dd4477"];