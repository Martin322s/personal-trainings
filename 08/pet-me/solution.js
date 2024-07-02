function solve() {
    const addButton = document.querySelector('#add button');
    const adoptionSection = document.querySelector('#adoption ul');
    const adoptedSection = document.querySelector('#adopted ul');

    addButton.addEventListener('click', function (event) {
        event.preventDefault();

        const nameInput = document.querySelector('#add input[placeholder="Name"]');
        const ageInput = document.querySelector('#add input[placeholder="Age"]');
        const kindInput = document.querySelector('#add input[placeholder="Kind"]');
        const ownerInput = document.querySelector('#add input[placeholder="Current Owner"]');

        const name = nameInput.value.trim();
        const age = ageInput.value.trim();
        const kind = kindInput.value.trim();
        const owner = ownerInput.value.trim();

        if (name && age && kind && owner && !isNaN(age)) {
            // Create the pet list item
            const petItem = document.createElement('li');

            // Create the paragraph for pet description
            const petDescription = document.createElement('p');
            petDescription.innerHTML = `<strong>${name}</strong> is a <strong>${age}</strong> year old <strong>${kind}</strong>`;
            petItem.appendChild(petDescription);

            // Create the span for owner
            const ownerSpan = document.createElement('span');
            ownerSpan.textContent = `Owner: ${owner}`;
            petItem.appendChild(ownerSpan);

            // Create the Contact button
            const contactButton = document.createElement('button');
            contactButton.textContent = 'Contact with owner';
            petItem.appendChild(contactButton);

            // Add the new pet item to the adoption section
            adoptionSection.appendChild(petItem);

            // Clear the input fields
            nameInput.value = '';
            ageInput.value = '';
            kindInput.value = '';
            ownerInput.value = '';

            // Add event listener to the Contact button
            contactButton.addEventListener('click', function () {
                // Create the input for new owner name
                const newOwnerInput = document.createElement('input');
                newOwnerInput.placeholder = 'Enter your names';

                // Append the new input before the button
                petItem.appendChild(newOwnerInput);
                petItem.appendChild(contactButton);

                // Change button text to Yes! I take it!
                contactButton.textContent = 'Yes! I take it!';

                // Event listener for "Yes! I take it!" button
                contactButton.addEventListener('click', function () {
                    const newOwner = newOwnerInput.value.trim();

                    if (newOwner) {
                        // Update owner span
                        ownerSpan.textContent = `New Owner: ${newOwner}`;

                        // Hide the input and change button to Checked
                        newOwnerInput.style.display = 'none';
                        contactButton.textContent = 'Checked';

                        // Move pet to adopted section
                        adoptedSection.appendChild(petItem);

                        // Add event listener to Checked button
                        contactButton.addEventListener('click', function () {
                            petItem.remove();
                        });
                    }
                });
            });
        }
    });
}