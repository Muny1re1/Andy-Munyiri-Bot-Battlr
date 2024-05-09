/function displayAttendanceRecords function to fetch the attendance records
function displayAttendanceRecords() {
  const attendanceRecords = fetchAttendanceRecords();
  const recordsContainer = document.getElementById("attendance-records");
  recordsContainer.innerHTML = "";
  
 

  attendanceRecords.forEach((record) => {
    const recordElement = document.createElement("div");
    recordElement.innerHTML = `
      <p>Date: ${record.date}</p>
      <p>Time: ${record.time || "N/A"}</p>
      <p>Status: ${record.status}</p>
      <hr>
    `;
    recordsContainer.appendChild(recordElement);
  });
}
// Function to fetch attendance records from the JSON server
async function fetchAttendanceRecords(studentId) {
  try {
    const response = await fetch(`${apiUrl}/api/attendance`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      const studentRecords = data.attendanceRecord.filter(
        (record) => record.studentId === studentId
      );
      return studentRecords;
    } else {
      const error = await response.json();
      throw new Error(error.responseError.error);
    }
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Function to display attendance records in the dashboard
function displayAttendanceRecords(studentId) {
  fetchAttendanceRecords(studentId)
    .then((attendanceRecords) => {
      const recordsContainer = document.getElementById("attendance-records");
      recordsContainer.innerHTML = "";

      attendanceRecords.forEach((record) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${record.date}</td>
          <td>${record.arrivalTime || "N/A"}</td>
          <td>${getAttendanceStatus(record.arrivalTime)}</td>
        `;
        recordsContainer.appendChild(row);
      });
    })
    .catch((error) => console.error(error));
}
// Function to get the attendance status based on the arrival time
function getAttendanceStatus(arrivalTime) {
  if (!arrivalTime) {
    return "Absent";
  }

  const [hours, minutes] = arrivalTime.split(":").map(Number);
  const arrivalHour = hours + minutes / 60;

  if (arrivalHour < 9 + 5 / 60) {
    return "Present";
  } else if (arrivalHour < 9 + 40 / 60) {
    return "Late";
  } else {
    return "Absent";
  }
}

//  handleCheckIn function to handle check ins
function handleCheckIn(event) {
  event.preventDefault();
}