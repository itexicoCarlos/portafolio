import React from 'react'
//styles
import injectSheet from 'react-jss'
import { loginStyles } from './_login'
import { Form, Input, Button, Icon } from 'antd'
import 'antd/dist/antd.css'

const Login = ({ classes }) => {
  return(
    <div className={classes.containerLogin}>
      <Form className={classes.containerForm}>
        <Input className={classes.inputStyle} placeholder='User' prefix={<Icon type='user'/>}/>
        <Input.Password className={classes.inputStyle} placeholder='Password' prefix={<Icon type='lock'/>}/>
        <Button type='primary'>Login</Button>
      </Form>
    </div>
  )
}
const loginWithStyle = injectSheet(loginStyles)(Login)
export default loginWithStyle