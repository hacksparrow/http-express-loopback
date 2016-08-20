# LoopBack Questions


1. **How does a basic LoopBack application look like?**

2. **Why should I use LoopBack?**

3. **Is LoopBack related to Express?**

4. **Ok, so how do we create LoopBack apps?**

  ```
  $ npm install strongloop -g
  $ slc -v
  $ slc loopback myapp
  ```

5. **Why are we installing `strongloop` instead of `loopback`, and why is the command named `slc`?**

6. **What are LoopBack middleware?**

   * [Defining middleware](https://docs.strongloop.com/display/public/LB/Defining+middleware)

7. **What are LoopBack components?**

   * [LoopBack components](https://docs.strongloop.com/display/public/LB/LoopBack+components)

8. **How do we create models for a LoopBack app?**

	Use the command: `slc loopback:model <modelName>` or manually create the files.
	
	* [Defining models](https://docs.strongloop.com/display/public/LB/Defining+models)
	* [Using built-in models](https://docs.strongloop.com/display/public/LB/Using+built-in+models)

9. **Where are the models stored?**

	Anywhere you want! Just make sure to provide LoopBack the appropriate data source.
	
	Use the command:  `slc loopback:datasource` or configure the `datasources.json` file.
	
	Official connectors for: Cloudant, DashDB, DB2, Informix, Memory, MongoDB, MySQL, Oracle, PostgreSQL, Redis, SQL Server, SQLite3.
	
	* [Connecting models to data sources](https://docs.strongloop.com/display/public/LB/Connecting+models+to+data+sources)

10. **Can LoopBack do model relations?**

	Yes, it can do BelongsTo, HasOne, HasMany, HasManyThrough, HasAndBelongsToMany, Polymorphic, Embedded relations.

 * [Creating model relations](https://docs.strongloop.com/display/public/LB/Creating+model+relations)

11. **Let's see an example of model relations.**

12. **LoopBack does a lot of work for me, can it also validate input for me?**

	* [Validating model data](https://docs.strongloop.com/display/public/LB/Validating+model+data)

13. **I wish LoopBack also implemented authentication and authorization, and access control for me.**

	Use the command: `slc loopback:acl` or manually configure the model's `.json` file.

	* [Authentication, authorization, and permissions](https://docs.strongloop.com/display/public/LB/Authentication%2C+authorization%2C+and+permissions)

14. **Is LoopBack secure?**

15. **What is Swagger? Is it related to "_YOLO SWAG_" in any way or manner?**

	![YOLO SWAG](./swag.jpg)

	`cd` to a LoopBack app directory and:
	
	```
	$ slc loopback:swagger
	```

	Swagger specification file at http://localhost:3000/explorer/swagger.json.
	
	* [Sample Swagger file](https://raw.githubusercontent.com/wordnik/swagger-spec/master/examples/v2.0/json/petstore-simple.json)
	* [Swagger generator](https://docs.strongloop.com/display/public/LB/Swagger+generator)

16. **LoopBack is just what I needed in my life, where can I learn more about it?**

	[https://docs.strongloop.com](https://docs.strongloop.com)


## License

[MIT](LICENSE)
