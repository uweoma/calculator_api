const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Calculator API');
});

app.listen(port, () => {
  console.log(`Server is running at port:${port}`);
});

// @desc POST Add numbers
// @route POST /api/calculate/add
app.post('/api/calculate/add', (req, res) => {
    try{
        const { num1, num2 } = req.body;
        const sum = num1 + num2;
        res.status(200).json({ result: sum });
        return;
    } catch(error){
        res.status(500).json({ message: error.message })
    }
});
  
// @desc POST Subtract numbers
// @route POST /api/calculate/subtract
app.post('/api/calculate/subtract', (req, res) => {
    try{
        const { num1, num2 } = req.body;
        const subtract = num1 - num2;
        res.status(200).json({ result: subtract });
        return;
    }catch(error){
        res.status(500).json({ message: error.message })
    }
});

// @desc POST Multiply numbers
// @route POST /api/calculate/multiply
app.post('/api/calculate/multiply', (req, res) => {
    try{
        const { num1, num2 } = req.body;
        const product = num1 * num2;
        res.status(200).json({ result: product });
        return;
    }catch(error){
        res.status(500).json({ message:error.message })
    }
});

// @desc POST Divide numbers
// @route POST /api/calculate/divide
app.post('/api/calculate/divide', (req, res) => {
    try{
        const { num1, num2 } = req.body;
    
        if (num2 === 0) {
          return res.status(400).json({ error: 'Division by zero is not allowed' });
        }
        const quotient = num1 / num2;
        res.json({ result: quotient });
        return;
    }catch(error){
        res.status(500).json({ message: error.message })
    }
});
