// start.js setup from learnnode.com by Wes Bos
import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config({ path: 'variables.env' });
import indexRouter from './routes/index.js';

// import dotenv from 'dotenv';
// import  { GoogleSpreadsheet}  from 'google-spreadsheet';
// dotenv.config({ path: '../variables.env' });

// export const getDataPromise = async () => {
//   // the unique id of the google sheet
//     const doc = new GoogleSpreadsheet(
//     "1UYD7M3xkrMlbbKorm_6-YaLawDPNJui8mY_LJrhPBBE"
//   );
  
//   // connect with Google sheets
//   await doc.useServiceAccountAuth({
//       client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
//       private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
//   })

//   await doc.loadInfo();
//   // only get the first sheet
//   const sheet = doc.sheetsByIndex[0];
  
//   // get all the data from this sheet.
//   const rows = await sheet.getRows();

//   // only pass on the row data from the sheets
//   const filteredRows = rows.map((row) => row._rawData);
  
//   return filteredRows;
// };

// (async function () {
//   // getDataPromise();
//   //   getDataPromise().then(v => console.log(v));
//     const rows = await getDataPromise();
//     console.log(rows);
// })();








const app = express();

// support json encoded and url-encoded bodies, mainly used for post and update
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.set('port', process.env.PORT || 3010);
const server = app.listen(app.get('port'), () => {
  console.log(`🍿 Express running → PORT ${server.address().port}`);
});