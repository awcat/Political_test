const express = require('express');
const router = express.Router();
const User = require('../models/User');
const questions = require('../questions.json');

// Display the questions form
router.get('/', (req, res) => {
  res.render('index', { questions });
});

// Handle form submission
router.post('/', async (req, res) => {
  const { name, citta, answers } = req.body;
  if (!name || !citta) {
    return res.status(400).send('Name and city are required');
  }
  const newUser = new User({ name, citta, answers });
  try {
    await newUser.save();
    
    // Calculate the percentage of "a" and "b" answers
    const totalAnswers = answers.length;
    const countA = answers.filter(answer => answer === 'a').length;
    const countB = totalAnswers - countA;
    
    // Determine the result
    let result;
    if (countA > countB) {
      result = '<strong>Alleanza Verdi e Sinistra</strong>';
    } else if (countB > countA) {
      result = "<strong>Fratelli d' Italia</strong>";
    } else {
      result = 'equally divided between <strong>Alleanza Verdi e Sinistra</strong> and <strong>Fratelli d\' Italia</strong>';
    }
    
    res.send(`<div style="font-size: 24px; ">Grazie per aver completato il test! Il tuo risultato è: ${result}</div>`);
  } catch (err) {
    res.status(500).send('There was an error saving your responses.');
  }
});

// Display all results
router.get('/results', async (req, res) => {
  const users = await User.find().sort({ createdAt: -1 });
  res.render('results', { users });
});

module.exports = router;

