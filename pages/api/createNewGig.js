var admin = require("firebase-admin");

const credentials = {
  "type": "service_account",
  "project_id": "anyaprofile-602c2",
  "private_key_id": "d3b6b0f9e478c182265a3e77dd73583f0f78eaa8",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0QT7nAvrh7Zn4\nxxXjE1HFEOB8KaGWV/5PlCkE85nDTRGH+wtUhdaCR58B+PhyriPSRyzmWeFOTBZH\nKqGber4m3BkQ3WpoMUWf1PQt0uCTNHvOS9oeBzBfb1lsuzKMxrn9jRWQG8dyUQtU\n920eN66t4QRFyx3JdJLRMX+bD40ydcUm660Z7aXJhJv2K/8D916+iY94ShQnB7wH\nlDB0m9HCuBNQ3RwIp3cDaSniFHz/QPMe6WS4E64jUHLseuG6Bpl5Ky9Mgba1tupV\nCrTkgBLRIF33YNWFg4hTnEKKoqyIC2+LCA0NwEMZrA9QK2AFjbe+hDTnLTHw9l6e\nDGOka/RrAgMBAAECggEAJNHrEm82Zi4NtJaeLutEWbfP0y0B198TkJfYJS3Ja+5z\nNU6fit1n6ubMYS/FOE+/+3UUg906O68pIdJgfoz9CJ0O9bX0xWHDMhni4vVfcFJZ\nM9Oks1uOkwAAyUgX1E/HsDZAgFZcUEqjwPBltrVzFguPvt31sLACSX8N7NOpaPPy\nssCAPZqgk5L4H58QeCrWvqkDoZ/mAy4cWRSlytczk5JDBc8crdeRSKpiZ1fFbSNu\nvT1rIF5Du99z9U9FWS5sY+jS4qmPO9QGEsJHj4Z2nrUXgH6RojBjZBR+Mi8NoJzI\n6zXJdf9Eoi8VNXaierjvEbHFqhjNN89jwSTjXsC+EQKBgQD8T4YkJIA0/w8Np2ld\nFJ/f9FF9zmaS6uiv9dr8NJGGOM+WyA59ho+ZtjqvwogMULAcLcVUHmYIEBmIVx1y\nycLri30iqEGiAzWaoy8DnNBwloGWz2b1tyZu/2V7OJ0r00kIdymvi/Dpqu44/jT1\naKQM0+SjgX7v0kH2CIw6GVbfowKBgQC24/6xBPogEZYg0SgY/ZA8J959vBpRgJRR\njwSDVWt9TRmaJ5VChvvneHG2WMyyrV0dObDNp5enwVhihxNgW67LslZHUiWKQh05\nJyIKPnzIZTGP9LS0LAchPKgYrQrXeUJ/Zva7+p2FlDplp+xvcbmdjn3Y4a9ECier\n3iMBERNEmQKBgFOS08/s9zqWsZnINjJKvpokB0owr/FCNkjymtKnZvyanMhJA+O4\nSqCTp+TH/uB1aaAr2Qz/9LP/ATYUBQEcq5/x2EU+jl7nyT2rh8seijyA3fPiRyxk\nuipSFn82RXlaxvoy3m/zXp1HrRjbuxb+zjghh75RCobNkmO4eRpVgl0ZAoGBAKlv\nIaaHsN4CzO3MN3SnfHdujD46BLva/g1tDMZLXZCw2/Ynk60Vdswjll1TeRhTaf9I\nUhbEm8grZCGrd/T+GzrVFf9vCB5FT+OB8JRC/cF9lmQCVWLRoy1Uj3qE3ZVv3n4/\nOng+Hq8A+vTwlCdO2aIwv0AtHP1Q1x3vZsh3ND2JAoGAX+HEXtSDUsvByDXdE4E1\n1lRAX/narFAj29h+GuhVUXJ7l2J0RErDGbxLhHiTat/QOcIiHWQ8dPYiO3/ozEqR\nH1oFnF5DixTOC9+6iunWkrZzl5ebXPbiDwg0Y1iVWK01oQ3Se1pfBTRC7orybag2\nO3BnVqBq6ZyG6z7OdScjlrM=\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-d7rmf@anyaprofile-602c2.iam.gserviceaccount.com",
  "client_id": "100275592868813159904",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-d7rmf%40anyaprofile-602c2.iam.gserviceaccount.com"
}

!admin.apps.length && admin.initializeApp({
  credential: admin.credential.applicationDefault(credentials),
  databaseURL: "https://anyaprofile-602c2-default-rtdb.europe-west1.firebasedatabase.app"
});


export default function handler(req, res) {
  admin.firestore().collection("requests").get().then(snapshot => {
    let requests = []
    snapshot.forEach(doc => {
      requests.push(doc.data())
    })
    res.status(200).json({ req: JSON.stringify(requests) })
  })

}