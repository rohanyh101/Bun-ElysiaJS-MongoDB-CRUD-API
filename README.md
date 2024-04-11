# Elysia with Bun runtime

## Getting Started
To get started with this template, paste this command into your terminal:
```bash
bun create Elysia ./my_app
```

## Development
To start the development server run the following:
```bash
bun run dev
```

Open http://localhost:3000/ with your browser to see the result.

## To verify all endpoints execute the following,

1. GetUsers
```powershell
curl --location --request GET 'localhost:3000/api/v1/users' --header 'Content-Type: application/json'
```

2. GetUser
```powershell
curl --location --request GET 'localhost:3000/api/v1/users/66131fbc96d5c863f791b57e' --header 'Content-Type: application/json'
```

3. AddUser
```powershell
curl --location --request POST 'localhost:3000/api/v1/users' `
>> --header 'Content-Type: application/json' `
>> --data '{ "name": "rohan", "age": 21, "email": "rohan@gmail.com", "password": "56321", "admin": true }'
```

4. UpdateUser
```powershell
curl --location --request PUT 'localhost:3000/api/v1/users/661320de96d5c863f791b586' `
>> --header 'Content-Type: application/json' `
>> --data '{ "name": "natasha", "age": 21, "email": "natasha@gmail.com", "password": "11221", "admin": false }'
```

5. DeleteUser
```powershell
curl --location --request DELETE 'localhost:3000/api/v1/users/661320de96d5c863f791b586' --header 'Content-Type: application/json'
```




 
