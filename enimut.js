let timeout = null; // Initialize the timeout variable to null

function startTimer() {
    // Clear any existing timer before starting a new one
    if (timeout !== null) {
        clearTimeout(timeout);
    }
    
    // Start a new timer that logs a message after 2 seconds
    timeout = setTimeout(() => {
        console.log('Timer finished!');
        timeout = null; // Reset the timeout variable after the timer completes
    }, 2000);
}

function stopTimer() {
    // Clear the timer if it is set
    if (timeout !== null) {
        clearTimeout(timeout);
        timeout = null; // Reset the timeout variable
        console.log('Timer stopped!');
    }
}

// Example usage:
startTimer(); // Start the timer
// Call stopTimer() within 2 seconds to stop the timer
