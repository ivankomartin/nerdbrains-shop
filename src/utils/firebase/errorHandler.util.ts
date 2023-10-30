export const getErrorMessage = (error: { code?: string }): string => {
  switch (error.code) {
    case "auth/wrong-password":
      return "Incorrect password for email.";
    case "auth/user-not-found":
      return "No user associated with this email.";
    case "auth/email-already-in-use":
      return "Cannot create user, email already in use!";
    default:
      return "Oops.. something went wrong, contact support!";
  }
};
