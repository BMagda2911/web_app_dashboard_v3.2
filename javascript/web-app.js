// variables
const alertBanner = document.getElementById("alert");
const notificationsCircle = document.getElementsByClassName("header__notifications-circle");
const trafficCanvas = document.getElementById("traffic-chart");
const dailyCanvas = document.getElementById("daily-chart");
const mobileCanvas = document.getElementById("mobile-chart");
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");


// this event listener puts the display property of the alert banner and the notification's circle next to the bell icon to none

alertBanner.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = "none";
    notificationsCircle[0].style.display = "none";
  }
});


// data for all 3 charts
let trafficData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
    fill: true,
    backgroundColor: '#d5d6ec',
    borderWidth: 1,
    borderColor: '#9a9cb2',
    pointBorderColor: '#a9aac0',
    showLine: true
  }]
};

let trafficOptions = {
  responsive: true,
  aspectRatio: 1.5,
  animation: {
    duration: 0
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  },
  plugins: {
    legend : {
      display: false
    }
  }
};

const dailyData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
  }]
};

const dailyOptions = {
  responsive: true,
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero:true
      }
    }]
  },
  plugins: {
    legend : {
   display: false
   }
 }
}

const mobileData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      '#7477BF',
      '#78CF82',
      '#51B6C8'
    ]
  }]
};

const mobileOptions = {
  plugins: {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 15,
        fontStyle: 'bold'
      }
    }
  }
}

// charts
let trafficChart = new Chart(trafficCanvas, {
  type: 'line',
  data: trafficData,
  options: trafficOptions
});

let dailyChart = new Chart(dailyCanvas, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

let mobileChart = new Chart(mobileCanvas, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});


// create event listener on 'send' button
send.addEventListener('click', () => {
  if (user.value === "" && message.value === "") {
    alert("Please fill out user and message fields before sending.");
  } else if (user.value === "" ) {
    alert("Please fill out user field before sending.");
  } else if (message.value === "" ) {
    alert("Please fill out message field before sending.");
  } else {
    alert(`Message successfully sent to: ${user.value}`);
  }
});
  