import { useRef, useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3000'

export default function Home() {
  const locationRef = useRef(null)
  const [items, setItems] = useState([])

  function submit(e) {
    e.preventDefault();

    const data = locationRef.current.value;

    axios.get(`${URL}/ip`)
      .then((result) => {
        console.log('success');
        console.log(result);
      })
      .catch((err) => {
        console.log('fail');
        console.log(err);
      })
  }

  function remove(e) {
    e.preventDefault();
  }

  return (
    <>
      <form onSubmit={(e) => submit(e)}>
        <label htmlFor='ip'>Ip Address: </label><br />
        <input type='text' style={{marginBottom: '10px'}} ref={locationRef} minLength='7' maxLength='15' size='15' pattern='^((\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.){3}(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$' /><br />
        <button className='btn btn-primary' type='submit'>Submit</button>
        <li style={{ listStyleType: 'none' }}>
          {items.map((item, index) => <li key={index}><input type='checkbox' /> {item.ip}</li>)}
        </li>
        {items.length > 0 && <button className='btn btn-primary' type='button' onClick={(e) => remove(e)}>Delete</button>}
      </form>
    </>
  );
};
