# Data Modeling

1. Create models manually

  a. Create **pet** model `.js` and `.json` files
  b. Update `model-config.json`
  c. Add pets

    ```
      {
        "name": "Neo",
        "type": "cat",
        "age": 1,
        "password": "623564524b243"
      }
    ```

    ```
      {
        "name": "Bud",
        "type": "dog",
        "age": 3,
        "password": "98347nk34k2342"
      }
    ```
    d. List pets
    e. Hide `password` field

2. Create models from the commandline

  ```
  slc loopback:model <name>
  ```

3. Hide built-in **User** model

## License

[MIT](LICENSE)
