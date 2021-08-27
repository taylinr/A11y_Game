import { object, string } from "yup";
export default object().shape({
  type: string().required(),
  name: string().required(),
  email: string().email().required(),
  text: string().required(),
});
