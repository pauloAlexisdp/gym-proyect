export default {
  register: {
    validation: {
      messages: {
        name: "name is required string",
        lastname: "lastname is required string",
        email: "email is required string",
        password: "password is required string",
      },
    },
  },
  login: {
    validation: {
      messages: {
        email: "email is required string",
        password: "password is required string",
      },
    },
  },
  service: {
    email_in_use: "El email ya está registrado",
    invalid_credentials: "Credenciales inválidas",
    inactive_user: "Usuario inactivo",
  },
};