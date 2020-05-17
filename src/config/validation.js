export const loginConstrains = {
  userEmail: {
    email: {
      message: "doesn't look like a valid email",
    },
  },
  userPassword: {
    length: {
      minimum: 6,
      message: 'must be at least 6 characters',
    },
  },
};
