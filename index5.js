let token = "eyJhbGciOiJSUzI1NiIsImtpZCI6ImNiNDA0MzgzODQ0YjQ2MzEyNzY5YmI5MjllY2VjNTdkMGFkOGUzYmIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNjA3OTIxMDQ0NDUyLTI2MWczZzlvYmVlY2NocnNqdXZhanZ2ajRjNHZ0Zmt1LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNjA3OTIxMDQ0NDUyLTI2MWczZzlvYmVlY2NocnNqdXZhanZ2ajRjNHZ0Zmt1LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAwMTcyODQxODYyMDE2MTYzOTAyIiwiZW1haWwiOiJyYWpwdXRhbmtpdDIyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiNks5cWd1UnpQNVNWcWtIQ3dNQXlvZyIsIm5hbWUiOiJBbmtpdCBLdW1hciBSYWpwb290IiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdqTmtVdmtQRHRLcUl1bm56QVoydFdKdlBZMzNhQmRNY2psamhiWmJVWT1zOTYtYyIsImdpdmVuX25hbWUiOiJBbmtpdCIsImZhbWlseV9uYW1lIjoiS3VtYXIgUmFqcG9vdCIsImxvY2FsZSI6ImVuIiwiaWF0IjoxNTgzOTE4NzQ5LCJleHAiOjE1ODM5MjIzNDksImp0aSI6IjJmZjBmZjRlZDkxNjliNzk0ZjNlZjU5MWNmMDA0YWUwZjYxNzYxY2UifQ.RrAD_qGzejLXog8PSZpCeeYREH1MV5cBBAFQC8yrprw7CpuKxjPJ2hAwLx9qHqVOY-mX2Ih8LfzVQKF2qUPqGJRHDJQmnfYaJoecHCJMYMG5aFQRBqcDq3HzTyWVue663LM_OBPQHTGuvqS8RjGz5ITNXpdwRSVYzbZdG3Jvm7ZJdVp64_lNXHAx-0JWl89enABHk8DCMmZdGkk_OgUqRqV0l0w447xiqArhDIkeHjzEuJfUfqngWGhA2OSKWY6eAshKlZbPDsdhZ3ElBwO0h1wNWc4TlmPe38SCa84GXoiU2O128yeGbJDVdBLO6YWzWu8NJCunGxaNP9Di-D375w"
const CLIENT_ID = "607000044452-001g3g9obeecxxxxxxxxjvvj4c4vxxku.apps.googleusercontent.com"
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);
async function verify() {
    try {
const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        console.log(payload)
    } catch (error) {
        console.log(error)
    }
}
verify()