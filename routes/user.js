const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = app => {
  app.get('/users', async (req, res) => {
    const users = await User.find({}).cache({ expire: 20 });

    res.json(users);
  });

  app.get('/users/accNum/:accountNumber', async (req, res) => {
    var accNumber = req.params.accountNumber
    const user = await User.findOne({ accountNumber: accNumber}).cache({ expire: 20});

    res.json(user)
  })

  app.get('/users/idNum/:identityNumber', async (req, res) => {
    var idNumber = req.params.identityNumber
    const user = await User.findOne({ identityNumber: idNumber}).cache({ expire: 20});

    res.json(user)
  })

  app.put('/users/:id', async (req, res) => {
    const { userName, accountNumber, emailAddress, identityNumber } = req.body;
    var id = req.params.id;
    
    const user = new User({
      userName,
      accountNumber,
      emailAddress,
      identityNumber
    });

    try {
      await User.findOneAndUpdate(id, { User })
      res.send(user);
    } catch (err) {
      res.status(400).send(err.message);
    }
  })

  app.post('/users', async (req, res) => {
    const { userName, accountNumber, emailAddress, identityNumber } = req.body;

    if (!userName || !accountNumber || !emailAddress || !identityNumber) {
      return res.status(400).send('Missing userName, accountNumber, emailAddress, identityNumber')
    }

    const user = new User({
      userName,
      accountNumber,
      emailAddress,
      identityNumber
    });

    try {
      await user.save();
      res.send(user);
    } catch (err) {
      res.status(400).send(err.message);
    }
  });

  app.delete('/users/:identityNumber', async (req, res) => {
    var idNumber = req.params.identityNumber;

    try {
      const user = await User.findOneAndDelete({ identityNumber: idNumber});
      res.status(200).send(user);
    } catch (err) {
      res.status(400).send(err.message);
    }
  })
};