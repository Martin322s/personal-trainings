function solve() {
    const addButton = document.getElementById('add');
    const taskInputField = document.getElementById('task');
    const descriptionInputField = document.getElementById('description');
    const dateInputField = document.getElementById('date');
    const openTasksSection = document.querySelector('main section:nth-of-type(2) > div:nth-of-type(2)');
    const inProgrssTasksSection = document.querySelector('main section:nth-of-type(3) > div:nth-of-type(2)');
    const doneTasksSection = document.querySelector('main section:nth-of-type(4) > div:nth-of-type(2)');

    addButton.addEventListener('click', (ev) => {
        ev.preventDefault();

        let inputData = {
            task: taskInputField.value,
            description: descriptionInputField.value,
            date: dateInputField.value,
        };

        if (Object.values(inputData).some(x => x === '')) {
            alert('All fields are required!');
        } else {
            let articleElement = document.createElement('article');
        }
    });
}