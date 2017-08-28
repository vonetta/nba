const coreyChart = document.getElementById('corey');
const kentaviousChart = document.getElementById('kentavious');
const jordanChart = document.getElementById('jordan');
const luolChart = document.getElementById('luol');
const tylerChart = document.getElementById('tyler');
const brandonChart = document.getElementById('brandon');
const brookChart = document.getElementById('brook');
const larryChart = document.getElementById('larry');
const juliusChart = document.getElementById('julius');
const thomasRChart = document.getElementById('thomasR');
const brianteChart = document.getElementById('briante');
const mettaChart = document.getElementById('metta');
const stephenChart = document.getElementById('stephen');
const ivicaChart = document.getElementById('ivica');

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

let brook = new Chart(brookChart, {
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

        data: [29.6, 47.4, 34.6, 81, 20.5, 5.4, 2.3, 1.6]
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

let larry = new Chart(larryChart, {
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

        data: [22.9, 52.6, 27.8, 73.8, 7.1, 5.9, 1.5, 0.6]
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

let julius = new Chart(juliusChart, {
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

        data: [28.8, 48.8, 27, 72.3, 13.2, 8.6, 3.6, 0.5]
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

let thomasR = new Chart(thomasRChart, {
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

        data: [11.7, 53.6, 0, 47, 5, 4.6, 0.6, 0.2]
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

let briante = new Chart(brianteChart, {
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

        data: [10.3, 41.7, 10, 68.8, 3.1, 1.3, 1.1, 0]
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

let metta = new Chart(mettaChart, {
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

        data: [6.4, 27.9, 23.7, 62.5, 2.3, 0.8, 0.4, 0.1]
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

let stephen = new Chart(stephenChart, {
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

        data: [5.7, 32.3, 0, 60, 1.2, 1.8, 0.2, 0.3]
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

let ivica = new Chart(ivicaChart, {
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

        data: [16, 52.9, 0, 65.3, 7.5, 4.2, 0.8, 0.9]
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
