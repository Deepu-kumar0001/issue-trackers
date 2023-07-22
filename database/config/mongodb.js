const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://mongodb+srv://dkgupta807671:qBqRJnd2GCRjqj3n@cluster0.tdt5kxr.mongodb.net/?retryWrites=true&w=majority?retryWrites=true&w=majority'
async function getEmpData() {
    let client = await MongoClient.connect(url);
    let connection = client.db('issueTracker'); // Establish connection
    return connection.collection('IssueTracker2023'); // creating a collection and naming it also
}

module.exports = getEmpData;