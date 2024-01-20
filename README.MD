#### Project Setup

In order to spin up the project, in the root create .env with this two variabes, with your own values.

MONGO_URL
JWT_SECRET

After that run this command in your terminal/bash
/ npm install && npm start

Add MONGO_URL with correct value


#### Routers
- auth.js
- jobs.js

#### User Model
Email Validation Regex

```regex
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
```


#### Register Route

- Validate - name, email and password - with mongoose
- Hash Password (with bcryptjs)
- Save User
- Generate Tooken
- Send Response with Token


#### Login User
- Validate - email, password - in controller
- If email or password is missing, throw BadRequestError
- Find User
- Compare Passwords
- If no user or password does not match, throw UnauthenticatedError
- if correct, generate Token
- Send Response with Token


#### Mongoose Errors
- Validation Errors
- Duplicate (Email)
- Cat Error


#### Security
- helment
- cors
- xss-clean
- express-rate-limit