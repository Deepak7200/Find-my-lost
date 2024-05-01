document.addEventListener('DOMContentLoaded', function() {
    const cardForm = document.getElementById('cardForm');
    const cardContainer = document.getElementById('cardContainer');

    cardForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const title = document.getElementById('titleInput').value;
        const type = document.getElementById('type').value;
        const content = document.getElementById('contentInput').value;
        const imageFile = document.getElementById('imageInput').files[0];
        const currentDateInputValue = document.getElementById('dateInput').value;
            
        const currentDate = new Date(currentDateInputValue);
        const day = currentDate.getDate().toString().padStart(2, '0');
        const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        const year = currentDate.getFullYear().toString().slice(-2); 
        const formattedDate = `${day}-${month}-${year}`;
        console.log(formattedDate);

        if (title.trim() === '' || content.trim() === '' || !imageFile) {
            alert('Please fill out all fields');
            return;
        }

        const reader = new FileReader();
        reader.onload = function(event) {
            const imageUrl = event.target.result;
        
            const card = document.createElement('div');
            card.classList.add('card', 'left-aligned'); // Add the left-aligned class
            card.innerHTML = `
                <div class="card-content">
                    <img src="${imageUrl}" alt="Card Image">
                    <div class="card-text">
                        <h2>Item: ${title}</h2>
                        <p><strong>Status: </strong> ${type}</p>
                        <p><strong>Description: </strong> ${content}</p>
                        <p><strong>Date: </strong> ${formattedDate}</p>
                    </div>
                </div>
            `;
            cardContainer.appendChild(card);
        };
        
        reader.readAsDataURL(imageFile);

        // Clear input fields
        document.getElementById('titleInput').value = '';
        document.getElementById('contentInput').value = '';
        document.getElementById('imageInput').value = '';
    });
});