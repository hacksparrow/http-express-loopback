# http-basic

`index.js` is a basic HTTP server in Node.js created using the [http](https://nodejs.org/api/http.html) module.

Run it:

```
node index.js
```

## Questions

1. How do we detect the request method (GET, POST, PUT etc.)?
2. How do we find out the requested URL?
3. How do we send HTML content?
4. How do we send an HTML file?
5. How do we send images, CSS, and other files?
6. How do we set the HTTP status code?
7. How do we set HTTP response headers?
8. How do we create cookies?
9. How do we read cookies?
10. How do we create a REST-ful API?

Answers are in the numerically named `.js` files.

## Links

* [Anatomy of an HTTP Transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
* [http.IncomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage)
* [http.ServerResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse)
* [http module](https://nodejs.org/api/http.html)
* [fs.createReadStream](https://nodejs.org/api/fs.html#fs_fs_createreadstream_path_options)
* [stream module](https://nodejs.org/api/stream.html)
* [response.statusCode](https://nodejs.org/api/http.html#http_response_statuscode)
* [response.statusMessage](https://nodejs.org/api/http.html#http_response_statusmessage)
* [response.setHeader](https://nodejs.org/api/http.html#http_response_setheader_name_value)

## License

[MIT](LICENSE)
