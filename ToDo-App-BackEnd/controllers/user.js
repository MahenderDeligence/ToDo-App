const User = require("../models/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const nodemailer = require("nodemailer")
const OTP = require("../models/otp")
// const { use } = require("../routes/user")
// const { response, response } = require("express")

const registerUser = async (req, res) => {
    try {
        let { name, email, password } = req.body

        //check whether user exsist or not
        const userExsists = await User.findOne({ email })
        if (userExsists) {
            throw "User alreadyy exsists"
        }


        //if dont exsist, then encypt the password and save the user
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        console.log(hashedPassword);

        const user = new User({
            name, email, password: hashedPassword
        })

        const savedUser = await user.save()

        res.status(200).json({
            name: savedUser.name, email: savedUser.email
        })


    } catch (error) {
        res.status(400).json({ messgae: error })
    }
}

const loginUser = async (req, res) => {
    try {
        let { email, password } = req.body

        //check whether we have this email registered
        const user = await User.findOne({ email })

        const passwordCorrect = await bcrypt.compare(password, user.password)
        if (user && passwordCorrect) {
            const token = generateToken(user._id)
            res.status(200).json({
                id: user._id,
                name: user.name,
                email: user.email,
                token
            })
        } else {
            throw "Wrong credentials"
        }

        //if registered check password


    } catch (error) {
        res.status(400).json({ messgae: error })
    }
}


const forgotPass = async (req, res) => {
    // console.log(req.body.email);

    let data = await User.findOne({email: req.body.email});
    // console.log(data);
    const responseType = {};
    if(data){
        let otpcode = Math.floor(1000 + Math.random() * 9000);
        // console.log(otpcode);
        const otpData = new OTP({
            email: req.body.email,
            code: otpcode,
            expireIn: new Date().getTime() + 300*1000
        });
        // console.log(code);
        let otpResponse = await otpData.save();
        console.log(otpResponse);
        responseType.statusText = "success";
        sendMail(req.body.email, otpcode);
        responseType.message = "check your email Id !!";
    }
    else{
        responseType.statusText = "error";
        responseType.message = "email Id not exist !!";
    }
    res.status(200).json(responseType)
}

const changePass = async (req, res) => {
    let data = await OTP.find({email:req.body.email, code:req.body.otpcode});
    const responseType = {};
    if(data){
        let currentTime = new Date().getTime();
        let diff = data.expireIn - currentTime;
        if(diff < 0){
            responseType.message = "Token expire";
            responseType.statusText = "error";
        }
        else {
            let user = await User.findOne({email:req.body.email})
            // let user = User.findOne({email:req.body.email})
            user.password = req.body.password;
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(user.password, salt)
            user.password = hashedPassword;
            user.save();
            responseType.message = "Password change successfully"
            responseType.statusText = "Success";
        }
    } 
    else{
        responseType.message = "Invalid OTP !!"
        responseType.statusText = "Error !!";
    }    
    res.status(200).json(res.status(200).json(responseType));
}

const sendMail = async ( req, res ) => {
    let mailTransporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mahender.deligence@gmail.com',
            pass: 'Curren@830'
        }
    });
     
    let mailDetails = {
        from: 'mahender.deligence@gmail.com',
        to: 'mahipratap321@gmail.com',
        subject: 'Reset OTP mail',
        text: 'Node.js testing mail for'+req.otpcode 
    };
     
    mailTransporter.sendMail(mailDetails, function(err, data) {
        if(err) {
            console.log('Error Occurs');
        } else {
            console.log('Email sent successfully');
        }
    });
}




const generateToken = (id) => {
    let token = jwt.sign({ id: id }, "DELIGENCE")
    return token
}

module.exports = { registerUser, loginUser, forgotPass, changePass }
