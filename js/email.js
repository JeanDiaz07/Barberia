const nodemailer = require('nodemailer');

// Configuración del transporte para Gmail
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'Jean.diaz0907@gmail.com',
        pass: 'Dinky2001@'
    }
});

// Detalles del correo electrónico
let mailOptions = {
    from: 'Jean.diaz0907@gmail.com',
    to: 'jdonalds20@gmail.com',
    subject: 'Prueba de envío de correo desde Node.js',
    text: 'Hola, este es un correo de prueba enviado desde Node.js usando Gmail.'
};

// Envío del correo electrónico
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log('Error al enviar el correo electrónico:', error);
    } else {
        console.log('Correo electrónico enviado:', info.response);
    }
});
