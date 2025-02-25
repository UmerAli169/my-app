import { useFormik } from "formik";
import * as Yup from "yup";

const ContactInformationForm = () => {
  const formik = useFormik({
    initialValues: { firstName: "", lastName: "", email: "" },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Contact Information</h2>

      <div>
        <label className="block font-medium">First Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <p className="text-red-500">{formik.errors.firstName}</p>
        )}
      </div>

      <div>
        <label className="block font-medium">Last Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <p className="text-red-500">{formik.errors.lastName}</p>
        )}
      </div>

      <div>
        <label className="block font-medium">Email</label>
        <input
          type="email"
          className="w-full p-2 border rounded"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500">{formik.errors.email}</p>
        )}
      </div>

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save Changes</button>
    </form>
  );
};

export default ContactInformationForm;
