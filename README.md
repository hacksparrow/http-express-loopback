# User Management

1. Built-in **User** model

2. Add users

  ```
  {
    "nickName": "Nicky",
    "username": "yolodude",
    "email": "yolo@swag.org",
    "password": "c2345c24553435"
  }
  ```

  ```
  {
    "nickName": "Mickey",
    "username": "mick",
    "email": "mick@jagger.org",
    "password": "4545534c53534c5"
  }
  ```

3. Login

  ```
  {
    "username": "yolodude",
    "email": "yolo@swag.org",
    "password": "c2345c24553435"
  }
  ```

4. Acess Control

  i. Show user details

    * Where id === owner
    * Where id !== owner

5. Logout

6. Extend built-in **User** model and create **reader** model

## License

[MIT](LICENSE)
