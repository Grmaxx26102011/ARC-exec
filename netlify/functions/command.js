exports.handler = async (event) => {
    // Only allow POST requests
    if (event.httpMethod !== "POST") {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: "Method Not Allowed" }),
        };
    }

    try {
        const body = JSON.parse(event.body);
        if (body.command === "kill_roblox") {
            // Simulate the "kill Roblox" action (since we can't run this on Netlify)
            // In a real setup, this would communicate with a local agent on your machine
            console.log("Received command to kill Roblox");
            return {
                statusCode: 200,
                body: "Command received: Simulated Roblox termination",
            };
        }

        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Invalid command" }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Server error: " + error.message }),
        };
    }
};
