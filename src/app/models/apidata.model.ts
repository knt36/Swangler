/* tslint:disable */
export class ApiData {
  public static MOCK_RAW_DATA ={
    "url": "http://forge.local/openapi/spec.json",
    "spec": {
      "swagger": "2.0",
      "info": {
        "version": "1.0.0",
        "title": "Slyce API",
        "description": "",
        "termsOfService": "Use with caution!",
        "contact": {
          "email": "admin@slyce.it"
        },
        "license": {
          "email": null,
          "url": null
        }
      },
      "host": null,
      "basePath": null,
      "schemes": [
        null
      ],
      "securityDefinitions": {
        "slyce-account-id": {
          "type": "apiKey",
          "name": "slyce-account-id",
          "in": "header"
        }
      },
      "tags": [
        "Accounts",
        "Analytics"
      ],
      "paths": {
        "/accounts/": {
          "post": {
            "operationId": "Accounts_create_account1",
            "summary": "Create a new account",
            "description": "Create a new account.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Accounts"
            ],
            "parameters": [
              {
                "type": "object",
                "name": "body",
                "required": true,
                "in": "body",
                "schema": {
                  "type": "object",
                  "required": [
                    "id",
                    "name"
                  ],
                  "properties": {
                    "id": {
                      "type": "string",
                      "description": "The url safe id for the account (this cannot be changed).",
                      "required": true,
                      "example": "test_inc"
                    },
                    "name": {
                      "type": "string",
                      "description": "The name of the account (this can be changed).",
                      "required": true,
                      "example": "Test, Inc."
                    }
                  },
                  "name": "body",
                  "$$ref": "#/definitions/NewAccountDoc"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Successful Operation",
                "schema": {
                  "type": "object",
                  "required": [],
                  "properties": {
                    "topic": {
                      "type": "string",
                      "description": "???",
                      "example": "fg01-evt-global"
                    },
                    "msg_type": {
                      "type": "string",
                      "description": "The type of message",
                      "example": "job-created"
                    },
                    "account_id": {
                      "type": "string",
                      "description": "The account id related to the job",
                      "example": "test_inc"
                    },
                    "task_id": {
                      "type": "string",
                      "description": "The task id"
                    },
                    "created_by": {
                      "type": "string",
                      "description": "Task created by",
                      "example": "system"
                    },
                    "job_id": {
                      "type": "string",
                      "description": "The job id",
                      "example": "XyGHrrSB9GqrMfvzQdJShA"
                    },
                    "name": {
                      "type": "string",
                      "description": "The name of the job",
                      "example": "job-name"
                    },
                    "process_status": {
                      "type": "object",
                      "required": [],
                      "properties": {
                        "status": {
                          "type": "integer",
                          "format": "int64",
                          "description": "The current job status id",
                          "example": 1
                        },
                        "display": {
                          "type": "string",
                          "description": "The current job status text",
                          "example": "Queued"
                        }
                      },
                      "$$ref": "#/definitions/ProcessStatusDoc"
                    }
                  },
                  "$$ref": "#/definitions/NewJobDoc"
                }
              },
              "202": {
                "description": "Processing request."
              },
              "400": {
                "description": "Bad request."
              },
              "409": {
                "description": "An account with that name already exists."
              }
            },
            "security": [
              {
                "slyce-account-id": []
              },
              {
                "slyce-api-key": []
              }
            ],
            "__originalOperationId": "Accounts.create_account",
            "url": "/accounts/",
            "method": "post"
          },
          "get": {
            "operationId": "Accounts_create_account2",
            "summary": "List the accounts",
            "description": "Get a list of all accounts in the system.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Accounts"
            ],
            "parameters": [
              {
                "type": "integer",
                "format": "int64",
                "description": "The page number to get",
                "default": 1,
                "example": 1,
                "required": false,
                "in": "query",
                "name": "page_number",
                "value": 1
              },
              {
                "type": "integer",
                "format": "int64",
                "description": "The number of items to return",
                "default": 20,
                "example": 20,
                "required": false,
                "in": "query",
                "name": "page_size",
                "value": 20
              }
            ],
            "responses": {
              "200": {
                "description": "Successful Operation",
                "schema": {
                  "type": "object",
                  "properties": {
                    "items": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [],
                        "properties": {
                          "created_at": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The timestamp the item was created",
                            "example": "2018-01-04T20:13:55.373557+0000"
                          },
                          "created_by": {
                            "type": "string",
                            "description": "The user that created the item",
                            "example": "system"
                          },
                          "updated_at": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The timestamp the item was last updated",
                            "example": "2018-01-04T20:13:55.373557+0000"
                          },
                          "updated_by": {
                            "type": "string",
                            "description": "The user that last updated the item",
                            "example": "system"
                          },
                          "id": {
                            "type": "string",
                            "description": "The account id",
                            "example": "test_inc"
                          },
                          "name": {
                            "type": "string",
                            "description": "The name of the account",
                            "example": "Test, Inc."
                          },
                          "is_active": {
                            "type": "boolean",
                            "description": "Whether an account is active or not."
                          }
                        },
                        "$$ref": "#/definitions/AccountDoc"
                      }
                    },
                    "page_number": {
                      "type": "integer",
                      "format": "int64",
                      "description": "The current page number",
                      "example": 1
                    },
                    "page_size": {
                      "type": "integer",
                      "format": "int64",
                      "description": "The number of items returned",
                      "example": 20
                    },
                    "total_pages": {
                      "type": "integer",
                      "format": "int64",
                      "description": "The total number of pages available",
                      "example": 1
                    },
                    "total_items": {
                      "type": "integer",
                      "format": "int64",
                      "description": "The total number of items available",
                      "example": 1
                    }
                  }
                }
              }
            },
            "security": [
              {
                "slyce-account-id": []
              },
              {
                "slyce-api-key": []
              }
            ],
            "__originalOperationId": "Accounts.create_account",
            "url": "/accounts/",
            "method": "get"
          }
        },
        "/weld_highlighter": {
          "get": {
            "operationId": "weld_highlighter",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "parameters": [],
            "responses": {
              "200": {
                "description": "Successful Operation"
              }
            },
            "security": [
              {
                "slyce-account-id": []
              },
              {
                "slyce-api-key": []
              }
            ],
            "__originalOperationId": "weld_highlighter",
            "url": "/weld_highlighter",
            "method": "get"
          }
        }
      }
    },
    "errors": [],
    "apis": {
      "Accounts": {},
      "Analytics": {}
    }
  }
  public static MOCK_DATA = {
    "url": "http://forge.local/openapi/spec.json",
    "spec": {
      "swagger": "2.0",
      "info": {
        "version": "1.0.0",
        "title": "Slyce API",
        "description": "",
        "termsOfService": "Use with caution!",
        "contact": {
          "email": "admin@slyce.it"
        },
        "license": {
          "email": null,
          "url": null
        }
      },
      "host": null,
      "basePath": null,
      "schemes": [
        "http"
      ],
      "securityDefinitions": {
        "slyce-account-id": {
          "type": "apiKey",
          "name": "slyce-account-id",
          "in": "header"
        },
        "slyce-api-key": {
          "type": "apiKey",
          "name": "slyce-api-key",
          "in": "header"
        }
      },
      "tags": [
        "Images",
        "Accounts",
        "Analytics",
        "Datasets",
        "Jobs",
        "Workflows",
        "Spaces",
        "openapi",
        "API Keys"
      ],
      "definitions": {
        "ProcessStatusDoc": {
          "type": "object",
          "required": [],
          "properties": {
            "status": {
              "type": "integer",
              "format": "int64",
              "description": "The current job status id",
              "example": 1
            },
            "display": {
              "type": "string",
              "description": "The current job status text",
              "example": "Queued"
            }
          }
        },
        "NewAccountDoc": {
          "type": "object",
          "required": [
            "id",
            "name"
          ],
          "properties": {
            "id": {
              "type": "string",
              "description": "The url safe id for the account (this cannot be changed).",
              "required": true,
              "example": "test_inc"
            },
            "name": {
              "type": "string",
              "description": "The name of the account (this can be changed).",
              "required": true,
              "example": "Test, Inc."
            }
          },
          "name": "body"
        },
        "NewJobDoc": {
          "type": "object",
          "required": [],
          "properties": {
            "topic": {
              "type": "string",
              "description": "???",
              "example": "fg01-evt-global"
            },
            "msg_type": {
              "type": "string",
              "description": "The type of message",
              "example": "job-created"
            },
            "account_id": {
              "type": "string",
              "description": "The account id related to the job",
              "example": "848c0271-d307-426b-9291-6d99f17039a3"
            },
            "task_id": {
              "type": "string",
              "description": "The task id"
            },
            "created_by": {
              "type": "string",
              "description": "Task created by",
              "example": "system"
            },
            "job_id": {
              "type": "string",
              "description": "The job id",
              "example": "db36cc07-6f28-421a-afd4-88288b625fee"
            },
            "name": {
              "type": "string",
              "description": "The name of the job",
              "example": "job-name"
            },
            "process_status": {
              "type": "object",
              "required": [],
              "properties": {
                "status": {
                  "type": "integer",
                  "format": "int64",
                  "description": "The current job status id",
                  "example": 1
                },
                "display": {
                  "type": "string",
                  "description": "The current job status text",
                  "example": "Queued"
                }
              },
              "$$ref": "#/definitions/ProcessStatusDoc"
            }
          }
        },
        "UpdateAccountDoc": {
          "type": "object",
          "required": [],
          "properties": {
            "is_active": {
              "type": "boolean",
              "description": "The name of the account"
            },
            "name": {
              "type": "string",
              "description": "The name of the account",
              "example": "Test, Inc."
            }
          },
          "name": "body"
        },
        "NewAPIKeyDoc": {
          "type": "object",
          "required": [
            "name"
          ],
          "properties": {
            "name": {
              "type": "string",
              "description": "The name of the API key",
              "required": true,
              "example": "DemoAPIKey"
            },
            "acl": {
              "type": "object",
              "properties": {},
              "description": "The access control list as an object with the operation as the key and the permission status as a boolean",
              "example": {
                "create-account": true,
                "update-account": true,
                "list-accounts": true,
                "track-analytics-events": true,
                "create-api-key": true,
                "update-api-key": true,
                "delete-api-key": true,
                "get-api-key": true,
                "list-api-keys": true,
                "copy-dataset": true,
                "create-dataset": true,
                "delete-dataset": true,
                "update-dataset": true,
                "import-items": true,
                "list-data-items-by-dataset": true,
                "delete-data-items": true,
                "get-job-by-id": true,
                "list-jobs": true,
                "create-space": true,
                "update-space": true,
                "delete-space": true,
                "get-space-by-id": true,
                "list-spaces": true,
                "create-workflow": true,
                "copy-workflow": true,
                "update-workflow": true,
                "delete-workflow": true,
                "execute-workflow": true,
                "get-workflow-by-id": true,
                "list-workflows": true
              }
            }
          },
          "name": "body"
        },
        "PatchAPIKeyDoc": {
          "type": "object",
          "required": [
            "name",
            "name"
          ],
          "properties": {
            "name": {
              "type": "string",
              "description": "The name of the API key",
              "required": true,
              "example": "StagingAPIKey"
            },
            "acl": {
              "type": "object",
              "properties": {},
              "description": "The access control list as an object with the operation as the key and the permission status as a boolean",
              "example": {
                "create-account": true,
                "update-account": true,
                "list-accounts": true,
                "track-analytics-events": true,
                "create-api-key": true,
                "update-api-key": true,
                "delete-api-key": true,
                "get-api-key": true,
                "list-api-keys": true,
                "copy-dataset": true,
                "create-dataset": true,
                "delete-dataset": true,
                "update-dataset": true,
                "import-items": true,
                "list-data-items-by-dataset": true,
                "delete-data-items": true,
                "get-job-by-id": true,
                "list-jobs": true,
                "create-space": true,
                "update-space": true,
                "delete-space": true,
                "get-space-by-id": true,
                "list-spaces": true,
                "create-workflow": true,
                "copy-workflow": true,
                "update-workflow": true,
                "delete-workflow": true,
                "execute-workflow": true,
                "get-workflow-by-id": true,
                "list-workflows": true
              }
            }
          },
          "name": "body"
        },
        "APIKeyDoc": {
          "type": "object",
          "required": [
            "key",
            "name"
          ],
          "properties": {
            "created_at": {
              "type": "string",
              "format": "date-time",
              "description": "The timestamp the item was created",
              "example": "2018-01-04T20:13:55.373557+0000"
            },
            "created_by": {
              "type": "string",
              "description": "The user that created the item",
              "example": "system"
            },
            "updated_at": {
              "type": "string",
              "format": "date-time",
              "description": "The timestamp the item was last updated",
              "example": "2018-01-04T20:13:55.373557+0000"
            },
            "updated_by": {
              "type": "string",
              "description": "The user that last updated the item",
              "example": "system"
            },
            "key": {
              "type": "string",
              "description": "The API key itself",
              "required": true,
              "example": "e5e04391-bd1d-4e6b-a987-0afbdd194329"
            },
            "name": {
              "type": "string",
              "description": "The name of the API key",
              "required": true,
              "example": "DemoAPIKey"
            },
            "acl": {
              "type": "object",
              "properties": {},
              "description": "The access control list as an object with the operation as the key and the permission status as a boolean",
              "example": {
                "create-account": true,
                "update-account": true,
                "list-accounts": true,
                "track-analytics-events": true,
                "create-api-key": true,
                "update-api-key": true,
                "delete-api-key": true,
                "get-api-key": true,
                "list-api-keys": true,
                "copy-dataset": true,
                "create-dataset": true,
                "delete-dataset": true,
                "update-dataset": true,
                "import-items": true,
                "list-data-items-by-dataset": true,
                "delete-data-items": true,
                "get-job-by-id": true,
                "list-jobs": true,
                "create-space": true,
                "update-space": true,
                "delete-space": true,
                "get-space-by-id": true,
                "list-spaces": true,
                "create-workflow": true,
                "copy-workflow": true,
                "update-workflow": true,
                "delete-workflow": true,
                "execute-workflow": true,
                "get-workflow-by-id": true,
                "list-workflows": true
              }
            }
          }
        },
        "NewDatasetDoc": {
          "type": "object",
          "required": [
            "name"
          ],
          "properties": {
            "name": {
              "type": "string",
              "description": "The name of the dataset.",
              "required": true,
              "example": "DemoDataset"
            },
            "image_url_keys": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "imageURL"
              },
              "description": "The keys of the fields containing image_urls for the dataset.",
              "required": null
            },
            "copy_from": {
              "type": "string",
              "description": "The name of another dataset from which settings and items should be copied (if necessary).",
              "required": false,
              "example": "none"
            }
          },
          "name": "body"
        },
        "UpdateDatasetDoc": {
          "type": "object",
          "required": [],
          "properties": {
            "name": {
              "type": "string",
              "description": "The name of the dataset",
              "required": false,
              "example": "DemoDataset"
            },
            "image_url_keys": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "imageURL"
              },
              "description": "The keys of the fields containing image_urls for the dataset.",
              "required": null
            }
          },
          "name": "body"
        },
        "NewSpaceDoc": {
          "type": "object",
          "required": [
            "name"
          ],
          "properties": {
            "name": {
              "type": "string",
              "description": "The name of the space",
              "required": true,
              "example": "DemoSpace"
            }
          },
          "name": "body"
        },
        "PatchSpaceDoc": {
          "type": "object",
          "required": [
            "name"
          ],
          "properties": {
            "name": {
              "type": "string",
              "description": "The name of the space",
              "required": true,
              "example": "Updated Name"
            },
            "is_active": {
              "type": "boolean",
              "description": "Whether a space is active or not."
            }
          },
          "name": "body"
        },
        "SpaceDoc": {
          "type": "object",
          "required": [
            "id",
            "name",
            "account_id"
          ],
          "properties": {
            "created_at": {
              "type": "string",
              "format": "date-time",
              "description": "The timestamp the item was created",
              "example": "2018-01-04T20:13:55.373557+0000"
            },
            "created_by": {
              "type": "string",
              "description": "The user that created the item",
              "example": "system"
            },
            "updated_at": {
              "type": "string",
              "format": "date-time",
              "description": "The timestamp the item was last updated",
              "example": "2018-01-04T20:13:55.373557+0000"
            },
            "updated_by": {
              "type": "string",
              "description": "The user that last updated the item",
              "example": "system"
            },
            "id": {
              "type": "string",
              "description": "The space id",
              "required": true,
              "example": "e5e04391-bd1d-4e6b-a987-0afbdd194329"
            },
            "name": {
              "type": "string",
              "description": "The name of the space",
              "required": true,
              "example": "DemoSpace"
            },
            "account_id": {
              "type": "string",
              "description": "The account id that owns the space",
              "required": true,
              "example": "848c0271-d307-426b-9291-6d99f17039a3"
            }
          }
        },
        "CreateWorkflowDoc": {
          "type": "object",
          "required": [
            "workflow_name",
            "workflow_execution",
            "workflow_settings"
          ],
          "properties": {
            "workflow_name": {
              "type": "string",
              "description": "The name of the workflow",
              "required": true,
              "example": "test_workflow"
            },
            "workflow_execution": {
              "type": "object",
              "properties": {},
              "description": "The combination of operations and operators",
              "required": true,
              "example": {
                "classification": "workflow_operator",
                "type": "and",
                "operands": [
                  {
                    "classification": "workflow_operation",
                    "type": "visual_search"
                  },
                  {
                    "classification": "workflow_operation",
                    "type": "barcode"
                  }
                ]
              }
            },
            "workflow_settings": {
              "type": "object",
              "properties": {},
              "description": "Any settings associated with the workflow",
              "required": true,
              "example": {
                "key": "value"
              }
            }
          },
          "name": "body"
        },
        "UpdateWorkflowDoc": {
          "type": "object",
          "required": [],
          "properties": {
            "workflow_name": {
              "type": "string",
              "description": "The name of the workflow",
              "example": "updated_workflow"
            },
            "workflow_execution": {
              "type": "object",
              "properties": {},
              "description": "The combination of operations and operators",
              "example": {
                "classification": "workflow_operator",
                "type": "and",
                "operands": [
                  {
                    "classification": "workflow_operation",
                    "type": "visual_search"
                  },
                  {
                    "classification": "workflow_operation",
                    "type": "barcode"
                  }
                ]
              }
            },
            "workflow_settings": {
              "type": "object",
              "properties": {},
              "description": "Any settings associated with the workflow",
              "example": {
                "key": "value"
              }
            }
          },
          "name": "body"
        },
        "AccountDoc": {
          "type": "object",
          "required": [],
          "properties": {
            "created_at": {
              "type": "string",
              "format": "date-time",
              "description": "The timestamp the item was created",
              "example": "2018-01-04T20:13:55.373557+0000"
            },
            "created_by": {
              "type": "string",
              "description": "The user that created the item",
              "example": "system"
            },
            "updated_at": {
              "type": "string",
              "format": "date-time",
              "description": "The timestamp the item was last updated",
              "example": "2018-01-04T20:13:55.373557+0000"
            },
            "updated_by": {
              "type": "string",
              "description": "The user that last updated the item",
              "example": "system"
            },
            "id": {
              "type": "string",
              "description": "The account id",
              "example": "test_inc"
            },
            "name": {
              "type": "string",
              "description": "The name of the account",
              "example": "Test, Inc."
            },
            "is_active": {
              "type": "boolean",
              "description": "Whether an account is active or not."
            }
          }
        },
        "AnalyticsEventDoc": {
          "type": "object",
          "required": [],
          "properties": {
            "event_action": {
              "type": "string",
              "description": "The action for the event.",
              "example": "Slyce Initialization - success"
            },
            "event_category": {
              "type": "string",
              "description": "The general event category.",
              "example": "Initialization"
            },
            "event_label": {
              "type": "string",
              "description": "An optional descriptor for the event",
              "example": ""
            },
            "hit_number": {
              "type": "integer",
              "format": "int64",
              "description": "Count of events in a sequence starting at 1",
              "example": 1
            },
            "hit_timestamp": {
              "type": "string",
              "description": "The recorded time at which the event occurred.",
              "example": "2018-02-12 20:28:32.113"
            }
          }
        },
        "AnalyticsEventTrackingDoc": {
          "type": "object",
          "required": [],
          "properties": {
            "sessionData": {
              "type": "object",
              "properties": {
                "slyce_id": {
                  "type": "string",
                  "description": "Unique Slyce id for this session",
                  "example": "slyce_so_cool99"
                },
                "slyce_sdk_platform": {
                  "type": "string",
                  "description": "Slyce platform name",
                  "example": "Slyce SDK iOS"
                },
                "slyce_sdk_version": {
                  "type": "string",
                  "description": "Slyce SDK version used for this session",
                  "example": "3.8"
                },
                "user_id": {
                  "type": "string",
                  "description": "The current user's id",
                  "example": "123asdf4445"
                },
                "app_launch_count": {
                  "type": "integer",
                  "format": "int64",
                  "description": "How many times the app has been launched",
                  "example": 1
                },
                "client_app_name": {
                  "type": "string",
                  "description": "Name of the Client App using the SDK",
                  "example": "Client App Name"
                },
                "client_app_version": {
                  "type": "string",
                  "description": "Version of the client app using the SDK",
                  "example": "2.2"
                },
                "ad_id": {
                  "type": "string",
                  "description": "The current device id",
                  "example": "12343546sfgdhsrteh"
                },
                "device_category": {
                  "type": "string",
                  "description": "The category of device",
                  "example": "mobile"
                },
                "installer_id": {
                  "type": "string",
                  "description": "The Installer id",
                  "example": "aetq3t45q5yt44y5ggg"
                },
                "mobile_device_model": {
                  "type": "string",
                  "description": "The type of mobile device being used",
                  "example": "HTC One M8"
                },
                "operating_system": {
                  "type": "string",
                  "description": "Operating system of the device being used",
                  "example": "Android"
                },
                "operating_system_version": {
                  "type": "string",
                  "description": "The version of the operating system",
                  "example": "6.0"
                },
                "screen_resolution": {
                  "type": "string",
                  "description": "Screen resolution of the device",
                  "example": "1920 x 1080"
                },
                "user_location": {
                  "type": "string",
                  "description": "The location of the device",
                  "example": "41.40338, 2.17403"
                }
              }
            },
            "eventQueue": {
              "type": "array",
              "items": {
                "type": "object",
                "required": [],
                "properties": {
                  "event_action": {
                    "type": "string",
                    "description": "The action for the event.",
                    "example": "Slyce Initialization - success"
                  },
                  "event_category": {
                    "type": "string",
                    "description": "The general event category.",
                    "example": "Initialization"
                  },
                  "event_label": {
                    "type": "string",
                    "description": "An optional descriptor for the event",
                    "example": ""
                  },
                  "hit_number": {
                    "type": "integer",
                    "format": "int64",
                    "description": "Count of events in a sequence starting at 1",
                    "example": 1
                  },
                  "hit_timestamp": {
                    "type": "string",
                    "description": "The recorded time at which the event occurred.",
                    "example": "2018-02-12 20:28:32.113"
                  }
                },
                "$$ref": "#/definitions/AnalyticsEventDoc"
              },
              "description": null,
              "required": null
            }
          }
        },
        "DatasetDoc": {
          "type": "object",
          "required": [
            "name",
            "image_url_keys"
          ],
          "properties": {
            "created_at": {
              "type": "string",
              "format": "date-time",
              "description": "The timestamp the item was created",
              "example": "2018-01-04T20:13:55.373557+0000"
            },
            "created_by": {
              "type": "string",
              "description": "The user that created the item",
              "example": "system"
            },
            "updated_at": {
              "type": "string",
              "format": "date-time",
              "description": "The timestamp the item was last updated",
              "example": "2018-01-04T20:13:55.373557+0000"
            },
            "updated_by": {
              "type": "string",
              "description": "The user that last updated the item",
              "example": "system"
            },
            "name": {
              "type": "string",
              "description": "The name of the dataset.",
              "required": true,
              "example": "DemoDataset"
            },
            "image_url_keys": {
              "type": "array",
              "items": {
                "type": "string",
                "example": "imageURL"
              },
              "description": "The keys of the fields containing image_urls for the dataset.",
              "required": true
            }
          }
        },
        "DatasetItemDoc": {
          "type": "object",
          "required": [
            "imageURL"
          ],
          "properties": {
            "created_at": {
              "type": "string",
              "format": "date-time",
              "description": "The timestamp the item was created",
              "example": "2018-01-04T20:13:55.373557+0000"
            },
            "created_by": {
              "type": "string",
              "description": "The user that created the item",
              "example": "system"
            },
            "updated_at": {
              "type": "string",
              "format": "date-time",
              "description": "The timestamp the item was last updated",
              "example": "2018-01-04T20:13:55.373557+0000"
            },
            "updated_by": {
              "type": "string",
              "description": "The user that last updated the item",
              "example": "system"
            },
            "imageURL": {
              "type": "string",
              "description": "A field mapped to the image_url_keys for this dataset",
              "required": true,
              "example": "https://upload.wikimedia.org/wikipedia/en/d/d4/Mickey_Mouse.png"
            },
            "title": {
              "type": "string",
              "description": "Other field example",
              "required": false,
              "example": "Mickey Mouse"
            }
          }
        },
        "NewDatasetItemDoc": {
          "type": "object",
          "required": [
            "imageURL"
          ],
          "properties": {
            "imageURL": {
              "type": "string",
              "description": "A field mapped to the image_url_keys for this dataset",
              "required": true,
              "example": "https://upload.wikimedia.org/wikipedia/en/d/d4/Mickey_Mouse.png"
            },
            "title": {
              "type": "string",
              "description": "Other field example",
              "required": false,
              "example": "Mickey Mouse"
            }
          }
        }
      },
      "paths": {
        "/accounts/": {
          "post": {
            "operationId": "Accounts_create_account1",
            "summary": "Create a new account",
            "description": "Create a new account.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Accounts"
            ],
            "parameters": [
              {
                "type": "object",
                "name": "body",
                "required": true,
                "in": "body",
                "schema": {
                  "type": "object",
                  "required": [
                    "id",
                    "name"
                  ],
                  "properties": {
                    "id": {
                      "type": "string",
                      "description": "The url safe id for the account (this cannot be changed).",
                      "required": true,
                      "example": "test_inc"
                    },
                    "name": {
                      "type": "string",
                      "description": "The name of the account (this can be changed).",
                      "required": true,
                      "example": "Test, Inc."
                    }
                  },
                  "name": "body",
                  "$$ref": "#/definitions/NewAccountDoc"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Successful Operation",
                "schema": {
                  "type": "object",
                  "required": [],
                  "properties": {
                    "topic": {
                      "type": "string",
                      "description": "???",
                      "example": "fg01-evt-global"
                    },
                    "msg_type": {
                      "type": "string",
                      "description": "The type of message",
                      "example": "job-created"
                    },
                    "account_id": {
                      "type": "string",
                      "description": "The account id related to the job",
                      "example": "848c0271-d307-426b-9291-6d99f17039a3"
                    },
                    "task_id": {
                      "type": "string",
                      "description": "The task id"
                    },
                    "created_by": {
                      "type": "string",
                      "description": "Task created by",
                      "example": "system"
                    },
                    "job_id": {
                      "type": "string",
                      "description": "The job id",
                      "example": "db36cc07-6f28-421a-afd4-88288b625fee"
                    },
                    "name": {
                      "type": "string",
                      "description": "The name of the job",
                      "example": "job-name"
                    },
                    "process_status": {
                      "type": "object",
                      "required": [],
                      "properties": {
                        "status": {
                          "type": "integer",
                          "format": "int64",
                          "description": "The current job status id",
                          "example": 1
                        },
                        "display": {
                          "type": "string",
                          "description": "The current job status text",
                          "example": "Queued"
                        }
                      },
                      "$$ref": "#/definitions/ProcessStatusDoc"
                    }
                  },
                  "$$ref": "#/definitions/NewJobDoc"
                }
              },
              "202": {
                "description": "Processing request."
              },
              "400": {
                "description": "Bad request."
              },
              "409": {
                "description": "An account with that name already exists."
              }
            },
            "security": [
              {
                "slyce-account-id": []
              },
              {
                "slyce-api-key": []
              }
            ],
            "__originalOperationId": "Accounts.create_account",
            "url": "/accounts/",
            "method": "post"
          },
          "get": {
            "operationId": "Accounts_create_account2",
            "summary": "List the accounts",
            "description": "Get a list of all accounts in the system.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Accounts"
            ],
            "parameters": [
              {
                "type": "integer",
                "format": "int64",
                "description": "The page number to get",
                "default": 1,
                "example": 1,
                "required": false,
                "in": "query",
                "name": "page_number",
                "value": 1
              },
              {
                "type": "integer",
                "format": "int64",
                "description": "The number of items to return",
                "default": 20,
                "example": 20,
                "required": false,
                "in": "query",
                "name": "page_size",
                "value": 20
              }
            ],
            "responses": {
              "200": {
                "description": "Successful Operation",
                "schema": {
                  "type": "object",
                  "properties": {
                    "items": {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "required": [],
                        "properties": {
                          "created_at": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The timestamp the item was created",
                            "example": "2018-01-04T20:13:55.373557+0000"
                          },
                          "created_by": {
                            "type": "string",
                            "description": "The user that created the item",
                            "example": "system"
                          },
                          "updated_at": {
                            "type": "string",
                            "format": "date-time",
                            "description": "The timestamp the item was last updated",
                            "example": "2018-01-04T20:13:55.373557+0000"
                          },
                          "updated_by": {
                            "type": "string",
                            "description": "The user that last updated the item",
                            "example": "system"
                          },
                          "id": {
                            "type": "string",
                            "description": "The account id",
                            "example": "test_inc"
                          },
                          "name": {
                            "type": "string",
                            "description": "The name of the account",
                            "example": "Test, Inc."
                          },
                          "is_active": {
                            "type": "boolean",
                            "description": "Whether an account is active or not."
                          }
                        },
                        "$$ref": "#/definitions/AccountDoc"
                      }
                    },
                    "page_number": {
                      "type": "integer",
                      "format": "int64",
                      "description": "The current page number",
                      "example": 1
                    },
                    "page_size": {
                      "type": "integer",
                      "format": "int64",
                      "description": "The number of items returned",
                      "example": 20
                    },
                    "total_pages": {
                      "type": "integer",
                      "format": "int64",
                      "description": "The total number of pages available",
                      "example": 1
                    },
                    "total_items": {
                      "type": "integer",
                      "format": "int64",
                      "description": "The total number of items available",
                      "example": 1
                    }
                  }
                }
              }
            },
            "security": [
              {
                "slyce-account-id": []
              },
              {
                "slyce-api-key": []
              }
            ],
            "__originalOperationId": "Accounts.create_account",
            "url": "/accounts/",
            "method": "get"
          }
        }
      }
    },
    "errors": [],
    "apis": {
      "Accounts": {},
      "Analytics": {},
      "API Keys": {},
      "Datasets": {},
      "Images": {},
      "Jobs": {},
      "Spaces": {},
      "Workflows": {}
    }
  }
};
