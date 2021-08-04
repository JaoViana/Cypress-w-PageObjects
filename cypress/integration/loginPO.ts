import { Login } from '../support/pageObjects/login';
const login = new Login

it('login', () => {
  cy
    .visit('/')
  
  login
    .open()
    .goToSignup()
    
})