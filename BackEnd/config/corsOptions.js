const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

const corsOptions = {
    origin: (origin, callback) => {
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true, // access-control-allow-credentials:true
    optionsSuccessStatus: 200 // Corrected the key name
};

module.exports = corsOptions;
