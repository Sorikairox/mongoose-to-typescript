#!/usr/bin/env node

var fs = require('fs');
var colors = require('colors');
var program = require('commander');
var pkg = require('../package.json');
var version = pkg.version;
var pathMethod = require('path');

function make_green(txt) {
    return colors.green(txt); //display the help text in red on the console
}

program
    .version(version)
    .usage('[options]')
    .option('-p, --path <inputPath>', 'Input directory where your schema or model are')
    .option('-m, --model', 'to translate mongoose model to typescript')
    .option('-s, --schema', 'to translate mongoose schema (not model, light difference) to typescript')
    .option('-o, --output <output>', 'Output directory')
    .parse(process.argv);

(function (path) {
    if (program.path && program.output && (program.schema || program.model)) {
        var typeMap = {
            Number: "number",
            String: "string",
            Date: "Date",
            Array: "Array",
            Boolean: "boolean",
            boolean: "boolean"
        };
        var defaultMap = {
            number: 0,
            string: '""',
            Date: "new Date()",
            Array: "[]",
            boolean: "true",
            Boolean: "true"
        };

        fs.mkdir(process.cwd() + "/" + program.output, null, () => {
            fs.readFile(pathMethod.join(__dirname, '..', 'classTemplate.ts'), "utf-8", (err, content) => {
                fs.readdir(process.cwd() + "/" + program.path, (err, files) => {
                    files.forEach(file => {
                        var newFile = content;
                        let className = file.replace("Model", "");
                        className = className.replace(".js", "");
                        try {
                            if (program.model)
                                var schema = require(process.cwd() + "/" +  program.path + "/" + file).schema;
                            else
                                var schema = require(process.cwd() + "/" +  program.path + "/" + file);
                            var replacerTab = {imports: "", props: "", className: className};
                            var importedAddress = false;
                            // console.log(schema);
                            for (let property in schema.paths) {
                                // console.log(property);
                                // console.log(schema.paths[property]);
                                let propType = typeMap[schema.paths[property].instance];
                                if (propType != null || (property == "_id" && (propType = "string")))
                                    replacerTab.props += "public " + property + " : " + propType + " = " + defaultMap[propType] + ";\n";
                                else if (property.includes("address") || property.includes("Address")) {
                                    replacerTab.props += "public " + property + " : Address = Address();\n";
                                    if (!importedAddress)
                                        replacerTab.imports += "import Adress from './Address';\n";
                                    importedAddress = true;
                                }
                                else {
                                    replacerTab.props += "public " + property + " : " + schema.paths[property].options.ref + " = " + schema.paths[property].options.ref + "()" + ";\n";
                                    replacerTab.imports += "import " + schema.paths[property].options.ref + " from './" + schema.paths[property].options.ref + "';\n";
                                }
                            }
                            for (let property in replacerTab) {
                                newFile = newFile.replace("{{" + property + "}}", replacerTab[property]);
                            }
                            fs.writeFileSync(process.cwd() + "/"+  program.output + "/" + className + ".ts", newFile, 'utf-8');
                            console.log(make_green("Created " + className + ".ts"));
                        }
                        catch (e) {
                            console.log(colors.red(e));
                        }
                    });
                })
            });
        });
    }
    else {
        program.outputHelp(make_green);
    }
})('.');