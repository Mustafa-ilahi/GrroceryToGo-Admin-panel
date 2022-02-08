function storeData(email, name, role) {
  return {
    type: "ADD_DATA",
    name: name,
    email: email,
    role: role,
  };
}

function removeData() {
  return {
    type: "REMOVE_DATA",
  };
}

export { storeData, removeData };
