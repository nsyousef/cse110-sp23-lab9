let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    });

    let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

    // Start your code here
    // You may move this JS to another file if you wish

document.getElementById('console-log').addEventListener('click', function() {
  console.log("Console log demo");
});

document.getElementById('console-error').addEventListener('click', function() {
  console.error("An error occurred");
});

document.getElementById('console-count').addEventListener('click', function() {
  console.count('Count Button');
});

document.getElementById('console-warn').addEventListener('click', function() {
  console.warn("I'm warning you!");
});

document.getElementById('console-assert').addEventListener('click', function() {
  const x = 10;
  const y = 15;
  console.assert(x > y, `x should be greater than y, but x = ${x} and y = ${y}.`);
});

document.getElementById('console-clear').addEventListener('click', function() {
  console.clear();
});

document.getElementById('console-dir').addEventListener('click', function() {
  const peopleAndMajors = {
    person1: {
      name: "Nick",
      major: "bioinformatics"
    },
    person2: {
      name: "Jonny",
      major: "electrical engineering"
    }
  }
  console.dir(peopleAndMajors);
});

document.getElementById('console-dirxml').addEventListener('click', function() {
  console.dirxml(document.querySelector('form'));
});

document.getElementById('console-group-start').addEventListener('click', function() {
  console.group('My group');
});

document.getElementById('console-group-end').addEventListener('click', function() {
  console.groupEnd();
});

document.getElementById("console-table").addEventListener('click', function() {
  const peopleAndInfo = {
    person1: {
      name: "Nick",
      major: "bioinformatics",
      year: 4
    },
    person2: {
      name: "Jonny",
      major: "electrical engineering",
      year: 1
    },
    person3: {
      name: "Sara",
      major: "undecided",
      year: 3
    }
  }
  console.table(peopleAndInfo);
});

document.getElementById('start-timer').addEventListener('click', function() {
  console.time();
  console.log('timer has been started');
});

document.getElementById('end-timer').addEventListener('click', function() {
  console.timeEnd();
});

document.getElementById('console-trace').addEventListener('click', function() {
  fibonacci(10);
});

function fibonacci(num) {
  if (num === 0 || num === 1) {
    return fibonacciBaseCase(num);
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function fibonacciBaseCase(num) {
  if (num === 0) {
    console.trace();
    return 1;
  } else if (num === 1) {
    return 1;
  }
}
