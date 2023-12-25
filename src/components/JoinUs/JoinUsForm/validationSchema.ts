import { boolean, object, string } from "yup";

import {
  onlyTextAndTabsRegex,
  emailRegex,
  phoneRegex,
} from "@/shared/utils/regularExpressions";

const validationSchema = object({
  name: string()
    .required("Please, enter your name")
    .matches(onlyTextAndTabsRegex, "Incorrect name"),
  email: string()
    .required("Please, enter your email")
    .max(50)
    .matches(emailRegex, "Incorrect email"),
  position: string()
    .required("Please, enter desired position")
    .matches(onlyTextAndTabsRegex, "Incorrect email"),
  phone: string()
    .required("Please, enter your phone number")
    .matches(phoneRegex, "Incorrect Phone"),
  message: string()
    .max(500, "Maximum allowed number of characters - 500")
    .default(""),
  confirm: boolean().oneOf([true], "Please, give consent").default(false),
});

export default validationSchema;
