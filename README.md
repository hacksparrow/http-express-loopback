# Access Control

1. Create new model **pet**

2. Acess Control

  i. Add pets

    ```
    { "name": "Neo", "type": "cat" }
    ```

    ```
    { "name": "Bud", "type": "dog" }
    ```

  ii. List pets

  iii. Delete pet

  iv. Configure ACL for **pets** model

    ```
    "acls": [
      {
        "principalType": "ROLE",
        "principalId": "$everyone",
        "permission": "DENY"
      },
      {
        "principalType": "ROLE",
        "principalId": "$authenticated",
        "permission": "ALLOW",
        "property": "create"
      },
      {
        "principalType": "ROLE",
        "principalId": "$authenticated",
        "permission": "ALLOW",
        "property": "find"
      }
    ],
    ```

  v. List pets

  vi. Add user

    ```
    {
      "nickName": "Nicky",
      "username": "yolodude",
      "email": "yolo@swag.org",
      "password": "c2345c24553435"
    }
    ```

  vii. Login user

    ```
    {
      "username": "yolodude",
      "email": "yolo@swag.org",
      "password": "c2345c24553435"
    }
    ```

  viii. Create pets

  ix. List pets

  x. Delete pet

  xi. Log out user

  xii. List pets


## Links

[Controlling data access](https://docs.strongloop.com/display/public/LB/Controlling+data+access)
[ACL generator](https://docs.strongloop.com/display/public/LB/ACL+generator)

## License

[MIT](LICENSE)
