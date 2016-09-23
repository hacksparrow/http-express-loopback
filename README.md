# user-management

1. Extend base User model

2. Add readers

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

  ii. Update user details

  ```
  {
    "nickName": "Vicky"
  }
  ```

5. Logout


## License

[MIT](LICENSE)
