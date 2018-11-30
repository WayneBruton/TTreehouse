var express 			= require("express"),
		bodyParser		= require("body-parser"),
        nodemailer		= require("nodemailer"),
        Mailchimp = require('mailchimp-api-v3'),
        flash = require('connect-flash');
          app 			= express();
          
app.set("view engine", "ejs");

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const port = 8080 || process.env.PORT;

app.use(flash());

if (port === 8080) {
	require('dotenv/config');
  }



app.use(require("cookie-session")({
	secret: "Chester is awesome",
	resave: false,
	saveUninitialized: false
}));

app.get('/', (req, res) => {
    res.render('index');
});

//Body Parser Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.post('/subscribe', (req, res) => {
    
    let response = {
        success : 'Subscribed!',
        failure: 'There was a problem'
    }
 
    let subscribeInfo = req.body.subscribeInfo;
    let email = subscribeInfo.email;
    let firstName = subscribeInfo.FNAME;
    let lastName = subscribeInfo.LNAME;
    console.log(email, firstName, lastName);


    const api_key = process.env.MAILCHIMPAPI; // api key -
    const list_id = process.env.MAILCHIMPLISTID; // list id
    const mailchimp = new Mailchimp(api_key); // create MailChimp instance
    mailchimp.post(`lists/${list_id}`, { members: [{ // send a post request to create new subscription to the list
        email_address:email,
        merge_fields: {
            "FNAME": firstName,
            "LNAME": lastName
          },
        status: "subscribed"
    }]
    }).then((result) => {
        console.log(result);
    
        res.end(JSON.stringify(response.success));
        // return res.send(result);

    }).catch((error) => {
        console.log(error);
        res.end(JSON.stringify(response.failure));

        // return res.send(error);
    });

});

app.post('/send-email', (req,res) => {

    let response = {
        success : 'Subscribed!',
        failure: 'There was a problem'
    }
    // console.log(req.body.subscribeInfo);
    let firstName = req.body.subscribeInfo.Cname;
    let email = req.body.subscribeInfo.Cemail;
    let tel = req.body.subscribeInfo.Cphone;
    let message = req.body.subscribeInfo.Cmessage;
    // console.log(firstName, email, tel, message);
	const output = `
	<p>You have a new contact request</p>
	<h3>Contact Details</h3>
	<ul>
		<li>Name: ${firstName}</li><br>

		<li>Email: ${email}</li><br>
		<li>Telephone: ${tel}</li><br>

	</ul><br>
	<h3>Message</h3><br>
	<p>${message}</p>
	`;

	// console.log(output);

	let transporter = nodemailer.createTransport({

        host: process.env.MAILHOST,
        port: 465, //587

        secure: true, // true for 465, false for other ports
        auth: {

            user: process.env.MAILUSER, // generated ethereal user
            pass: process.env.MAILPASSWORD // generated ethereal password

        },
				tls: {
					rejectUnauthorized:false
				}
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Treehouse Contact Form" <lwayne@eccentrictoad.com>', // sender address
        to: 'behindthescenes@thetreehouse.org, lisa@thetreehousehm.org, wayne@eccentrictoad.com, waynebruton@icloud.com', // list of receivers
        subject: 'Treehouse Contact Request', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
					
        res.end(JSON.stringify(response.failure));
                        

        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
				console.log(info)

				console.log('SUCCESS');

                res.end(JSON.stringify(response.success));
                


    });
});


app.listen(port, process.env.IP, function(){
    console.log('Server has started....');
});