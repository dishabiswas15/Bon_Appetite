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
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="">
          <label className="flex" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            autoComplete="off"
            id="name"
            name="name"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.errors.name && formik.touched.name ? (
            <p className="form-error">{formik.errors.name}</p>
          ) : null}
        </div>
        <div>
          <label className="flex" htmlFor="email">
            E-mail
          </label>
          <input
            type="email"
            autoComplete="off"
            id="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? (
            <p className="form-error">{formik.errors.email}</p>
          ) : null}
        </div>
        <div>
          <label className="flex" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            autoComplete="off"
            id="password"
            name="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password ? (
            <p className="form-error">{formik.errors.password}</p>
          ) : null}
        </div>
        <div>
          <label className="flex" htmlFor="confirm_password">
            Confirm Password
          </label>
          <input
            type="password"
            autoComplete="off"
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirm Password"
            onChange={formik.handleChange}
            value={formik.values.confirm_password}
            onBlur={formik.handleBlur}
          />
          {formik.errors.confirm_password && formik.touched.confirm_password ? (
            <p className="form-error">{formik.errors.confirm_password}</p>
          ) : null}
        </div>
        <div>
            <Link to="/">
          <button type="submit" className="flex" >
            Submit
          </button>
          </Link>
        </div>
      </form>
      <p className="sign-up">
        Already have an account? <a href="#">sign in Now</a>
      </p>
    </div>
  );
};
export default SignIn;
