class Task {

    constructor(task) {
      this.name = task;
      this.completed = "NO";
    }
}
  
class Interface {

    constructor() {
        this.taskInput = document.getElementById('task-input');
        this.taskTable = document.getElementById('task-table');
        this.addButton = document.getElementById('add-button');
        this.tasks = [];
    }

    bindEventListeners() {
        this.addButton.addEventListener('click', (event) => this.createTask(event));
    }

    createTask(event) {
        const task = new Task(this.taskInput.value);
        this.tasks.push(task);

        this.taskTable.innerHTML = '';

        const row = document.createElement('tr');
        const taskCell = document.createElement('td');
        const completedCell = document.createElement('td');
        const actionsCell = document.createElement('td');
        const completeButton = document.createElement('button');

        taskCell.innerHTML = task.name;

        completedCell.innerHTML = task.completed;
        completeButton.innerHTML = 'Complete';
        completeButton.addEventListener('click', (event) => {
            completedCell.innerHTML = '';
            completedCell.innerHTML = 'YES';
        });
        actionsCell.append(completeButton);

        row.append(taskCell);
        row.append(completedCell);
        row.append(actionsCell);

        this.taskTable.append(row);
        this.taskInput.value = '';
    }
}

const interface = new Interface();
interface.bindEventListeners();