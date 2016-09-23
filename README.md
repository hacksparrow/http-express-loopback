# Data Sources

1. Demonstrate behavior of memory data source

1. Add data source manually

  a. Edit `datasources.json`

    ```
      "localmongo": {
        "host": "192.168.1.2",
        "port": 9090,
        "url": "mongodb://username:password@hostname:port/database",
        "database": "mydb",
        "password": "pass",
        "name": "lol",
        "user": "admin",
        "connector": "mongodb"
      }
    ```

  b. Configure **pet** model to use _localmongo_

  c. Demonstrate proof of use of new data source

  d. Add another data source

2. Add data source from the commandline

  ```
  slc loopback:datasource <name>
  ```

3. Switch data source for a model

## License

[MIT](LICENSE)
