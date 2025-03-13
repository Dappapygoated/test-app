const express = require('express');
const bodyParser = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/login', (req, res) => {
    res.send(`
        <h2>Login Page</h2>
        <form action="/login" method="POST">
            <label>
                Username:
                <input type="text" name="username"/> 
            </label>
            <br/><br/>
            <label>
                Password:
                <input type="password" name="password"/>
            </label>
            <br/><br/>
            <button type="submit">Login</button>
        </form>
    `);
});

app.post('/login', (req,res) => {
    const { username, password } = req.body;

    res.send(`<h3>Login successful! Welcome, ${username}.</h3>`)
})

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});