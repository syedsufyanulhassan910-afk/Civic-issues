# XML & JSON Fundamentals

A collection of structured data, nested JavaScript object, JSON Schema, XML, and Fetch API exercises created while learning data representation and browser-based API handling.

## Live Links

* GitHub Repository: https://github.com/fazal305/XML-JSON
* Live Demo: Not applicable — this is a code and data practice repository

## Overview

This repository documents my early practice with XML, JSON, plain-text data, nested JavaScript objects, JSON Schema, and the Fetch API.

The exercises focus on understanding how structured information is represented, accessed, validated, iterated, and retrieved from an external API.

Rather than being a single application, this repository is a collection of small learning exercises that form part of the foundation for my later API and structured-data projects.

## Topics Covered

* Plain-text data representation
* JSON objects
* XML documents
* Nested JavaScript objects
* Nested property access
* Arrays of objects
* Array iteration
* Calculating values from structured data
* JSON Schema basics
* Fetch API
* Promise chains
* HTTP response validation
* JSON response parsing
* Basic API error handling

## Exercise Highlights

### TXT, JSON & XML Comparison

The repository represents similar student information in three formats:

```text
api.txt
api.json
api.xml
```

This exercise demonstrates how the same logical information can be represented using plain text, JSON, and XML.

### Nested Order Data

Files such as:

```text
e-com.js
food.js
nested.json
order.js
```

demonstrate nested customer, contact, item, and payment data.

Example concepts include:

```javascript
order.customer.contact.email;
order.items[0].name;
order.payment.method;
```

The food order exercise also calculates the total bill by iterating through the items array.

### Nested Array Access

The company and school exercises demonstrate accessing objects stored inside arrays.

```text
print.js
schools.js
```

Examples include branch and campus location lookups.

### Fetch API Exercise

`fetch.js` retrieves post data from JSONPlaceholder.

The exercise demonstrates:

* `fetch()`
* HTTP response validation
* `response.json()`
* Promise chaining
* `Array.prototype.slice()`
* `forEach()`
* Error handling with `.catch()`

### JSON Schema

`schema.json` defines a JSON Schema for an array of post objects.

The schema describes:

* Required properties
* Integer fields
* String fields
* Property descriptions
* Array item structure

## Tech Stack

* JSON
* XML
* JavaScript
* Fetch API
* JSON Schema
* Plain Text

## Folder Structure

```text
XML-JSON/
├── api.json
├── api.txt
├── api.xml
├── cv.txt
├── e-com.js
├── fetch.js
├── food.js
├── nested.json
├── order.js
├── print.js
├── schema.json
├── schools.js
├── README.md
├── LICENSE
└── .gitignore
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/fazal305/XML-JSON.git
```

Open the repository:

```bash
cd XML-JSON
```

JavaScript exercises can be executed individually with Node.js.

Example:

```bash
node food.js
```

Run the Fetch API exercise with a modern Node.js version that supports the global Fetch API:

```bash
node fetch.js
```

JSON, XML, and TXT files can be opened directly in VS Code or another text editor.

## Example Structured Data

A nested order structure used in the exercises follows this general pattern:

```text
Order
├── Order ID
├── Customer
│   ├── ID
│   ├── Name
│   └── Contact
│       ├── Email
│       └── Phone
├── Items
│   ├── Product ID
│   ├── Name
│   ├── Price
│   └── Quantity
└── Payment
    ├── Method
    └── Payment Status
```

## Architecture Notes

This repository does not use an application architecture because it is a collection of independent learning exercises.

Each file focuses on a specific structured-data concept.

```text
Data Representation
├── api.txt
├── api.json
└── api.xml

Nested JavaScript Data
├── e-com.js
├── food.js
├── order.js
├── print.js
└── schools.js

JSON Examples
└── nested.json

Schema Definition
└── schema.json

API Handling
└── fetch.js
```

## Accessibility

This repository contains data and command-line JavaScript exercises rather than a graphical user interface.

Traditional web accessibility requirements such as keyboard navigation and screen-reader UI labels are therefore not applicable.

## Performance

The examples are intentionally small and dependency-free.

Performance characteristics include:

* No package dependencies
* No build process
* Small data files
* Simple array iteration
* Native JavaScript APIs
* Native Fetch API usage

## Testing

Check JavaScript syntax with Node.js:

```bash
node --check e-com.js
node --check fetch.js
node --check food.js
node --check order.js
node --check print.js
node --check schools.js
```

Validate JSON syntax with Node.js:

```bash
node -e "JSON.parse(require('fs').readFileSync('api.json', 'utf8')); console.log('api.json valid')"
node -e "JSON.parse(require('fs').readFileSync('nested.json', 'utf8')); console.log('nested.json valid')"
node -e "JSON.parse(require('fs').readFileSync('schema.json', 'utf8')); console.log('schema.json valid')"
```

## Lessons Learned

* How JSON represents structured information
* How XML represents hierarchical information
* Differences between plain text, JSON, and XML
* How to access nested JavaScript properties
* How to work with arrays of objects
* How to calculate values from structured datasets
* How JSON Schema describes expected data structure
* How to fetch and parse JSON API responses
* How basic API error handling works

## Future Improvements

* Add JSON versus XML comparison notes
* Add JSON Schema validation example
* Add XML parsing with JavaScript
* Add `async` / `await` Fetch API example
* Add POST request example
* Add API response transformation exercise

## Fazal Labs Ecosystem

This repository is part of the **Fazal Labs** portfolio ecosystem.

**Suite:** 🛠 DevKit Studio

**Positioning:** A structured-data fundamentals repository documenting early practice with JSON, XML, schemas, nested objects, and API responses.

These fundamentals later support more advanced Fazal Labs projects involving API clients, JSON analytics, schema tools, GraphQL, and structured-data engineering.

## Repository Classification

```text
Type: Practice Project
Portfolio Pin: No
Archive: No
Suite-level Product: No
Technical Article: Supporting material
Demo Video: Not necessary
```

## GitHub Topics

```text
json
xml
javascript
fetch-api
json-schema
structured-data
nested-objects
api-fundamentals
learning-project
fazal-labs
devkit-studio
```

## Author

**Fazal Abbas**

Software Engineering Student
Frontend & Full-Stack Developer

* GitHub: https://github.com/fazal305
* LinkedIn: https://www.linkedin.com/in/fazal-abbas-4653dg86

## License

This repository is licensed under the MIT License.
