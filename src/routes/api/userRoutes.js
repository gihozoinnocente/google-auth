
import express from 'express'
import { UserControllers } from '../../controllers/userController.js';


const route = express.Router()

const userControllers = new UserControllers()
route.post('/register',  userControllers.register)
route.post('/login', userControllers.login)


export default route


// Google Route

router.get('/google', passportGoogle.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/auth/google/callback', passportGoogle.authenticate('google', { session: false }), socialUser.google, socialLogin.googleLogin);