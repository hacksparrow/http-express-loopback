# Data Sources

1. Demonstrate behavior of memory data source

2. Add data source manually

  Official connectors for: Cloudant, DashDB, DB2, Informix, Memory, MongoDB, MySQL, Oracle, PostgreSQL, Redis, SQL Server, SQLite3.

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

3. Add data source from the commandline

  ```
  slc loopback:datasource <name>
  ```

4. Switch data source for a model

## License

[MIT](LICENSE)
