/* tslint:disable */
export class ApiData {
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
        },
        "/accounts/{account_id}": {
          "patch": {
            "operationId": "Accounts_update_account",
            "summary": "Update an account",
            "description": "Update an existing account.",
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
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "object",
                "name": "body",
                "required": true,
                "in": "body",
                "schema": {
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
                  "name": "body",
                  "$$ref": "#/definitions/UpdateAccountDoc"
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
            "__originalOperationId": "Accounts.update_account",
            "url": "/accounts/{account_id}",
            "method": "patch"
          }
        },
        "/accounts/{account_id}/spaces/{space_id}/analytics/events/": {
          "post": {
            "operationId": "Analytics_analytics_event_tracking",
            "summary": "Track event",
            "description": "Accepts events with a proper schema for analytics tracking",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Analytics"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "space_id"
              },
              {
                "type": "object",
                "required": true,
                "in": "body",
                "name": "body",
                "schema": {
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
                  },
                  "$$ref": "#/definitions/AnalyticsEventTrackingDoc"
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
              "404": {
                "description": "The schema is not valid"
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
            "__originalOperationId": "Analytics.analytics_event_tracking",
            "url": "/accounts/{account_id}/spaces/{space_id}/analytics/events/",
            "method": "post"
          }
        },
        "/accounts/{account_id}/api-keys/": {
          "post": {
            "operationId": "API_Keys_create_api_key1",
            "summary": "Create a new API key",
            "description": "Create a new API key with a name and access control options.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "API Keys"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "object",
                "name": "body",
                "required": true,
                "in": "body",
                "schema": {
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
                  "name": "body",
                  "$$ref": "#/definitions/NewAPIKeyDoc"
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
              "409": {
                "description": "API Key Already Exists"
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
            "__originalOperationId": "API Keys.create_api_key",
            "url": "/accounts/{account_id}/api-keys/",
            "method": "post"
          },
          "get": {
            "operationId": "API_Keys_create_api_key2",
            "summary": "List the API keys",
            "description": "Get a list of all API keys associated with the account.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "API Keys"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "integer",
                "format": "int64",
                "description": "The page number to get",
                "default": 1,
                "example": 1,
                "required": false,
                "in": "query",
                "name": "page_number"
              },
              {
                "type": "integer",
                "format": "int64",
                "description": "The number of items to return",
                "default": 20,
                "example": 20,
                "required": false,
                "in": "query",
                "name": "page_size"
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
                        },
                        "$$ref": "#/definitions/APIKeyDoc"
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
            "__originalOperationId": "API Keys.create_api_key",
            "url": "/accounts/{account_id}/api-keys/",
            "method": "get"
          }
        },
        "/accounts/{account_id}/api-keys/{api_key}": {
          "patch": {
            "operationId": "API_Keys_update_api_key1",
            "summary": "Update an api key",
            "description": "Update the name and permissions of an API key.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "API Keys"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "api_key"
              },
              {
                "type": "object",
                "name": "body",
                "required": true,
                "in": "body",
                "schema": {
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
                  "name": "body",
                  "$$ref": "#/definitions/PatchAPIKeyDoc"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "API Key Updated"
              },
              "400": {
                "description": "Bad Request"
              },
              "404": {
                "description": "API Key Not Found"
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
            "__originalOperationId": "API Keys.update_api_key",
            "url": "/accounts/{account_id}/api-keys/{api_key}",
            "method": "patch"
          },
          "delete": {
            "operationId": "API_Keys_update_api_key2",
            "summary": "Delete an API key",
            "description": "Remove an api key entirely, revoking it.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "API Keys"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "api_key"
              }
            ],
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
            "__originalOperationId": "API Keys.update_api_key",
            "url": "/accounts/{account_id}/api-keys/{api_key}",
            "method": "delete"
          },
          "head": {
            "operationId": "API_Keys_update_api_key3",
            "summary": "Check if an API key exists",
            "description": "Check if an API key exists.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "API Keys"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "api_key"
              }
            ],
            "responses": {
              "200": {
                "description": "API key exists"
              },
              "404": {
                "description": "Not found"
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
            "__originalOperationId": "API Keys.update_api_key",
            "url": "/accounts/{account_id}/api-keys/{api_key}",
            "method": "head"
          },
          "get": {
            "operationId": "API_Keys_update_api_key4",
            "summary": "Get information about an API key",
            "description": "Get name and permissions associated with an API key.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "API Keys"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "api_key"
              }
            ],
            "responses": {
              "200": {
                "description": "Successful Operation",
                "schema": {
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
                  },
                  "$$ref": "#/definitions/APIKeyDoc"
                }
              },
              "404": {
                "description": "Not found"
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
            "__originalOperationId": "API Keys.update_api_key",
            "url": "/accounts/{account_id}/api-keys/{api_key}",
            "method": "get"
          }
        },
        "/accounts/{account_id}/spaces/{space_id}/datasets/": {
          "post": {
            "operationId": "Datasets_create_dataset1",
            "summary": "Create a new dataset",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Datasets"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "space_id"
              },
              {
                "type": "object",
                "name": "body",
                "required": true,
                "in": "body",
                "schema": {
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
                  "name": "body",
                  "$$ref": "#/definitions/NewDatasetDoc"
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
            "__originalOperationId": "Datasets.create_dataset",
            "url": "/accounts/{account_id}/spaces/{space_id}/datasets/",
            "method": "post"
          },
          "get": {
            "operationId": "Datasets_create_dataset2",
            "summary": "List datasets",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Datasets"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "space_id"
              },
              {
                "type": "integer",
                "format": "int64",
                "description": "The page number to get",
                "default": 1,
                "example": 1,
                "required": false,
                "in": "query",
                "name": "page_number"
              },
              {
                "type": "integer",
                "format": "int64",
                "description": "The number of items to return",
                "default": 20,
                "example": 20,
                "required": false,
                "in": "query",
                "name": "page_size"
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
                        },
                        "$$ref": "#/definitions/DatasetDoc"
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
              },
              "400": {
                "description": "Bad Request"
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
            "__originalOperationId": "Datasets.create_dataset",
            "url": "/accounts/{account_id}/spaces/{space_id}/datasets/",
            "method": "get"
          }
        },
        "/accounts/{account_id}/spaces/{space_id}/datasets/{dataset_name}": {
          "delete": {
            "operationId": "Datasets_delete_dataset1",
            "summary": "Delete a dataset",
            "description": "Remove a dataset entirely.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Datasets"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "space_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "dataset_name"
              }
            ],
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
            "__originalOperationId": "Datasets.delete_dataset",
            "url": "/accounts/{account_id}/spaces/{space_id}/datasets/{dataset_name}",
            "method": "delete"
          },
          "patch": {
            "operationId": "Datasets_delete_dataset2",
            "summary": "Update a dataset",
            "description": "Update an existing dataset.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Datasets"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "space_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "dataset_name"
              },
              {
                "type": "object",
                "name": "body",
                "required": true,
                "in": "body",
                "schema": {
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
                  "name": "body",
                  "$$ref": "#/definitions/UpdateDatasetDoc"
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
            "__originalOperationId": "Datasets.delete_dataset",
            "url": "/accounts/{account_id}/spaces/{space_id}/datasets/{dataset_name}",
            "method": "patch"
          }
        },
        "/accounts/{account_id}/spaces/{space_id}/datasets/{dataset_name}/items/": {
          "get": {
            "operationId": "Datasets_list_items_by_dataset1",
            "summary": "List items by dataset",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Datasets"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "space_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "dataset_name"
              },
              {
                "type": "integer",
                "format": "int64",
                "description": "The page number to get",
                "default": 1,
                "example": 1,
                "required": false,
                "in": "query",
                "name": "page_number"
              },
              {
                "type": "integer",
                "format": "int64",
                "description": "The number of items to return",
                "default": 20,
                "example": 20,
                "required": false,
                "in": "query",
                "name": "page_size"
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
                        },
                        "$$ref": "#/definitions/DatasetItemDoc"
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
            "__originalOperationId": "Datasets.list_items_by_dataset",
            "url": "/accounts/{account_id}/spaces/{space_id}/datasets/{dataset_name}/items/",
            "method": "get"
          },
          "post": {
            "operationId": "Datasets_list_items_by_dataset2",
            "summary": "Import Items",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Datasets"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "space_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "dataset_name"
              },
              {
                "type": "array",
                "items": {
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
                  },
                  "$$ref": "#/definitions/NewDatasetItemDoc"
                },
                "description": null,
                "required": true,
                "in": "body",
                "name": "body"
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
              "400": {
                "description": "Bad Request"
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
            "__originalOperationId": "Datasets.list_items_by_dataset",
            "url": "/accounts/{account_id}/spaces/{space_id}/datasets/{dataset_name}/items/",
            "method": "post"
          },
          "delete": {
            "operationId": "Datasets_list_items_by_dataset3",
            "summary": "Clear a dataset's items",
            "description": "Remove all data items from a dataset.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Datasets"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "space_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "dataset_name"
              }
            ],
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
            "__originalOperationId": "Datasets.list_items_by_dataset",
            "url": "/accounts/{account_id}/spaces/{space_id}/datasets/{dataset_name}/items/",
            "method": "delete"
          }
        },
        "/accounts/{account_id}/spaces/{space_id}/datasets/{dataset_name}/items/csv": {
          "post": {
            "operationId": "Datasets_import_csv_items",
            "summary": "Import Items With CSV",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Datasets"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "space_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "dataset_name"
              },
              {
                "type": "file",
                "name": "csv",
                "description": "file to upload",
                "required": true,
                "in": "body"
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
              "400": {
                "description": "Bad Request"
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
            "__originalOperationId": "Datasets.import_csv_items",
            "url": "/accounts/{account_id}/spaces/{space_id}/datasets/{dataset_name}/items/csv",
            "method": "post"
          }
        },
        "/accounts/{account_id}/images/ugc/{image_id}": {
          "get": {
            "operationId": "Images_get_ugc_image",
            "summary": "List all the workflow operand classifcations.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Images"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "image_id"
              }
            ],
            "responses": {
              "200": {}
            },
            "security": [
              {
                "slyce-account-id": []
              },
              {
                "slyce-api-key": []
              }
            ],
            "__originalOperationId": "Images.get_ugc_image",
            "url": "/accounts/{account_id}/images/ugc/{image_id}",
            "method": "get"
          }
        },
        "/accounts/{account_id}/jobs/": {
          "get": {
            "operationId": "Jobs_list_jobs",
            "summary": "List the jobs",
            "description": "Get a list of all jobs in the system.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Jobs"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "integer",
                "format": "int64",
                "description": "The page number to get",
                "default": 1,
                "example": 1,
                "required": false,
                "in": "query",
                "name": "page_number"
              },
              {
                "type": "integer",
                "format": "int64",
                "description": "The number of items to return",
                "default": 20,
                "example": 20,
                "required": false,
                "in": "query",
                "name": "page_size"
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
            "__originalOperationId": "Jobs.list_jobs",
            "url": "/accounts/{account_id}/jobs/",
            "method": "get"
          }
        },
        "/accounts/{account_id}/jobs/{job_id}": {
          "get": {
            "operationId": "Jobs_get_job",
            "summary": "Get the status of a job",
            "description": "Get the status of a job by its id.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Jobs"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "job_id"
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
            "__originalOperationId": "Jobs.get_job",
            "url": "/accounts/{account_id}/jobs/{job_id}",
            "method": "get"
          }
        },
        "/accounts/{account_id}/spaces/": {
          "post": {
            "operationId": "Spaces_create_space1",
            "summary": "Create a new space",
            "description": "Create a new space with a name.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Spaces"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "object",
                "name": "body",
                "required": true,
                "in": "body",
                "schema": {
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
                  "name": "body",
                  "$$ref": "#/definitions/NewSpaceDoc"
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
              "409": {
                "description": "Space Already Exists"
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
            "__originalOperationId": "Spaces.create_space",
            "url": "/accounts/{account_id}/spaces/",
            "method": "post"
          },
          "get": {
            "operationId": "Spaces_create_space2",
            "summary": "List the spaces",
            "description": "Get a list of all spaces associated with the account.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Spaces"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "integer",
                "format": "int64",
                "description": "The page number to get",
                "default": 1,
                "example": 1,
                "required": false,
                "in": "query",
                "name": "page_number"
              },
              {
                "type": "integer",
                "format": "int64",
                "description": "The number of items to return",
                "default": 20,
                "example": 20,
                "required": false,
                "in": "query",
                "name": "page_size"
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
                        },
                        "$$ref": "#/definitions/SpaceDoc"
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
            "__originalOperationId": "Spaces.create_space",
            "url": "/accounts/{account_id}/spaces/",
            "method": "get"
          }
        },
        "/accounts/{account_id}/spaces/{space_id}": {
          "patch": {
            "operationId": "Spaces_update_space1",
            "summary": "Update a space",
            "description": "Update attributes concerning a space.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Spaces"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "space_id"
              },
              {
                "type": "object",
                "name": "body",
                "required": true,
                "in": "body",
                "schema": {
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
                  "name": "body",
                  "$$ref": "#/definitions/PatchSpaceDoc"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Space Updated"
              },
              "400": {
                "description": "Bad Request"
              },
              "404": {
                "description": "Space Not Found"
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
            "__originalOperationId": "Spaces.update_space",
            "url": "/accounts/{account_id}/spaces/{space_id}",
            "method": "patch"
          },
          "delete": {
            "operationId": "Spaces_update_space2",
            "summary": "Delete a space",
            "description": "Remove a space entirely.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Spaces"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "space_id"
              }
            ],
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
            "__originalOperationId": "Spaces.update_space",
            "url": "/accounts/{account_id}/spaces/{space_id}",
            "method": "delete"
          },
          "head": {
            "operationId": "Spaces_update_space3",
            "summary": "Check if a space exists",
            "description": "Check if a space exists.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Spaces"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "space_id"
              }
            ],
            "responses": {
              "200": {
                "description": "Space exists"
              },
              "404": {
                "description": "Not found"
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
            "__originalOperationId": "Spaces.update_space",
            "url": "/accounts/{account_id}/spaces/{space_id}",
            "method": "head"
          },
          "get": {
            "operationId": "Spaces_update_space4",
            "summary": "Get information about a space",
            "description": "Get information about a specific space.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Spaces"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "space_id"
              }
            ],
            "responses": {
              "200": {
                "description": "Successful Operation",
                "schema": {
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
                  },
                  "$$ref": "#/definitions/SpaceDoc"
                }
              },
              "404": {
                "description": "Not found"
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
            "__originalOperationId": "Spaces.update_space",
            "url": "/accounts/{account_id}/spaces/{space_id}",
            "method": "get"
          }
        },
        "/accounts/{account_id}/spaces/{space_id}/workflows/operand_classifcations": {
          "get": {
            "operationId": "Workflows_get_operations1",
            "summary": "List all the workflow operand classifcations.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Workflows"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "space_id"
              }
            ],
            "responses": {
              "200": {}
            },
            "security": [
              {
                "slyce-account-id": []
              },
              {
                "slyce-api-key": []
              }
            ],
            "__originalOperationId": "Workflows.get_operations",
            "url": "/accounts/{account_id}/spaces/{space_id}/workflows/operand_classifcations",
            "method": "get"
          }
        },
        "/accounts/{account_id}/spaces/{space_id}/workflows/operations": {
          "get": {
            "operationId": "Workflows_get_operations2",
            "summary": "List all the workflow operations.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Workflows"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "space_id"
              }
            ],
            "responses": {
              "200": {}
            },
            "security": [
              {
                "slyce-account-id": []
              },
              {
                "slyce-api-key": []
              }
            ],
            "__originalOperationId": "Workflows.get_operations",
            "url": "/accounts/{account_id}/spaces/{space_id}/workflows/operations",
            "method": "get"
          }
        },
        "/accounts/{account_id}/spaces/{space_id}/workflows/operators": {
          "get": {
            "operationId": "Workflows_get_operators",
            "summary": "List all the workflow operators.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Workflows"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "space_id"
              }
            ],
            "responses": {
              "200": {}
            },
            "security": [
              {
                "slyce-account-id": []
              },
              {
                "slyce-api-key": []
              }
            ],
            "__originalOperationId": "Workflows.get_operators",
            "url": "/accounts/{account_id}/spaces/{space_id}/workflows/operators",
            "method": "get"
          }
        },
        "/accounts/{account_id}/spaces/{space_id}/workflows/": {
          "get": {
            "operationId": "Workflows_list_workflows1",
            "summary": "List the workflows",
            "description": "Get a list of all workflows in a space.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Workflows"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "space_id"
              },
              {
                "type": "integer",
                "format": "int64",
                "description": "The page number to get",
                "default": 1,
                "example": 1,
                "required": false,
                "in": "query",
                "name": "page_number"
              },
              {
                "type": "integer",
                "format": "int64",
                "description": "The number of items to return",
                "default": 20,
                "example": 20,
                "required": false,
                "in": "query",
                "name": "page_size"
              }
            ],
            "responses": {
              "200": {
                "description": "Workflow Updated"
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
            "__originalOperationId": "Workflows.list_workflows",
            "url": "/accounts/{account_id}/spaces/{space_id}/workflows/",
            "method": "get"
          },
          "post": {
            "operationId": "Workflows_list_workflows2",
            "summary": "Create a new workflow.",
            "description": "Create a new workflow using Operations and Operators to build out the execution. To copy a workflow add source_workflow_id to the query string and only pass the workflow_name in the body.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Workflows"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "space_id"
              },
              {
                "type": "string",
                "name": "source_workflow_id",
                "required": null,
                "in": "query"
              },
              {
                "type": "object",
                "name": "body",
                "required": true,
                "in": "body",
                "schema": {
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
                  "name": "body",
                  "$$ref": "#/definitions/CreateWorkflowDoc"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Workflow Created"
              },
              "409": {
                "description": "Workflow Already Exists"
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
            "__originalOperationId": "Workflows.list_workflows",
            "url": "/accounts/{account_id}/spaces/{space_id}/workflows/",
            "method": "post"
          }
        },
        "/accounts/{account_id}/spaces/{space_id}/workflows/{workflow_id}": {
          "get": {
            "operationId": "Workflows_get_workflow1",
            "summary": "Get a workflow",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Workflows"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "space_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "workflow_id"
              }
            ],
            "responses": {
              "200": {
                "description": "Workflow Updated"
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
            "__originalOperationId": "Workflows.get_workflow",
            "url": "/accounts/{account_id}/spaces/{space_id}/workflows/{workflow_id}",
            "method": "get"
          },
          "patch": {
            "operationId": "Workflows_get_workflow2",
            "summary": "Update a workflow.",
            "description": "Update a new workflow using Operations and Operators to build out the execution.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Workflows"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "space_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "workflow_id"
              },
              {
                "type": "object",
                "name": "body",
                "required": true,
                "in": "body",
                "schema": {
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
                  "name": "body",
                  "$$ref": "#/definitions/UpdateWorkflowDoc"
                }
              }
            ],
            "responses": {
              "200": {
                "description": "Workflow Updated"
              },
              "404": {
                "description": "Workflow Not Found"
              },
              "409": {
                "description": "Workflow Already Exists"
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
            "__originalOperationId": "Workflows.get_workflow",
            "url": "/accounts/{account_id}/spaces/{space_id}/workflows/{workflow_id}",
            "method": "patch"
          },
          "delete": {
            "operationId": "Workflows_get_workflow3",
            "summary": "Delete a workflow.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Workflows"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "space_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "workflow_id"
              }
            ],
            "responses": {
              "200": {
                "description": "Workflow Updated"
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
            "__originalOperationId": "Workflows.get_workflow",
            "url": "/accounts/{account_id}/spaces/{space_id}/workflows/{workflow_id}",
            "method": "delete"
          },
          "post": {
            "operationId": "Workflows_get_workflow4",
            "summary": "Execute a workflow.",
            "description": "There are two options for this method. You can upload an image or pass an image URL. To upload an image use 'text/plain' as the 'Content-Type' and upload the image. To pass the image URL use 'application/json' as the 'Content-Type' and pass 'image_url' as a param on the body.  If passed, 'workflow_options' must be valid JSON.",
            "consumes": [
              "application/json"
            ],
            "produces": [
              "application/json"
            ],
            "tags": [
              "Workflows"
            ],
            "parameters": [
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "account_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "space_id"
              },
              {
                "type": "string",
                "required": true,
                "in": "path",
                "name": "workflow_id"
              },
              {
                "type": "object",
                "properties": {},
                "name": "workflow_options",
                "required": null,
                "in": "query"
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
                "description": "Executing Workflow"
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
            "__originalOperationId": "Workflows.get_workflow",
            "url": "/accounts/{account_id}/spaces/{space_id}/workflows/{workflow_id}",
            "method": "post"
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
