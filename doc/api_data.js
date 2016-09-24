define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc/main.js",
    "group": "_home_pawan_hackathon_payraja_doc_main_js",
    "groupTitle": "_home_pawan_hackathon_payraja_doc_main_js",
    "name": ""
  },
  {
    "type": "GET",
    "url": "/banks",
    "title": "bank list of the user.",
    "name": "bank_list",
    "description": "<p>bank list of the user.</p>",
    "group": "banks",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>for send json data.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "on successful Request(200):",
          "content": "{\n  \"data\": [\n    {\n      \"_id\": \"57e6ba0b7446226e0a1ce0d3\",\n      \"title\": \"Corporate Response Representative\",\n      \"firstName\": \"Lonnie\",\n      \"lastName\": \"Rath\",\n      \"mobileNo\": \"9028481116\",\n      \"bank_name\": \"barclays\",\n      \"__v\": 0,\n      \"vpa\": \"pawan@payce\",\n      \"accountList\": [\n        {\n          \"type\": \"SAVINGS_ACCOUNT\",\n          \"amount\": 1600,\n          \"number\": \"****6751\",\n          \"_id\": \"57e6ba0b7446226e0a1ce0d6\"\n        },\n        {\n          \"type\": \"CURRENT_ACCOUNT\",\n          \"amount\": 1000,\n          \"number\": \"****4368\",\n          \"_id\": \"57e6ba0b7446226e0a1ce0d5\"\n        },\n        {\n          \"type\": \"CREDIT_CARD_ACCOUNT\",\n          \"amount\": 1000,\n          \"number\": \"************5458\",\n          \"_id\": \"57e6ba0b7446226e0a1ce0d4\"\n        }\n      ],\n      \"isAdded\": true\n    }\n  ],\n  \"errors\": [],\n  \"errorFor\": {}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "on Invalid token OR expired token.(401):",
          "content": "{\n  err: 'Invalid Token!'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/BanksController.js",
    "groupTitle": "banks"
  },
  {
    "type": "GET",
    "url": "/dashboard",
    "title": "get dashboard",
    "name": "dashboard",
    "description": "<p>get dashboard.</p>",
    "group": "dashboard",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>for send json data.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "on successful Request(200):",
          "content": "{\n  \"data\": [\n    {\n      \"_id\": \"57e6ba0b7446226e0a1ce0d3\",\n      \"accountList\": [\n        {\n          \"type\": \"SAVINGS_ACCOUNT\",\n          \"amount\": 1600,\n          \"number\": \"****6751\",\n          \"_id\": \"57e6ba0b7446226e0a1ce0d6\"\n        },\n        {\n          \"type\": \"CURRENT_ACCOUNT\",\n          \"amount\": 1000,\n          \"number\": \"****4368\",\n          \"_id\": \"57e6ba0b7446226e0a1ce0d5\"\n        },\n        {\n          \"type\": \"CREDIT_CARD_ACCOUNT\",\n          \"amount\": 1000,\n          \"number\": \"************5458\",\n          \"_id\": \"57e6ba0b7446226e0a1ce0d4\"\n        }\n      ],\n      \"total\": 3600\n    }\n  ],\n  \"errorFor\": {},\n  \"errors\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "on invalid otp or mobile_number (400)",
          "content": "{\n  \"data\": [],\n  \"errorFor\": {},\n  \"errors\": [\n    \"Invalid mobile_number or pin\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/UsersController.js",
    "groupTitle": "dashboard"
  },
  {
    "type": "POST",
    "url": "/login",
    "title": "login endpoint",
    "name": "login",
    "description": "<p>login.</p>",
    "group": "login",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>for send json data.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "app_pin",
            "description": "<p>app pin.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\"mobile_number\" :\"1234567890\",\n\"app_pin\" : \"6543\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "on successful Request(200):",
          "content": "{\n  \"data\": {\n    \"message\": \"successfully logged in\",\n    \"token\": \"eadasdasdasddsas\"\n  },\n  \"errorFor\": {},\n  \"errors\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "on invalid otp or mobile_number (400)",
          "content": "{\n  \"data\": [],\n  \"errorFor\": {},\n  \"errors\": [\n    \"Invalid mobile_number or pin\"\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/UsersController.js",
    "groupTitle": "login"
  },
  {
    "type": "POST",
    "url": "/active/bank",
    "title": "registration proccess[1]",
    "name": "registration_proccess_1",
    "description": "<p>create an account using mobile number.</p>",
    "group": "register",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>for send json data.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_number",
            "description": "<p>mobile number.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"bank\" : \"_id wala data\",\n  \"vpa\" : \"pawan@payce\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "on successful Request(200):",
          "content": "{\n  \"data\": {\n    message:\"bank and account added successfully\"\n  },\n  \"errorFor\": {},\n  \"errors\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "on Invalid token OR expired token.(401):",
          "content": "{\n  err: 'Invalid Token!'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/BanksController.js",
    "groupTitle": "register"
  },
  {
    "type": "POST",
    "url": "/register",
    "title": "registration proccess[1]",
    "name": "registration_proccess_1",
    "description": "<p>create an account using mobile number.</p>",
    "group": "register",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>for send json data.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_number",
            "description": "<p>mobile number.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"mobile_number\" : 1234567890\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "on successful Request(200):",
          "content": "{\n  \"data\": {\n    \"message\": \"registration done successfully. wait for OTP\"\n  },\n  \"errorFor\": {},\n  \"errors\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "on Invalid token OR expired token.(401):",
          "content": "{\n  err: 'Invalid Token!'\n}",
          "type": "json"
        },
        {
          "title": "on duplicate register (400)",
          "content": "  {\n  \"data\": [],\n  \"errorFor\": {\n    \"mobile_number\": \"93322314801, already exists\"\n  },\n  \"errors\": []\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/UsersController.js",
    "groupTitle": "register"
  },
  {
    "type": "POST",
    "url": "/verify",
    "title": "verify otp[2]",
    "name": "registration_proccess_2",
    "description": "<p>verifing the opt.</p>",
    "group": "register",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>for send json data.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile_number",
            "description": "<p>mobile number.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "otp",
            "description": "<p>otp.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"mobile_number\" : 1234567890,\n  \"otp\" : 123456\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "on successful Request(200):",
          "content": "{\n  \"data\": {\n      message:\"successfully verified\",\n      token : \"XXYYYZZZ\"\n  },\n  \"errorFor\": {},\n  \"errors\": []\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "on Invalid token OR expired token.(401):",
          "content": "{\n  err: 'Invalid Token!'\n}",
          "type": "json"
        },
        {
          "title": "on invalid otp or mobile_number (400)",
          "content": "{\n  data : [],\n  errors:[\"Invalid otp or mobile_number\"],\n  errorFor : {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/UsersController.js",
    "groupTitle": "register"
  },
  {
    "type": "POST",
    "url": "/APIN",
    "title": "set an App Pin[3]",
    "name": "registration_proccess_3",
    "description": "<p>set an App Pin.</p>",
    "group": "register",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "Content-Type",
            "defaultValue": "application/json",
            "description": "<p>for send json data.</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "app_pin",
            "description": "<p>app pin.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"app_pin\" : 1234\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "on successful Request(200):",
          "content": "{\n  data:{\n    message : \"app_pin set successfully\"\n  },\n  errors:[],\n  errorFor:{}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "on Invalid token OR expired token.(401):",
          "content": "{\n  err: 'Invalid Token!'\n}",
          "type": "json"
        },
        {
          "title": "on invalid otp or mobile_number (400)",
          "content": "{\n  data : [],\n  errors:[\"Invalid otp or mobile_number\"],\n  errorFor : {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/UsersController.js",
    "groupTitle": "register"
  }
] });