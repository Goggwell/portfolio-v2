const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();

const PORT = process.env.PORT || 5000;
const USER = process.env.EMAIL_USER;
const PASS = process.env.EMAIL_PASS;

const app = express();

app.use(cors({ origin: "*" }));

// Middleware
app.use(express.static('public'));
app.use(express.json());

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: USER,
        pass: PASS,
    },
});

transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});

app.post("/send", (req, res) => {
    let form = new multiparty.Form();
    let data = {};
    form.parse(req, function (err, fields) {
        console.log(fields);
        Object.keys(fields).forEach(function (property) {
            data[property] = fields[property].toString();
        });
        console.log(data);
        const mail = {
            sender: `${data.name} <${data.email}>`,
            to: USER,
            subject: data.subject,
            text: `${data.name} <${data.email}> \n${data.message}`,
        };
        transporter.sendMail(mail, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send("Something went wrong.");
            } else {
                res.status(200).send("Email successfully sent to recipient!");
            }
        });
    });
});

app.route("/").get(function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});