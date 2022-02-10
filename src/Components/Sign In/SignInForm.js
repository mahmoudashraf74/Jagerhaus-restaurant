import { Form, Button } from "react-bootstrap";
import './SignInForm.css'
import SignUpButton from "./SignUpButton";
const SignInForm = (props) => {
    return (
        <Form className="Form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
           
             <a href="/newUser">
                Forget Your Password</a>.

<br/>
               <p> New to Foody? <SignUpButton/> </p> 
                <br/>
            <Button
            variant="light" className="submit">Sign In</Button>{" "}
        </Form>
    );
};
export default SignInForm;
