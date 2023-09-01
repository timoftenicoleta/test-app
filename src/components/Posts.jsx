import React from 'react';
import {Form, useActionData} from 'react-router-dom';

function Posts () {
    const data = useActionData();
    
    return(
        <>
            <Form method='post'>
                <input type='text' placeholder='id' name='Id'></input>
                <br/>
                <input type='text' placeholder='customer' name='Customer'></input>
                <br/>
                <button type='submit'>Submit</button>
            </Form>
            {data && <div>Succesfully submitted</div>}
        </>
    );
}

export default Posts;