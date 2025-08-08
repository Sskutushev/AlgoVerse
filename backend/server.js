const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Временное хранилище пользователей в памяти
const users = [];

// Маршрут для регистрации
app.post('/register', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  if (users.find(user => user.email === email)) {
    return res.status(409).json({ message: 'User with this email already exists.' });
  }

  users.push({ email, password });
  console.log('Registered users:', users);
  res.status(201).json({ message: 'Registration successful!' });
});

// Маршрут для входа
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const user = users.find(user => user.email === email && user.password === password);

  if (user) {
    res.status(200).json({ message: 'Login successful!' });
  } else {
    res.status(401).json({ message: 'Invalid email or password.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
