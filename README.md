## Name of App: x

Apache Log Analyser

## Authors

* Vaybhav Shaw, shaw0162@umn.edu
* Lakshya Goel, goel0072@umn.edu
* Nishka Monteiro, monte299@umn.edu
* Akifumi Nakamachi, nakam052@umn.edu


## Link to Site

<https://tranquil-taiga-64587.herokuapp.com/>


## Description
Uploading and analysing Apache Web Server Logs and visualising details such as :-
- Browser Pie Chart
- Average Data Size vs Time
- Number of Hits vs Time 
- File Type returned analysis

We have also predicted the number of hits at a specific time using logistical regression with a third degree polynomial.
Technologies used : Express, Node.JS, HandleBars, BULMA, HTML, JSON 


## Screenshots of Site

**[Add a screenshot of each key page (maximum 4)](https://stackoverflow.com/questions/10189356/how-to-add-screenshot-to-readmes-in-github-repository)
along with a very brief caption:**


![index](./screenshots/index.png)
![page1](./screenshots/page1.png)
![page2](./screenshots/page2.png)
![page3](./screenshots/page3.png)


## External Dependencies

- [jquery3.2.1](https://jquery.com/): parsing dom, form processing
- [d3.js](https://d3js.org/): to using nv.d3
- [nv.d3.js](http://nvd3.org/): generating graph, chart
- [moment.js](https://momentjs.com/): parsing time much easier than js default Date() class.
- [multer](https://github.com/expressjs/multer): sending data from client to sever
- [request](https://www.npmjs.com/package/request): controlling http?. Maybe default to express. But to prevent plagiarism, I write that
- [ua-parser-js](https://github.com/faisalman/ua-parser-js): parsing user agent easily
- [Sass](http://sass-lang.com/): css preprocessor
- [Ruby](https://www.ruby-lang.org/en/): to use Sass
- [jquery flip](http://nnattawat.github.io/flip/): to add flip animation


## Links to Test Data

This project requires user-submitted data.  If you have files or other scripts
that would be necessary (or helpful) for us to test your application, please
link to them here.  For example, if your project parses gzipped apache logs,
provide a few gzipped apache logs here.

* [log1](./test_data/log_have3XX_4XX.txt)
* [log2](./test_data/access_head1000.txt)
