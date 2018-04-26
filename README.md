# mongoose-to-typescript

It just create typescript classes from mongoose model or schema.\
It works with (MongooseType : TypescriptType):
- Number : number
- String : string
- Boolean : boolean
- Date : Date
- Array : Array
- ObjectID (not _id) : Referenced model class
- ObjectID (_id) : string

It assigns default value for each variable (especially classes instances, so you don't have any errors in angular with a damn object being undefined.
)
## Installation
```bash
$ npm install -g mongoose-to-typescript
```

## Usage
Generates a typescript class:
```bash
$ sudo ./bin/mongooseSchemaToTypescript.js -p ./models/ -m -o ./output
  Created AuthorizedWeightCategory.ts
  Created AutoSinister.ts
  Created BusinessProvider.ts
  Created Customer.ts
  Created Enterprise.ts
  Created PaymentFrequency.ts
  Created Person.ts
  Created Policy.ts
  Created Position.ts
```

##### Options

  `-V, --version` - output the version number\
  `-p, --path <inputPath>` - Input directory where your schema or model are\
  `-m, --model` - to translate mongoose model to typescript\
  `-s, --schema` - to translate mongoose schema (not model, light difference) to typescript\
  `-o, --output <output>` - Output directory\
    `-h, --help` - output usage information
    
##### Available types
  - string
  - number
  - date
  - boolean
  - array
  - objectId


## Rendering
output/Customer.ts :
```typescript
import VehicleBrand from './VehicleBrand';
import VehicleModel from './VehicleModel';
import Customer from './Customer';


class Vehicle
{
    public brand : VehicleBrand = VehicleBrand();
    public model : VehicleModel = VehicleModel();
    public immatriculation : string = "";
    public owner : Customer = Customer();
    public _id : string = "";
    }
```

## Licence

Copyright (c) 2018 Thomas Cruveilher
Licensed under the [MIT license](LICENSE).
