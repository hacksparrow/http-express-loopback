# LoopBack Questions


1. **How does a basic LoopBack application look like?**

2. **Why should I use LoopBack?**

3. **Is LoopBack related to Express?**

4. **Ok, so how do we create LoopBack apps?**

  ```
  $ npm install loopback-cli -g
  $ lb -v
  $ lb
  ```

5. **What are LoopBack middleware?**

   * [Defining middleware](https://docs.strongloop.com/display/public/LB/Defining+middleware)

6. **What are LoopBack components?**

   * [LoopBack components](https://docs.strongloop.com/display/public/LB/LoopBack+components)

7. **How do we create models for a LoopBack app?**

	Use the command: `lb model <modelName>` or manually create the files.

	* [Defining models](https://docs.strongloop.com/display/public/LB/Defining+models)
	* [Using built-in models](https://docs.strongloop.com/display/public/LB/Using+built-in+models)

8. **Where are the models stored?**

	Anywhere you want! Just make sure to provide LoopBack the appropriate data source.

	Use the command:  `lb datasource` or configure the `datasources.json` file.

	Official connectors for: Cloudant, DashDB, DB2, Informix, Memory, MongoDB, MySQL, Oracle, PostgreSQL, Redis, SQL Server, SQLite3.

	* [Connecting models to data sources](https://docs.strongloop.com/display/public/LB/Connecting+models+to+data+sources)

9. **Can LoopBack do model relations?**

	Yes, it can do BelongsTo, HasOne, HasMany, HasManyThrough, HasAndBelongsToMany, Polymorphic, Embedded relations.

 * [Creating model relations](https://docs.strongloop.com/display/public/LB/Creating+model+relations)

10. **Let's see an example of model relations.**

11. **LoopBack does a lot of work for me, can it also validate input for me?**

	* [Validating model data](https://docs.strongloop.com/display/public/LB/Validating+model+data)

12. **I wish LoopBack also implemented authentication and authorization, and access control for me.**

	Use the command: `lb acl` or manually configure the model's `.json` file.

	* [Authentication, authorization, and permissions](https://docs.strongloop.com/display/public/LB/Authentication%2C+authorization%2C+and+permissions)

13. **Is LoopBack secure?**

14. **What is Swagger? Is it related to "_YOLO SWAG_" in any way or manner?**

	![YOLO SWAG](./swag.jpg)

	`cd` to a LoopBack app directory and:

	```
	$ lb swagger
	```

	Swagger specification file at http://localhost:3000/explorer/swagger.json.

	* [Sample Swagger file](https://raw.githubusercontent.com/wordnik/swagger-spec/master/examples/v2.0/json/petstore-simple.json)
	* [Swagger generator](https://docs.strongloop.com/display/public/LB/Swagger+generator)

15. **LoopBack is just what I needed in my life, where can I learn more about it?**

	[https://docs.strongloop.com](https://docs.strongloop.com)


## License

[MIT](LICENSE)
