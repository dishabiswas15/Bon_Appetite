import { useFormik } from "formik";
const SignIn = () =>{
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: values=>{
            console.log('Form data:', values);
        }
    })
    return(
        <div className="flex justify-center bg-red-400 p-2 m-2">
            <form onSubmit={formik.handleSubmit}>

                <label className="flex" htmlFor="name">Name</label>
                <input type='text' id='name' name= 'name' 
                onChange={formik.handleChange} 
                value={formik.values.name} />

                <label className="flex" htmlFor="email">E-mail</label>
                <input type='email' id='email' name= 'email'
                onChange={formik.handleChange} 
                value={formik.values.email} />

                <label className="flex" htmlFor="password">Password</label>
                <input type='text' id='password' name= 'password'
                onChange={formik.handleChange} 
                value={formik.values.password} />

                <button type='submit' className="flex">Submit</button>
            </form>
        </div>
    )
}
export default SignIn;