export const welcomeEmail = (user: any) => {
  const email = {
    from: "<admin@restaurant.com>",
    to: user.email,
    subject: "Welcome",
    html: `<h1>Welcome ${user.name} thank you for registering to the TableTop restaurant</h1>`,
    text: `Wellcome ${user.name} thank you for registering to the TableTop restaurant`,
  };
  return email;
};
