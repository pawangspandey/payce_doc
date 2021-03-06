define({ "api": [
  {
    "type": "POST",
    "url": "/ai",
    "title": "ai bot api",
    "name": "ai_bot_api",
    "description": "<p>ai bot api</p>",
    "group": "AI",
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
            "type": "Json",
            "optional": false,
            "field": "response",
            "description": "<p>response from api.ai server.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "  {\n    \"response\" : {\n  \"id\": \"894943c3-9fef-4f16-9c1f-c8014c17dc0b\",\n  \"timestamp\": \"2016-09-25T09:12:05.966Z\",\n  \"result\": {\n    \"source\": \"agent\",\n    \"resolvedQuery\": \"show me the expenses report for feb\",\n    \"speech\": \"can you help me with reporting period?\",\n    \"action\": \"\",\n    \"parameters\": {\n      \"Action\": \"\",\n      \"date\": \"feb\",\n      \"date-period\": \"\",\n      \"report\": \"report\",\n      \"report1\": \"\",\n      \"type\": \"expenses\"\n    },\n    \"metadata\": {\n      \"intentId\": \"fabd5529-a81b-40b5-a197-10932dcdb5c6\",\n      \"webhookUsed\": \"false\",\n      \"inputContexts\": [],\n      \"outputContexts\": [],\n      \"contexts\": [\n        \"fabd5529-a81b-40b5-a197-10932dcdb5c6_id_dialog_context\",\n        \"fetch_report-type_dialog_context\",\n        \"fetch_report-type_dialog_params_date-period\"\n      ],\n      \"intentName\": \"fetch.report-type\"\n    },\n    \"score\": 0.28\n  },\n  \"status\": {\n    \"code\": 200,\n    \"errorType\": \"success\"\n  },\n  \"sessionId\": \"00000000-0000-0000-0000-000000000000\"\n}\n  }",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "on successful Request(200):",
          "content": "{\n  \"data\": {\n    \"_id\": \"57e75181ad4d3d1e78ab2d14\",\n    \"type\": \"expense\",\n    \"__v\": 0,\n    \"year\": {\n      \"2014\": 29292,\n      \"2015\": 93226,\n      \"2016\": 45107\n    },\n    \"month\": {\n      \"jan\": 2489,\n      \"feb\": 3997,\n      \"mar\": 5063,\n      \"apr\": 7957,\n      \"may\": 6395,\n      \"jun\": 1623,\n      \"jul\": 6770,\n      \"aug\": 9479,\n      \"sep\": 1334,\n      \"oct\": 0,\n      \"nov\": 0,\n      \"dec\": 0\n    },\n    \"week\": {\n      \"mon\": 3879,\n      \"tue\": 2295,\n      \"web\": 5788,\n      \"thu\": 1524,\n      \"fri\": 3376,\n      \"sat\": 4128,\n      \"sun\": 3000\n    },\n    \"today\": [\n      {\n        \"source\": \"myzone\",\n        \"time\": \"2016-09-25T04:24:33.875Z\",\n        \"amount\": 3000,\n        \"_id\": \"57e75181ad4d3d1e78ab2d15\"\n      }\n    ]\n  },\n  \"errors\": [],\n  isReport : true,\n  \"errorFor\": {}\n}",
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
          "content": "{\n  data:[],\n  errors:[\"please try again\"],\n  errorFor:{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/UsersController.js",
    "groupTitle": "AI"
  },
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
    "url": "/expense",
    "title": "get all expenses.",
    "name": "expense_api",
    "description": "<p>get all expenses.</p>",
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
          "content": "\t{\n  \"data\": {\n    \"_id\": \"57e75181ad4d3d1e78ab2d14\",\n    \"type\": \"expense\",\n    \"__v\": 0,\n    \"year\": {\n      \"2014\": 29292,\n      \"2015\": 93226,\n      \"2016\": 45107\n    },\n    \"month\": {\n      \"jan\": 2489,\n      \"feb\": 3997,\n      \"mar\": 5063,\n      \"apr\": 7957,\n      \"may\": 6395,\n      \"jun\": 1623,\n      \"jul\": 6770,\n      \"aug\": 9479,\n      \"sep\": 1334,\n      \"oct\": 0,\n      \"nov\": 0,\n      \"dec\": 0\n    },\n    \"week\": {\n      \"mon\": 3879,\n      \"tue\": 2295,\n      \"web\": 5788,\n      \"thu\": 1524,\n      \"fri\": 3376,\n      \"sat\": 4128,\n      \"sun\": 3000\n    },\n    \"today\": [\n      {\n        \"source\": \"myzone\",\n        \"time\": \"2016-09-25T04:24:33.875Z\",\n        \"amount\": 3000,\n        \"_id\": \"57e75181ad4d3d1e78ab2d15\"\n      }\n    ]\n  },\n  \"errors\": [],\n  \"errorFor\": {}\n}",
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
    "filename": "./api/controllers/TransactionsController.js",
    "groupTitle": "banks"
  },
  {
    "type": "GET",
    "url": "/income",
    "title": "get all income.",
    "name": "income_api",
    "description": "<p>get all income.</p>",
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
          "content": "\t{\n  \"data\": {\n    \"_id\": \"57e75181ad4d3d1e78ab2d16\",\n    \"type\": \"income\",\n    \"__v\": 0,\n    \"year\": {\n      \"2014\": 879344,\n      \"2015\": 130083,\n      \"2016\": 862433\n    },\n    \"month\": {\n      \"jan\": 94071,\n      \"feb\": 97333,\n      \"mar\": 96552,\n      \"apr\": 92189,\n      \"may\": 94589,\n      \"jun\": 98585,\n      \"jul\": 94737,\n      \"aug\": 95616,\n      \"sep\": 98761,\n      \"oct\": 0,\n      \"nov\": 0,\n      \"dec\": 0\n    },\n    \"week\": {\n      \"mon\": 0,\n      \"tue\": 9207,\n      \"web\": 0,\n      \"thu\": 7613,\n      \"fri\": 7618,\n      \"sat\": 0,\n      \"sun\": 90000\n    },\n    \"today\": [\n      {\n        \"source\": \"salary\",\n        \"time\": \"2016-09-25T04:24:33.875Z\",\n        \"amount\": 90000,\n        \"_id\": \"57e75181ad4d3d1e78ab2d17\"\n      }\n    ]\n  },\n  \"errors\": [],\n  \"errorFor\": {}\n}",
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
    "filename": "./api/controllers/TransactionsController.js",
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
    "title": "active bank account",
    "name": "active_bank_account",
    "description": "<p>active bank account</p>",
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
            "field": "bank",
            "description": "<p>bank id.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "vpa",
            "description": "<p>vpa.</p>"
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
          "content": "{\n  \"data\": {\n    \"message\": \"registration done successfully. wait for OTP\",\n    isAlreadyHasAcc:false\n  },\n  \"errorFor\": {},\n  \"errors\": []\n}",
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
  },
  {
    "type": "GET",
    "url": "/request",
    "title": "get request info",
    "name": "get_request_info",
    "description": "<p>get_request_info</p>",
    "group": "transactions",
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
          "content": "{\n  \"data\": [\n    {\n      \"_id\": \"57e6e73d7a13300229e12082\",\n      \"payer\": \"9028481116\",\n      \"payee\": \"8446131952\",\n      \"amount\": 5000,\n      \"date\": \"2016-09-24T20:51:09.776Z\",\n      \"__v\": 0\n    }\n  ],\n  \"errors\": [],\n  \"errorFor\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/UsersController.js",
    "groupTitle": "transactions"
  },
  {
    "type": "GET",
    "url": "/request",
    "title": "get transactions info",
    "name": "get_transactions_info",
    "description": "<p>get_transactions_info</p>",
    "group": "transactions",
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
          "content": "{{\n  \"data\": [\n    {\n      \"_id\": \"57e6d76b930d287ce7c632ff\",\n      type : \"income\",\n      source : \"myzone\",\n      amount : 10000,\n      \"date\": \"2016-09-24T19:43:39.970Z\",\n    }\n  ],\n  \"errors\": [],\n  \"errorFor\": {}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/UsersController.js",
    "groupTitle": "transactions"
  },
  {
    "type": "POST",
    "url": "/send",
    "title": "send money",
    "name": "send_money",
    "description": "<p>send money.</p>",
    "group": "transactions",
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
      "examples": [
        {
          "title": "Request-Example :",
          "content": "{\n  receiver : \"mobileNo\",\n  amount : 500\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "on successful Request(200):",
          "content": "\n{\n  data:{\n    \"message\":\"payment done!!\"\n  },\n  errors:[],\n  errorFor:{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/UsersController.js",
    "groupTitle": "transactions"
  },
  {
    "type": "POST",
    "url": "/request",
    "title": "send request",
    "name": "send_request",
    "description": "<p>send request.</p>",
    "group": "transactions",
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
      "examples": [
        {
          "title": "Request-Example :",
          "content": "{\n  payer : 9322466564,\n  amount : 2010\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "on successful Request(200):",
          "content": "\n{\n  data:{\n    \"message\":\"request sent successful\"\n  },\n  errors:[],\n  errorFor:{}\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "./api/controllers/UsersController.js",
    "groupTitle": "transactions"
  }
] });
