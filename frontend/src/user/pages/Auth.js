import React, {useState, useContext} from 'react'

import { AuthContext } from '../../shared/context/auth-context';
import Card from '../../shared/components/UIElements/Card';
import { useForm } from '../../shared/hooks/form-hook';
import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../../shared/util/validators';
import './Auth.css'

const Auth = () => {
    const auth = useContext(AuthContext)
    const [isLogin, setIsLogin] = useState(true)

    const [formState, inputHandler, setFormData] = useForm({
        email: {
          value: '',
          isValid: false
        },
        password: {
          value: '',
          isValid: false
        }
      }, false)
      
    const switchModeHandler = () => {
        if (!isLogin) {
            setFormData({ 
                ...formState.inputs,
                name: undefined
            }, formState.inputs.email.isValid && formState.inputs.password.isValid)
        } else {
            setFormData({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            }, false)
        }
        setIsLogin(prevMode => !prevMode)
    }
      const authSubmitHandler = event => {
        event.preventDefault();
          console.log(formState.inputs); // send this to the backend!
          auth.login()
      };
  return (
      <Card className='authentication'>
          <h2>Login Required</h2>
          <hr/>
          <form onSubmit={authSubmitHandler}>
              {!isLogin && <Input
                  element='input'
                  id='name'
                  type='text'
                  label='Your Name'
                  validators={[VALIDATOR_REQUIRE()]}
                  errorText='Please enter a name'
                  onInput={inputHandler}
                />}
            <Input
            id="email"
            element="input"
            type="email"
            label="Email"
            validators={[VALIDATOR_EMAIL()]}
            errorText="Please enter a valid email address."
            onInput={inputHandler}
            />
            <Input
            id="password"
            element="input"
            label="Password"
            validators={[VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid password."
            onInput={inputHandler}
            />
            <Button type="submit" disabled={!formState.isValid}>
            {isLogin ? 'Log in' : 'Sign Up'}
            </Button>
          </form>
          <Button inverse onClick={switchModeHandler}>SWITCH TO {isLogin ? 'Sign Up' : 'Log in'} </Button>
    </Card>
  )
}

export default Auth