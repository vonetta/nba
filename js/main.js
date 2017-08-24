const coreyChart = document.getElementById('corey');
const kentaviousChart = document.getElementById('kentavious');
const jordanChart = document.getElementById('jordan');
const luolChart = document.getElementById('luol');
const tylerChart = document.getElementById('tyler');
const brandonChart = document.getElementById('brandon');

let corey = new Chart(coreyChart, {
  type: 'bar',
  data: {
    labels: ['MPG', 'FG%', '3P%', 'FT%', 'PPG', 'RPG', 'APG', 'BPG'],
    datasets: [
      {
        label: '2016-2017 Stats',
        backgroundColor: [
          '#d2d4d6',
          '#123456',
          '#ca3548',
          '#7849ff',
          '#ff66ff',
          '#408000',
          '#ff8000',
          '#008080'
        ],
        borderColor: 'white',
        borderWidth: 1,

        data: [15.6, 42.2, 22.9, 73.5, 4.5, 2, 1.2, 0.2]
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          barPercentage: 1,
          categoryPercentage: 0.9,
          fontColor: 'white'
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    legend: {
      labels: {
        fontColor: 'white'
      }
    },
    animation: {
      easing: 'easeInBounce'
    }
  }
});

let kentavious = new Chart(kentaviousChart, {
  type: 'bar',
  data: {
    labels: ['MPG', 'FG%', '3P%', 'FT%', 'PPG', 'RPG', 'APG', 'BPG'],
    datasets: [
      {
        label: '2016-2017 Stats',
        backgroundColor: [
          '#d2d4d6',
          '#123456',
          '#ca3548',
          '#7849ff',
          '#ff66ff',
          '#408000',
          '#ff8000',
          '#008080'
        ],
        borderColor: 'white',
        borderWidth: 1,

        data: [33.6, 39.9, 35, 83.2, 13.8, 3.3, 2.5, 0.2]
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          barPercentage: 1,
          categoryPercentage: 0.9,
          fontColor: 'white'
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    legend: {
      labels: {
        fontColor: 'white'
      }
    },
    animation: {
      easing: 'easeInBounce'
    }
  }
});

let jordan = new Chart(jordanChart, {
  type: 'bar',
  data: {
    labels: ['MPG', 'FG%', '3P%', 'FT%', 'PPG', 'RPG', 'APG', 'BPG'],
    datasets: [
      {
        label: '2016-2017 Stats',
        backgroundColor: [
          '#d2d4d6',
          '#123456',
          '#ca3548',
          '#7849ff',
          '#ff66ff',
          '#408000',
          '#ff8000',
          '#008080'
        ],
        borderColor: 'white',
        borderWidth: 1,

        data: [29.2, 44.5, 32.9, 79.8, 14.7, 3, 2.6, 0.1]
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          barPercentage: 1,
          categoryPercentage: 0.9,
          fontColor: 'white'
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    legend: {
      labels: {
        fontColor: 'white'
      }
    },
    animation: {
      easing: 'easeInBounce'
    }
  }
});

let luol = new Chart(luolChart, {
  type: 'bar',
  data: {
    labels: ['MPG', 'FG%', '3P%', 'FT%', 'PPG', 'RPG', 'APG', 'BPG'],
    datasets: [
      {
        label: '2016-2017 Stats',
        backgroundColor: [
          '#d2d4d6',
          '#123456',
          '#ca3548',
          '#7849ff',
          '#ff66ff',
          '#408000',
          '#ff8000',
          '#008080'
        ],
        borderColor: 'white',
        borderWidth: 1,

        data: [26.5, 38.7, 30.9, 73, 7.6, 5.3, 1.3, 0.4]
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          barPercentage: 1,
          categoryPercentage: 0.9,
          fontColor: 'white'
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    legend: {
      labels: {
        fontColor: 'white'
      }
    },
    animation: {
      easing: 'easeInBounce'
    }
  }
});

let tyler = new Chart(tylerChart, {
  type: 'bar',
  data: {
    labels: ['MPG', 'FG%', '3P%', 'FT%', 'PPG', 'RPG', 'APG', 'BPG'],
    datasets: [
      {
        label: '2016-2017 Stats',
        backgroundColor: [
          '#d2d4d6',
          '#123456',
          '#ca3548',
          '#7849ff',
          '#ff66ff',
          '#408000',
          '#ff8000',
          '#008080'
        ],
        borderColor: 'white',
        borderWidth: 1,

        data: [11.1, 43.3, 38.6, 84, 4.3, 0.8, 1.6, 0]
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          barPercentage: 1,
          categoryPercentage: 0.9,
          fontColor: 'white'
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    legend: {
      labels: {
        fontColor: 'white'
      }
    },
    animation: {
      easing: 'easeInBounce'
    }
  }
});

let brandon = new Chart(brandonChart, {
  type: 'bar',
  data: {
    labels: ['MPG', 'FG%', '3P%', 'FT%', 'PPG', 'RPG', 'APG', 'BPG'],
    datasets: [
      {
        label: '2016-2017 Stats',
        backgroundColor: [
          '#d2d4d6',
          '#123456',
          '#ca3548',
          '#7849ff',
          '#ff66ff',
          '#408000',
          '#ff8000',
          '#008080'
        ],
        borderColor: 'white',
        borderWidth: 1,

        data: [28.8, 40.2, 29.4, 62.1, 9.4, 4, 2.1, 0.5]
      }
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          barPercentage: 1,
          categoryPercentage: 0.9,
          fontColor: 'white'
        }
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    },
    legend: {
      labels: {
        fontColor: 'white'
      }
    },
    animation: {
      easing: 'easeInBounce'
    }
  }
});
