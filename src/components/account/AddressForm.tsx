'use client'
import { useFormik } from "formik";
import * as Yup from "yup";

const AddressForm = () => {
  const formik = useFormik({
    initialValues: { firstName: "", lastName: "", country: "", city: "", phone: "" },
    validationSchema: Yup.object({
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      country: Yup.string().required("Country is required"),
      city: Yup.string().required("City is required"),
      phone: Yup.string().required("Phone is required"),
    }),
    onSubmit: (values) => {
      console.log("Address saved:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Address Information</h2>

      <div>
        <label className="block font-medium">First Name</label>
        <input type="text" className="w-full p-2 border rounded" {...formik.getFieldProps("firstName")} />
      </div>

      <div>
        <label className="block font-medium">Last Name</label>
        <input type="text" className="w-full p-2 border rounded" {...formik.getFieldProps("lastName")} />
      </div>

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Save Address</button>
    </form>
  );
};

export default AddressForm;
