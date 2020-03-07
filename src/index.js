const app = require("express")();
const options = {};
const server = require('http').createServer(options, app);
import bodyParser from 'body-parser';
var cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// server settings
const serverPort = process.env.PORT || 5080;
const registerPort = () => {
    console.log(`registering port ${serverPort}`);
    server.listen(serverPort, () => {
        console.log(`   \`- listening at ${server.address().port}`);
    });
}

const prefix = '/v1';

app.get(prefix + '/test', (req, res) => {
    res.status(200).send({
        result: "success",
        dtg: new Date().toUTCString()
    });
});

registerPort();
