const logIn = () => {
  // remove button
  const btn_lanjut = document.getElementById("log_in");
  btn_lanjut.parentElement.removeChild(btn_lanjut);

  // add paragraph
  const p = document.createElement("p");
  p.className = "tulisan_login";
  p.innerHTML = "Silakan Log In";
  const div = document.getElementsByTagName("div")[0];
  div.appendChild(p);

  // add Log In Form
  const form = document.createElement("form");
  div.appendChild(form);

  // add label_username
  const label_username = document.createElement("label");
  label_username.innerHTML = "Username";
  form.appendChild(label_username);

  // add input_username
  const input_username = document.createElement("input");
  input_username.type = "text";
  input_username.name = "username";
  input_username.className = "form_login";
  form.appendChild(input_username);

  // add label_password
  const label_password = document.createElement("label");
  label_password.innerHTML = "Password";
  form.appendChild(label_password);

  // add input_password
  const input_password = document.createElement("input");
  input_password.type = "password";
  input_password.name = "password";
  input_password.className = "form_login";
  form.appendChild(input_password);

  // add log in button
  const btn_input = document.createElement("input");
  btn_input.type = "submit";
  btn_input.className = "tombol_login";
  form.appendChild(btn_input);
};
