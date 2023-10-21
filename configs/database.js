const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = 'mongodb://user:password@0.0.0.0:27017/localizadb?authSource=admin';

// if(envConfig.config.db.tls === true){
//     let key = fs.readFileSync("C:/Users/MyUsername/Path/mongodb.pem");
//     let crt = fs.readFileSync("C:/Users/MyUsername/Path/mongodb.crt");
//     mongoose.connect("mongodb://localhost:27017/localizadb?ssl=true",{
//         server:{
//             "sslValidate": true,
//             "sslKey": key,
//             "sslCert": crt, // if you have one certificate you can use `sslCert` parameter
//         }
//     });
//    }else{
//      mongoose.connect(`mongodb://${dbUrl}`,options);
//    }

module.exports = db;