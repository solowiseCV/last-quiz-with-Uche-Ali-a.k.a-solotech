let votes = {
    messi: 0,
    ronaldo: 0
};

document.getElementById('messi').addEventListener('click', function() {
    alert("Tappi, you are wrong na BACK OF TV U DEY WATCH");
    let retry = confirm("Try wisely again?");
    if (retry) {
        location.reload(); // This will reload the page
    } else {
        vote('messi');
    }
});

document.getElementById('ronaldo').addEventListener('click', function() {
    alert("Congratulations! You are indeed a football lover.");
    vote('ronaldo');
    location.reload(); // This will reload the page
});

document.getElementById('messi').addEventListener('mouseover', function() {
    document.getElementById('message').innerText = "messi ke, Dey play👿...";
});

document.getElementById('messi').addEventListener('mouseout', function() {
    document.getElementById('message').innerText = "";
});

document.getElementById('ronaldo').addEventListener('mouseover', function() {
    document.getElementById('message').innerHTML = "Agba Baller😊👍";
});

document.getElementById('ronaldo').addEventListener('mouseout', function() {
    document.getElementById('message').innerText = "";
});

async function vote(player) {
    try {
        await fetch('https://last-quiz-by-solotech.onrender.com/vote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ player }),
        });
        fetchVotes();
    } catch (err) {
        console.error('Error:', err);
    }
}

async function fetchVotes() {
    try {
        const response = await fetch('https://last-quiz-by-solotech.onrender.com/votes');
        const data = await response.json();
        votes = data;
        updateVotesDisplay();
    } catch (err) {
        console.error('Error:', err);
    }
}

function updateVotesDisplay() {
    document.getElementById('messiVotes').innerText = `Messi: ${votes.messi || 0} votes`;
    document.getElementById('ronaldoVotes').innerText = `Ronaldo: ${votes.ronaldo || 0} votes`;
}

// Fetch votes on page load
fetchVotes();
