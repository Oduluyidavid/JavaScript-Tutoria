// import sendEmail from "./sendEmail"; // This will work on typescript
const sendEmail = require("./sendEmail");

// const database = users.findAll()

const users = [
  {
    id: 1,
    userName: "abayomiganiy",
    email: "adeleke@gmail.com",
    password: "grirhejohioheruiuibwei",
    fullName: "Adeleke Adeyinka",
    hasPaid: true,
  },
  {
    id: 2,
    userName: "adegoke",
    email: "adegoke@gmail.com",
    password: "jkgiofhofuhohdfpinpfk",
    fullName: "Adegoke Isreal",
    hasPaid: true,
  },
  {
    id: 3,
    userName: "olamide",
    email: "olamide@gmail.com",
    password: "jkhbhdjbiefhbifd",
    fullName: "Maria Olamide",
    hasPaid: true,
  },
  {
    id: 4,
    userName: "Kasali",
    email: "kasali@gmail.com",
    password: "jkhbhdjbiefhbifd",
    fullName: "Ibrahim Kasali",
    hasPaid: false,
  },
];

// users.map((data) => {
//     console.log("User ID: ", data.id)
//     console.log("Username: ", data.userName)
//     console.log("Email: ", data.email)
//     console.log("================================")
// })

// const user = users.find((data) => data.id === 1)
// console.log(user)

const paidUsers = users.filter(data => data.hasPaid === true)
// console.log(paidUsers);

const unpaidUsers = users.filter((data) => data.hasPaid === false);
// console.log(unpaidUsers);

unpaidUsers.map((data) => {
  sendEmail(
    data.email,
    "Experience unlimited service.",
    `Hello ${data.fullName}, Your paid plan is waitig for you, we are offering you a 50% discount on your next subscription`
  );
});

paidUsers.map((data)=>{
    sendEmail(
        data["email"],
        "Good turn deserve another.",
        `Hello ${data["fullName"]}, We urge you to renew your subscription, So as to experience more fascinating features on our platform`
    );

});


