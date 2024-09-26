export const validateField = (name: string, value: string): string => {
  let error = "";

  if (value.trim() === "") {
    error = "This field is required";
  } else if (name === "name" && value.length < 2) {
    error = "The name must contain more than 2 characters";
  } else if (name === "name" && !/^[^\d]+$/.test(value)) {
    error = "Numbers or special characters are not allowed";
  } else if (
    name === "email" &&
    !value.match(/^\s*$|^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)
  ) {
    error = "Please enter a valid email";
  } 

  return error;
};
