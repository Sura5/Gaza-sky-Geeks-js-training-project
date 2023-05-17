//- To create the Task object with properties like task description, due date, and priority level, use prototypes.

const readline = require('readline');

function Task(description, dueDate, priority) {
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
}


// Array to store the tasks
const taskList = [];

// Function to add a new task to the list
function addTask(description, dueDate, priority) {
    const newTask = new Task(description, dueDate, priority);
    taskList.push(newTask);
    console.log('Task added successfully.');
}

// Function to mark a task as completed
function markTaskCompleted(index) {
    if (index >= 0 && index < taskList.length) {
        taskList[index].completed = true;
        console.log('Task marked as completed.');
    } else {
        console.log('Invalid task index.');
    }
}

// Function to delete a task
function deleteTask(index) {
    if (index >= 0 && index < taskList.length) {
        taskList.splice(index, 1);
        console.log('Task deleted successfully.');
    } else {
        console.log('Invalid task index.');
    }
}



// Function to filter tasks by completion status
function filterTasksByCompletion(completed) {
    const filteredTasks = taskList.filter(task => task.completed === completed);
    console.log('Filtered tasks:');
    filteredTasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task.description}`);
    });
}




// Function to sort tasks by due date
function sortTasksByDueDate() {
    const sortedTasks = taskList.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    console.log('Sorted tasks by due date:');
    sortedTasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task.description}`);
    });
}

// Function to sort tasks by priority
function sortTasksByPriority() {
    const sortedTasks = taskList.sort((a, b) => a.priority - b.priority);
    console.log('Sorted tasks by priority:');
    sortedTasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task.description}`);
    });
}

// Function to display a list of available actions
function displayActions() {
    console.log('Available actions:');
    console.log('1. Add a new task');
    console.log('2. Mark a task as completed');
    console.log('3. Delete a task');
    console.log('4. Filter tasks by completion');
    console.log('5. Sort tasks by due date');
    console.log('6. Sort tasks by priority');
    console.log('0. Exit');
}

// Create readline interface for reading user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Event listener for reading user input
rl.on('line', (input) => {
    const choice = parseInt(input);//The parseInt() function parses a string argument and returns an integer of the specified

    switch (choice) {
        case 0:
            rl.close();
            break;
        case 1:
            rl.question('Task description: ', (description) => {
                rl.question('Due date: ', (dueDate) => {
                    rl.question('Priority (1-5): ', (priority) => {
                        addTask(description, dueDate, parseInt(priority));
                        displayActions();
                    });
                });
            });
            break;
        case 2:
            rl.question('Task index: ', (index) => {
                markTaskCompleted(parseInt(index) - 1);
                displayActions();

            });
            break;
        case 3:
            rl.question('Task index: ', (index) => {
                deleteTask(parseInt(index) - 1);
                displayActions();
            });
            break;
        case 4:
            rl.question('Filter completed tasks (true/false): ', (completed) => {
                filterTasksByCompletion(completed.toLowerCase() === 'true');
                displayActions();
            });
            break;
        case 5:
            sortTasksByDueDate();
            displayActions();
            break;
        case 6:
            sortTasksByPriority();
            displayActions();
            break;
        default:
            console.log('Invalid choice. Please try again.');
            displayActions();
            break;
    }
});

// Initial display of available actions
displayActions();









