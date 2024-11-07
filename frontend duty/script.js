const list = document.getElementById('duties');
const addButton = document.getElementById('addButton');
const titleInput = document.getElementById('title');
const dueDateInput = document.getElementById('dueDate');
const finishedInput = document.getElementById('finished');


const getData = async () => {
    const response = await fetch('http://localhost:3000/duty');
    const duties = await response.json();
    list.innerHTML = '';
    duties.forEach(duty => {
        list.innerHTML += `
            <li class="border-b p-2">
                <strong>${duty.title}</strong><br>
                Due: ${new Date(duty.dueDate).toLocaleDateString()}<br>
                Status: <span class="${duty.finished ? 'text-green-500' : 'text-red-500'}">
                    ${duty.finished ? '✔️ Finished' : '❌ Pending'}
                </span>
            </li>`;
    });
};


getData();

// Add a new duty
addButton.onclick = async () => {
    if (!titleInput.value || !dueDateInput.value) {
        alert("Please enter both title and due date.");
        return;
    }

    const duty = {
        title: titleInput.value,
        dueDate: dueDateInput.value,
        finished: finishedInput.checked
    };

    const response = await fetch('http://localhost:3000/duty', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(duty)
    });

    const newDuty = await response.json();
    list.innerHTML += `
        <li class="border-b p-2">
            <strong>${newDuty.title}</strong><br>
            Due: ${new Date(newDuty.dueDate).toLocaleDateString()}<br>
            Status: <span class="${newDuty.finished ? 'text-green-500' : 'text-red-500'}">
                ${newDuty.finished ? '✔️ Finished' : '❌ Pending'}
            </span>
        </li>`;
    
    titleInput.value = '';
    dueDateInput.value = '';
    finishedInput.checked = false;
};
