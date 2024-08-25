const express = require('express');
const app = express();
app.use(express.json());

app.post('/bfhl', (req, res) => {
    const data = req.body.data;
    let numbers = [];
    let alphabets = [];
    let highestLowercaseAlphabet = '';

    data.forEach(item => {
        if (!isNaN(item)) {
            numbers.push(item);
        } else if (typeof item === 'string' && item.length === 1) {
            alphabets.push(item);
            if (item === item.toLowerCase() && item > highestLowercaseAlphabet) {
                highestLowercaseAlphabet = item;
            }
        }
    });

    const response = {
        is_success: true,
        user_id: "SairamBojedla", // replace with your own format
        email: "sairambojedla@gmail.com",
        roll_number: "21BCE7792",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
    };

    res.status(200).json(response);
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(Server running on port ${port});
})
