const fs = require("fs").promises;
const path = require("path");

// const contactsPath = path.resolve("./db/contacts.json");
const contactsPath = path.join(__dirname, "./db/contacts.json");

// TODO: задокументировать каждую функцию
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const result = JSON.parse(data);
    return result;
  } catch (error) {
    console.error(error);
  }
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(data);
    const getContact = contacts.filter(({ id }) => id === contactId);
    return getContact;
  } catch (error) {
    console.error(error);
  }
}

async function removeContact(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const contacts = JSON.parse(data);
    const deletedContact = contacts.filter(({ id }) => id !== contactId);
    await fs.writeFile(
      contactsPath,
      JSON.stringify(deletedContact, null, 2),
      "utf8"
    );
    return deletedContact;
  } catch (error) {
    console.error(error);
  }
}

async function addContact(name, email, phone) {
  try {
    const data = await fs.readFile(contactsPath, "utf8");
    const newContact = {
      id: JSON.parse(data).length + 1,
      name,
      email,
      phone,
    };
    const contacts = JSON.parse(data).concat(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), "utf8");
    return contacts;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
