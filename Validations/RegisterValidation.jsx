import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).max(10).required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required(),
  // Add role validation
  role: yup
    .string()
    .oneOf(["user", "admin", "super_admin"], "Invalid role")
    .required("Role is required"),
});
