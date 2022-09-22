const app = require("./app");
const config = require("./app/config");

// start sever
const PORT = config.app.port;
app.listen(PORT, () => {
    console.log('Secver is running on port ${PORT}.');
});