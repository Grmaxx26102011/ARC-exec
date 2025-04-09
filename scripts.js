function injectScript() {
    const script = document.getElementById('script-editor').value;
    if (!script) {
        document.getElementById('output').textContent = 'Error: No script entered.';
        return;
    }
    // Simulate injecting (in a real scenario, this would interact with a Roblox exploit API)
    document.getElementById('output').textContent = 'Script injected: ' + script.substring(0, 50) + '...';
    console.log('Injecting script:', script);
}

function executeScript() {
    const script = document.getElementById('script-editor').value;
    if (!script) {
        document.getElementById('output').textContent = 'Error: No script entered.';
        return;
    }
    // Simulate execution (browser-based, no real Roblox interaction here)
    document.getElementById('output').textContent = 'Script executed: ' + script.substring(0, 50) + '...';
    console.log('Executing script:', script);
}

function killRoblox() {
    // Send kill command to a local C# app listening on port 5050
    fetch('http://localhost:5050/command', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ command: 'kill_roblox' })
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('output').textContent = 'Kill command sent: ' + data;
    })
    .catch(error => {
        document.getElementById('output').textContent = 'Error sending kill command: ' + error.message;
        console.error('Kill command failed:', error);
    });
}
