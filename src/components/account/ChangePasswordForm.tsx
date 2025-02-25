import { useFormik } from "formik";
import * as Yup from "yup";

const ChangePasswordForm = () => {
  const formik = useFormik({
    initialValues: { oldPassword: "", newPassword: "", confirmPassword: "" },
    validationSchema: Yup.object({
      oldPassword: Yup.string().required("Old password is required"),
      newPassword: Yup.string().min(6, "At least 6 characters").required("New password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], "Passwords must match")
        .required("Confirm password is required"),
    }),
    onSubmit: (values) => {
      console.log("Password update:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Change Password</h2>

      <div>
        <label className="block font-medium">Old Password</label>
        <input type="password" className="w-full p-2 border rounded" {...formik.getFieldProps("oldPassword")} />
        {formik.touched.oldPassword && formik.errors.oldPassword && <p className="text-red-500">{formik.errors.oldPassword}</p>}
      </div>

      <div>
        <label className="block font-medium">New Password</label>
        <input type="password" className="w-full p-2 border rounded" {...formik.getFieldProps("newPassword")} />
        {formik.touched.newPassword && formik.errors.newPassword && <p className="text-red-500">{formik.errors.newPassword}</p>}
      </div>

      <div>
        <label className="block font-medium">Confirm New Password</label>
        <input type="password" className="w-full p-2 border rounded" {...formik.getFieldProps("confirmPassword")} />
        {formik.touched.confirmPassword && formik.errors.confirmPassword && <p className="text-red-500">{formik.errors.confirmPassword}</p>}
      </div>

      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Update Password</button>
    </form>
  );
};

export default ChangePasswordForm;
