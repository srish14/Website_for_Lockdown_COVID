import React, { useContext, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
// import $ from 'jquery';
// import './loader.js';

import { AuthContext } from '../context/auth';
import { useForm } from '../util/hooks';

function Login(props) {
    const context = useContext(AuthContext);
    const [errors, setErrors] = useState({});

    const { onChange, onSubmit, values } = useForm(loginUserCallback, {
        username: '',
        password: '',
    })
   
    const [loginUser, { loading }]= useMutation(LOGIN_USER, {
        update(_, { data: { login: userData}}) {
            //console.log(result);
            context.login(userData)
            props.history.push('/');
            // jQuery(window).load(function(){
            //     sessionStorage.setItem ('status', 'loggedIn')
            //             });
        },
        onError(err) {
           // console.log(err.graphQLErrors[0].extensions.exception.errors);
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
        },
        variables: values
    });

    function loginUserCallback(){
//         jQuery(window).load(function(){
// sessionStorage.setItem ('status', 'loggedIn')
//         });
        loginUser();
    };

    return (
        <div className = "form-container">
            <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
                <h1>Login</h1>
                <Form.Input
                    label="Username"
                    placeholder="Username.."
                    name="username"
                    type="text"
                    value={values.username}
                    error={errors.username ? true : false}
                    onChange={onChange}
                    />
                    <Form.Input
                    label="Password"
                    placeholder="Password.."
                    name="password"
                    type="password"
                    value={values.password}
                    error={errors.password ? true : false}
                    onChange={onChange}
                    />
                    <Button type="submit primary" color='teal'>
                        Login 
                    </Button>
            </Form>
            {Object.keys(errors).length > 0 && (
                <div className="ui error message">
                <ul className="list">
                    {Object.values(errors).map((value) => (
                        <li key={value}>{value}</li>
                    ))}
                </ul>
            </div>
            )}
        </div>
    );
}

const LOGIN_USER = gql`
    mutation login(
        $username: String!
        $password: String!
    ) {
        login(
                username: $username
                password: $password
        ) {
            id 
            email 
            # fullname
            # age
            username 
            createdAt 
            token
        }
    }
`;

export default Login;





// import React, { useState } from 'react';
// import { Button, Form } from 'semantic-ui-react';
// import { useMutation } from '@apollo/react-hooks';
// import gql from 'graphql-tag';



// function Register(props) {
//     const [errors, setErrors] = useState({});
//     const [values, setValues] = useState({
//         username: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });

//     const [addUser, { loading }]= useMutation(REGISTER_USER, {
//         update(_, result) {
//             console.log(result);
//             props.history.push('/');
//         },
//         onError(err) {
//             console.log(err.graphQLErrors[0].extensions.exception.errors);
//             setErrors(err.graphQLErrors[0].extensions.exception.errors);
//         },
//         variables: values
//     });

//     const onSubmit = (event) => {
//         event.preventDefault();
//         addUser();
//     };

//     return (
//         <div className = "form-container">
//             <Form onSubmit={onSubmit} noValidate className={loading ? 'loading' : ''}>
//                 <h1>Register</h1>
//                 <Form.Input
//                     label="Username"
//                     placeholder="Username.."
//                     name="username"
//                     type="text"
//                     value={values.username}
//                     error={errors.username ? true : false}
//                     onChange={onChange}
//                     />
//                     <Form.Input
//                     label="Email"
//                     placeholder="Email.."
//                     name="email"
//                     type="email"
//                     value={values.email}
//                     error={errors.email ? true : false}
//                     onChange={onChange}
//                     />
//                     <Form.Input
//                     label="Password"
//                     placeholder="Password.."
//                     name="password"
//                     type="password"
//                     value={values.password}
//                     error={errors.password ? true : false}
//                     onChange={onChange}
//                     />
//                      <Form.Input
//                     label="Confirm Password"
//                     placeholder="Confirm Password.."
//                     name="confirmPassword"
//                     type="password"
//                     value={values.confirmPassword}
//                     error={errors.confirmPassword ? true : false}
//                     onChange={onChange}
//                     />
//                     <Button type="submit primary">
//                         Register 
//                     </Button>
//             </Form>
//             {Object.keys(errors).length > 0 && (
//                 <div className="ui error message">
//                 <ul className="list">
//                     {Object.values(errors).map((value) => (
//                         <li key={value}>{value}</li>
//                     ))}
//                 </ul>
//             </div>
//             )}
//         </div>
//     );
// }

// const REGISTER_USER = gql`
//     mutation register(
//         $username: String!
//         $email: String!
//         $password: String!
//         $confirmPassword: String!
//     ) {
//         register(
//             registerInput: {
//                 username: $username
//                 email: $email
//                 password: $password
//                 confirmPassword: $confirmPassword
//             }
//         ) {
//             id 
//             email 
//             username 
//             createdAt 
//             token
//         }
//     }
// `

// export default Register;
