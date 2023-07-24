const router = require('express').Router();
const { User } = require('../../models');

// User login route takes email and password as input
router.post('/login', async (req, res) => {
    try {
        // find user in database where email matches
        const userEmail = req.body.email;
        const userData = await User.findOne({ where: { email: userEmail } });

        // if email does not match, return
        if (!userData) {
            res.status(401).json({ message: 'Incorrect email or password, please try again' });
            return;
        }


        // check password against database
        const userPassword = req.body.password
        const validPassword = await userData.checkPassword(userPassword);

        // if not match return
        if (!validPassword) {
            res.status(402).json({ message: 'Incorrect email or password, please try again' });
            return;
        }
        
        // save user id to session and set logged in to true
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });

    } catch (err) {
        res.status(403).json(err);
    }
});

// creates a new user takes name, email, and password as input
router.post('/newuser', async (req, res) => {
    try {

        // checks database for existing email
        // returns if true
        if (await User.findOne({where: { email: req.body.email}})) {
            res.status(200).json({ message: 'email address is already in use' });
            return;
        }

        // checks password length
        // returns if true
        if (req.body.password.length < 8) {
            res.status(200).json({ message: 'password is too short!' });
            return;
        }

        // creating the new user entry
        await User.create(req.body);

        // find user and save id as session
        // sets logged in to true
        // probably a better way to get the user entry than going back to the database
        userData = await User.findOne({ where: { email: req.body.email}})
        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'Successfully created a new accoutn and logged in' })
        })

    } catch (err) {
        res.json(err);
    }
})

// logs the current user out and destroys the session
router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).json({ message: 'Successfully logged out!'}).end();
        });
        
    } else {
        res.status(404).end();
    }
});

module.exports = router;
