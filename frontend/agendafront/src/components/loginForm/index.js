import { Form, Label } from "./style"

const LoginForm = () => {
    return(
        <Form>
            <Label for='usuario'>Usuario</Label>
            <input type='text' name='usuario'/>
        </Form>

    )
}

export default LoginForm