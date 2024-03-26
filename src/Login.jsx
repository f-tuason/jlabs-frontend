import { useRef } from 'react'
import axios from 'axios'

const URL = 'http://localhost:3000'

export default function Login() {
    const nameRef = useRef(null)
    const passwordRef = useRef(null)
    
    function submit(e) {
        e.preventDefault();
        const data = { email: nameRef.current.value, password: passwordRef.current.value }
        console.log(data);
        axios.post(`${URL}`, data)
          .then(() => {
            console.log('success')
          })
          .catch((error) => {
            console.log('fail')
            form.reset();
          })
    }

    return (
        <div>
            <h3>Login</h3>
            <form onSubmit={submit}>
                <label htmlFor='name'>Name</label><br />
                <input type='email' id='name'ref={nameRef} required /><br />
                <label htmlFor='password'>Password</label><br />
                <input type='password' id='password' style={{ marginBottom: "10px" }} ref={passwordRef} required /><br />
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
        </div>
    )
}