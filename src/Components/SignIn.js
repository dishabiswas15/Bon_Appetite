import { useFormik } from "formik";
import { signUpSchema } from "../schemas";
import { Link } from "react-router-dom";

// const initialValues =
const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    //initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="flex justify-items-center justify-center mt-14 mb-4">
      <div className="w-full max-w-md">
        <img
          className="h-28 m-6 ml-36"
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1cRtvCT135Bz-t4KNlb8OytZo7y87UjAXw&usqp=CAU"
        />
        <form className="mb-6" onSubmit={formik.handleSubmit}>
          <div className="">
            <label className="flex font-semibold pb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              autoComplete="off"
              id="name"
              name="name"
              placeholder="Name"
              className="border border-yellow-300 w-full p-2 rounded-md focus:border-yellow-600 focus:border-2 focus:outline-none"
              onChange={formik.handleChange}
              value={formik.values.name}
              onBlur={formik.handleBlur}
            />
            {formik.errors.name && formik.touched.name ? (
              <p className="form-error">{formik.errors.name}</p>
            ) : null}
          </div>
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
            <label
              className="flex font-semibold mt-4 pb-1"
              htmlFor="confirm_password"
            >
              Confirm Password
            </label>
            <input
              type="password"
              autoComplete="off"
              id="confirm_password"
              name="confirm_password"
              placeholder="Confirm Password"
              className="border border-yellow-300 w-full p-2 rounded-md focus:border-yellow-600 focus:border-2 focus:outline-none"
              onChange={formik.handleChange}
              value={formik.values.confirm_password}
              onBlur={formik.handleBlur}
            />
            {formik.errors.confirm_password &&
            formik.touched.confirm_password ? (
              <p className="form-error">{formik.errors.confirm_password}</p>
            ) : null}
          </div>
          <div>
            <Link to="/">
              <button
                type="submit"
                disabled={!formik.isValid}
                className="flex bg-yellow-400 text-slate-800 hover:bg-yellow-600 rounded-md font-semibold px-10 py-3 text-center ml-36 mt-11"
              >
                Submit
              </button>
            </Link>
          </div>
        </form>

        <p className="sign-up pl-20 pb-16 font-medium text-yellow-700">
          Already have an account?{" "}
          <Link to="/logIn" className="hover:underline">
            Login
          </Link>{" "}
          Now
        </p>
      </div>
    </div>
  );
};
export default SignIn;
