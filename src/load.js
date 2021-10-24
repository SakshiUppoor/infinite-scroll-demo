import { COLLECTION_ID } from "./config";
var posts = require('./mock-data.json');

const addPosts = (appwrite) => {
    posts.forEach((post) => {
        let promise = appwrite.database.createDocument(COLLECTION_ID, post);
        promise.then(function (response) {
            console.log(response); // Success
        }, function (error) {
            console.log(error); // Failure
        });
    });
    return true;
}

export default addPosts;