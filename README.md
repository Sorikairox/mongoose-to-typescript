# mongoose-to-typescript

It just create typescript classes from mongoose model or schema.\
It works with (MongooseType : TypescriptType):
- Number : number
- String : string
- Boolean : boolean
- Date : Date
- ObjectID (not _id) : Referenced model class

It assigns default value for each variable (especially classes instances, so you don't have any errors in angular with a damn object being undefined.
)
## Installation
```bash
$ npm install -g mongoose-to-typescript
```

## Usage
### Non-Interactive mode
Generates a Mongoose model, a REST controller and Express router :
```bash
$ mongoose-express-gen -m car -f carDoor:number,color -r
        create: ./models/cardModel.js
        create: ./routes/cardRoutes.js
        create: ./controllers/cardController.js
```

##### Options

  - `-m, --model <modelName>` - the model name.
  - `-f, --fields  <fields>` - the fields (name1:type,name2:type).
  - `-r, --rest` - enable generation REST.
  - `-t, --tree <tree>`        files tree generation grouped by (t)ype or by (m)odule

##### Available types
  - string
  - number
  - date
  - boolean
  - array
  - objectId

### Interactive mode

Generates a Mongoose model, a REST controller and Express router :
```bash
$ mongoose-gen
Model Name : car
Available types : string, number, date, boolean, array
Field Name (press <return> to stop adding fields) : door
Field Type [string] : number
Field Name (press <return> to stop adding fields) : color
Field Type [string] : 
Field Name (press <return> to stop adding fields) : owner
Field Type [string] : objectId
Reference (model name referred by the objectId field) : User
Field Name (press <return> to stop adding fields) : 
Generate Rest (yes/no) ? [yes] : 
Files tree generation grouped by Type or by Module (t/m) ? [t] : 
        create: ./models/carModel.js
        create: ./routes/carsRoutes.js
        create: ./controllers/carController.js
```

## Rendering
### Model
models/carModel.js :
```javascript
var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var carSchema = new Schema({
	"color" : String,
	"door" : Number,
    "owner" : {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('car', carSchema);
```

### Controller
controllers/carController.js :
```javascript
var TestModel = require('../models/testModel.js');

/**
 * testController.js
 *
 * @description :: Server-side logic for managing tests.
 */

var express = require('express');
var router = express.Router();
const mongoose_utils = require("mongoose-REST-utils");

// @Title createtests
// @Description create tests
// @Accept  json

// @Param testname body
// @Param testage body
// @Success 200 {array}
// @Resource /test
// @Router /test [post]

router.post("/", function (req, res) {
    mongoose_utils.basicPost(req, res, TestModel);
});

// @Title modifytests
// @Description modify tests
// @Accept  json

// @Param testname body
// @Param testage body
// @Success 200 {array}
// @Resource /test
// @Router /test [put]


router.put("/", function (req, res) {
    mongoose_utils.basicPut(req, res, TestModel);
});

// @Title gettests
// @Description get tests
// @Accept  json

// @Param testname query
// @Param testage query
// @Success 200 {array}
// @Resource /test
// @Router /test [put]

router.get("/", function (req, res) {
    mongoose_utils.basicGet(req, res, TestModel);
});

// @Title deletetests
// @Description delete tests by ID
// @Accept  json
// @Param id path
// @Success 200 {array}
// @Resource /test
// @Router /test [put]

router.delete("/:id", function (req, res) {
    mongoose_utils.basicDelete(req, res, TestModel);
});

module.exports = router;

```

### With files tree generation by module
```bash
Files tree generation grouped by Type or by Module (t/m) ? [t] : m
        create: ./car
        create: ./car/carModel.js
        create: ./car/carController.js
        create: ./car/carRoutes.js
```

You then only have to add router in app.js file and MongoDB connection whit Mongoose.
app.js :
```javascript
var routes = require('./controllers/index');
var cars = require('./controllers/carRoutes');
 ...

app.use('/', routes);
app.use('/cars', cars);
 ...
 
```

## Licence

Copyright (c) 2018 Thomas Cruveilher
Licensed under the [MIT license](LICENSE).

For everything that belongs to Damien Perrier : 

Copyright (c) 2017 Damien Perrier
Licensed under the [MIT license](LICENSE).
