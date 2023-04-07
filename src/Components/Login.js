import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import { Link } from "react-router-dom";
const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
    },
    
  });
  console.log("props",formik);
  return (
    <div className="flex justify-items-center justify-center mt-14 mb-4">
      <div className="w-full max-w-md">
        <img
          className="h-28 m-6 ml-36"
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1cRtvCT135Bz-t4KNlb8OytZo7y87UjAXw&usqp=CAU"
        />
        <form className="mb-6" onSubmit={formik.handleSubmit}>
          <div>
            <label className="flex font-semibold mt-4 pb-1" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              autoComplete="off"
              id="email"
              name="email"
              placeholder="Email"
              className="border border-yellow-300 w-full p-2 rounded-md focus:border-yellow-600 focus:border-2 focus:outline-none"
              onChange={formik.handleChange}
              value={formik.values.email}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <p className="form-error">{formik.errors.email}</p>
            ) : null}
          </div>
          <div>
            <label className="flex font-semibold mt-4 pb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              autoComplete="off"
              id="password"
              name="password"
              placeholder="Password"
              className="border border-yellow-300 w-full p-2 rounded-md focus:border-yellow-600 focus:border-2 focus:outline-none"
              onChange={formik.handleChange}
              value={formik.values.password}
              onBlur={formik.handleBlur}
            />
            {formik.errors.password && formik.touched.password ? (
              <p className="form-error">{formik.errors.password}</p>
            ) : null}
          </div>

          <div>
            {/* <Link to="/"> */}
              <button
                type="submit"
                onClick={()=>{
                  if(formik.dirty){
                    if(formik.values.email=="biswas.disha15@gmail.com" && formik.values.password=="123456"){
                      alert("Successfully logged in !!")
                      window.location.assign("/");
                    }
                    else{
                      alert("Invalid User Id!!")
                    }
                  }
                  
                }}
                className="flex bg-yellow-400 text-slate-800 hover:bg-yellow-600 rounded-md font-semibold px-10 py-3 text-center ml-36 mt-11"
              >
                Submit
              </button>
            {/* </Link> */}
          </div>
        </form>
        <p className="login pl-20 pt-6 pb-16 font-medium text-yellow-700">
          Don't have an account?{" "}
          <Link to="/signIn" className="hover:underline">
            Sign up
          </Link>{" "}
          Now
        </p>
      </div>
    </div>
  );
};
export default Login;
