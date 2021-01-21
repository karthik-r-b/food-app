const env = process.env.NODE_ENV || 'local';
const config = {
    local: {
        port: 8585,
        host: 'localhost',
        db: 'mongodb://localhost:27017/food-app',
        jwt: {
            expiresIn: '365 days',
            salt: '!@#$%^&*(',
        },
        charges: {
            deliveryPrice: 100,
            gst: 15,
        },
        googleClientId: '171663956137-oc4l4k5l86gigr1p3d4eqbphs65v92jq.apps.googleusercontent.com',
    },
    test: {
        port: 8585,
        host: 'localhost',
        db: 'mongodb://localhost:27017/food-app',
        jwt: {
            expiresIn: '365 days',
            salt: '!@#$%^&*(',
        },
        charges: {
            deliveryPrice: 100,
            gst: 15,
        },
    },
};
export default config[env];
