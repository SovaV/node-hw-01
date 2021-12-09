const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");

const argv = require("yargs").argv;

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts().then((data) => console.table(data));
      break;

    case "get":
      getContactById(id).then((getContact) => console.table(getContact));
      break;

    case "remove":
      removeContact(id).then((deletedContact) => console.table(deletedContact));
      break;

    case "add":
      addContact(name, email, phone).then((contacts) =>
        console.table(contacts)
      );
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

// ============== з COMMAND потрібно добавити в ДЖЕЙСОН ID: "" ==========================

// const { Command } = require("commander");
// const program = new Command();
// const {
//   listContacts,
//   getContactById,
//   addContact,
//   removeContact,
// } = require("./contacts");
// program
//   .option("-a, --action <type>", "choose action")
//   .option("-i, --id <type>", "user id")
//   .option("-n, --name <type>", "user name")
//   .option("-e, --email <type>", "user email")
//   .option("-p, --phone <type>", "user phone");

// program.parse(process.argv);

// const argv = program.opts();

// // TODO: рефакторить
// function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       listContacts().then((data) => console.table(data));
//       break;

//     case "get":
//       getContactById(id).then((getContact) => console.table(getContact));
//       console.log("id", id);
//       break;

//     case "remove":
//       removeContact(id).then((deletedContact) => console.table(deletedContact));
//       break;

//     case "add":
//       addContact(name, email, phone).then((contacts) =>
//         console.table(contacts)
//       );
//       break;

//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// }

// invokeAction(argv);
