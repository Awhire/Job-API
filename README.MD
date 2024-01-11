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


