function solution(D) {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const newDict = {};

  for (const date in D) {
    const dayIndex= new Date(date).getDay();
    const dayOfWeek = daysOfWeek[dayIndex];
    
    newDict[dayOfWeek] = (newDict[dayOfWeek] || 0) + D[date];
  }

  return newDict;
}

// Example input dictionary
const inputDict = {
  "2023-08-19": 10,
  "2023-08-20": 20,
  "2023-08-21": 15,
  "2023-08-22": 5,
  "2023-08-1": 1,
  "2023-08-21": 30,
  "2023-08-2": 15,
  "2023-08-3": 5,
  "2023-08-19": 1,
  "2023-08-20": 20,
  "2023-07-21": 15,
  "2023-07-3": 5,
  "2023-07-14": 1,
  "2023-07-1": 3,
  "2023-07-20": 5,
  "2023-07-23": 5,
};

const outputDict = solution(inputDict);
console.log(outputDict);
