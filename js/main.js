var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var cw = (canvas.width = window.innerWidth),
  cx = cw / 2;
var ch = (canvas.height = window.innerHeight),
  cy = ch / 2;

ctx.fillStyle = '#000';
var circlesRy = [];
var circlesNum = 15;
var requestId = null;

function Circle() {
  this.r = randomIntFromInterval(25, 170);
  this.x = randomIntFromInterval(this.r, cw - this.r);
  this.y = randomIntFromInterval(this.r, ch - this.r);

  this.vx = randomIntFromInterval(25, 100) / 100;
  this.vy = randomIntFromInterval(25, 100) / 100;

  this.update = function() {
    this.edges();
    this.x += this.vx;
    this.y += this.vy;
  };

  this.edges = function() {
    if (this.x < this.r || this.x > cw - this.r) {
      this.vx *= -1;
    }
    if (this.y < this.r || this.y > ch - this.r) {
      this.vy *= -1;
    }
  };

  this.draw = function() {
    ctx.strokeStyle = '#ccc';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.stroke();
  };
}

for (var i = 0; i < circlesNum; i++) {
  var circle = new Circle();
  circlesRy.push(circle);
}

function Draw() {
  requestId = window.requestAnimationFrame(Draw);
  ctx.clearRect(0, 0, cw, ch);
  for (var i = 0; i < circlesRy.length; i++) {
    var c = circlesRy[i];
    c.update();
    c.draw();
  }
  for (var i = 0; i < circlesRy.length; i++) {
    var c = circlesRy[i];
    for (var j = i + 1; j < circlesRy.length; j++) {
      var c1 = circlesRy[j];
      var d = dist(c, c1);
      if (d < c.r + c1.r && d > Math.abs(c.r - c1.r)) {
        getIntersection(c, c1, d);
      }
    }
  }
}

function Init() {
  circlesRy.length = 0;
  for (var i = 0; i < circlesNum; i++) {
    var circle = new Circle();
    circlesRy.push(circle);
  }

  if (requestId) {
    window.cancelAnimationFrame(requestId);
    requestId = null;
  }

  (cw = canvas.width = window.innerWidth), (cx = cw / 2);
  (ch = canvas.height = window.innerHeight), (cy = ch / 2);

  Draw();
}

setTimeout(function() {
  Init();

  addEventListener('resize', Init, false);
}, 15);

function getIntersection(p1, p2, d) {
  var p3 = {}; // middle point
  var p4 = {}; // intersection 1
  var p5 = {}; // intersection 2

  var a = (Math.pow(p1.r, 2) - Math.pow(p2.r, 2) + Math.pow(d, 2)) / (2 * d);
  var h = Math.sqrt(Math.pow(p1.r, 2) - Math.pow(a, 2));

  p3.x = p1.x + a * (p2.x - p1.x) / d;
  p3.y = p1.y + a * (p2.y - p1.y) / d;

  p4.x = p3.x + h * (p2.y - p1.y) / d;
  p4.y = p3.y - h * (p2.x - p1.x) / d;

  p5.x = p3.x - h * (p2.y - p1.y) / d;
  p5.y = p3.y + h * (p2.x - p1.x) / d;

  markPoint(p4);
  markPoint(p5);
}

function dist(p1, p2) {
  var dx = p2.x - p1.x;
  var dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function randomIntFromInterval(mn, mx) {
  return ~~(Math.random() * (mx - mn + 1) + mn);
}

function markPoint(p) {
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.arc(p.x, p.y, 2, 0, 2 * Math.PI);
  ctx.fill();
}

/*-------------------------------------
||
|| chart JS player stats
||
-------------------------------------*/

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var cw = (canvas.width = window.innerWidth),
  cx = cw / 2;
var ch = (canvas.height = window.innerHeight),
  cy = ch / 2;

ctx.fillStyle = '#000';
var circlesRy = [];
var circlesNum = 15;
var requestId = null;

function Circle() {
  this.r = randomIntFromInterval(25, 170);
  this.x = randomIntFromInterval(this.r, cw - this.r);
  this.y = randomIntFromInterval(this.r, ch - this.r);

  this.vx = randomIntFromInterval(25, 100) / 100;
  this.vy = randomIntFromInterval(25, 100) / 100;

  this.update = function() {
    this.edges();
    this.x += this.vx;
    this.y += this.vy;
  };

  this.edges = function() {
    if (this.x < this.r || this.x > cw - this.r) {
      this.vx *= -1;
    }
    if (this.y < this.r || this.y > ch - this.r) {
      this.vy *= -1;
    }
  };

  this.draw = function() {
    ctx.strokeStyle = '#ccc';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
    ctx.stroke();
  };
}

for (var i = 0; i < circlesNum; i++) {
  var circle = new Circle();
  circlesRy.push(circle);
}

function Draw() {
  requestId = window.requestAnimationFrame(Draw);
  ctx.clearRect(0, 0, cw, ch);
  for (var i = 0; i < circlesRy.length; i++) {
    var c = circlesRy[i];
    c.update();
    c.draw();
  }
  for (var i = 0; i < circlesRy.length; i++) {
    var c = circlesRy[i];
    for (var j = i + 1; j < circlesRy.length; j++) {
      var c1 = circlesRy[j];
      var d = dist(c, c1);
      if (d < c.r + c1.r && d > Math.abs(c.r - c1.r)) {
        getIntersection(c, c1, d);
      }
    }
  }
}

function Init() {
  circlesRy.length = 0;
  for (var i = 0; i < circlesNum; i++) {
    var circle = new Circle();
    circlesRy.push(circle);
  }

  if (requestId) {
    window.cancelAnimationFrame(requestId);
    requestId = null;
  }

  (cw = canvas.width = window.innerWidth), (cx = cw / 2);
  (ch = canvas.height = window.innerHeight), (cy = ch / 2);

  Draw();
}

setTimeout(function() {
  Init();

  addEventListener('resize', Init, false);
}, 15);

function getIntersection(p1, p2, d) {
  var p3 = {}; // middle point
  var p4 = {}; // intersection 1
  var p5 = {}; // intersection 2

  var a = (Math.pow(p1.r, 2) - Math.pow(p2.r, 2) + Math.pow(d, 2)) / (2 * d);
  var h = Math.sqrt(Math.pow(p1.r, 2) - Math.pow(a, 2));

  p3.x = p1.x + a * (p2.x - p1.x) / d;
  p3.y = p1.y + a * (p2.y - p1.y) / d;

  p4.x = p3.x + h * (p2.y - p1.y) / d;
  p4.y = p3.y - h * (p2.x - p1.x) / d;

  p5.x = p3.x - h * (p2.y - p1.y) / d;
  p5.y = p3.y + h * (p2.x - p1.x) / d;

  markPoint(p4);
  markPoint(p5);
}

function dist(p1, p2) {
  var dx = p2.x - p1.x;
  var dy = p2.y - p1.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function randomIntFromInterval(mn, mx) {
  return ~~(Math.random() * (mx - mn + 1) + mn);
}

function markPoint(p) {
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.arc(p.x, p.y, 2, 0, 2 * Math.PI);
  ctx.fill();
}
/*-------------------------------------
||
|| chart js player stats
||
-------------------------------------*/

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
