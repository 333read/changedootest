define({ "api": [
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": ""
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/PublicController.php",
    "group": "/Users/GAOYI/wwwroot/dootask/app/Http/Controllers/Api/PublicController.php",
    "groupTitle": "/Users/GAOYI/wwwroot/dootask/app/Http/Controllers/Api/PublicController.php",
    "name": ""
  },
  {
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mac",
            "description": "<p>使用逗号分割多个</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time",
            "description": ""
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "app/Http/Controllers/Api/PublicController.php",
    "group": "/Users/GAOYI/wwwroot/dootask/app/Http/Controllers/Api/PublicController.php",
    "groupTitle": "/Users/GAOYI/wwwroot/dootask/app/Http/Controllers/Api/PublicController.php",
    "name": ""
  },
  {
    "type": "post",
    "url": "api/approve/export",
    "title": "18. 导出数据",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "approve",
    "name": "export",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ApproveController.php",
    "groupTitle": "工作流"
  },
  {
    "type": "get",
    "url": "api/approve/identitylinkHistory/findParticipant",
    "title": "16. 查询流程实例的参与者（已结束）",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "approve",
    "name": "identitylinkHistory__findParticipant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ApproveController.php",
    "groupTitle": "工作流"
  },
  {
    "type": "get",
    "url": "api/approve/identitylink/findParticipant",
    "title": "12. 查询流程实例的参与者（审批中）",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "approve",
    "name": "identitylink__findParticipant",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ApproveController.php",
    "groupTitle": "工作流"
  },
  {
    "type": "post",
    "url": "api/approve/procHistory/findProcNotify",
    "title": "15. 查询抄送我的流程（已结束）",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "approve",
    "name": "procHistory__findProcNotify",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ApproveController.php",
    "groupTitle": "工作流"
  },
  {
    "type": "post",
    "url": "api/approve/procHistory/findTask",
    "title": "13. 查询需要我审批的流程（已结束）",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "approve",
    "name": "procHistory__findTask",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ApproveController.php",
    "groupTitle": "工作流"
  },
  {
    "type": "post",
    "url": "api/approve/procHistory/startByMyself",
    "title": "14. 查询我启动的流程（已结束）",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "approve",
    "name": "procHistory__startByMyself",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ApproveController.php",
    "groupTitle": "工作流"
  },
  {
    "type": "post",
    "url": "api/approve/procdef/all",
    "title": "02. 查询流程定义",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "approve",
    "name": "procdef__all",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ApproveController.php",
    "groupTitle": "工作流"
  },
  {
    "type": "get",
    "url": "api/approve/procdef/del",
    "title": "03. 删除流程定义",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "approve",
    "name": "procdef__del",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ApproveController.php",
    "groupTitle": "工作流"
  },
  {
    "type": "post",
    "url": "api/approve/process/addGlobalComment",
    "title": "05. 添加全局评论",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "approve",
    "name": "process__addGlobalComment",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ApproveController.php",
    "groupTitle": "工作流"
  },
  {
    "type": "get",
    "url": "api/approve/process/detail",
    "title": "17. 根据流程ID查询流程详情",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "approve",
    "name": "process__detail",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ApproveController.php",
    "groupTitle": "工作流"
  },
  {
    "type": "post",
    "url": "api/approve/process/findProcNotify",
    "title": "11. 查询抄送我的流程（审批中）",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "approve",
    "name": "process__findProcNotify",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ApproveController.php",
    "groupTitle": "工作流"
  },
  {
    "type": "post",
    "url": "api/approve/process/findTask",
    "title": "08. 查询需要我审批的流程（审批中）",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "approve",
    "name": "process__findTask",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ApproveController.php",
    "groupTitle": "工作流"
  },
  {
    "type": "post",
    "url": "api/approve/process/start",
    "title": "04. 启动流程（审批中）",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "approve",
    "name": "process__start",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ApproveController.php",
    "groupTitle": "工作流"
  },
  {
    "type": "post",
    "url": "api/approve/process/startByMyself",
    "title": "10. 查询我启动的流程（审批中）",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "approve",
    "name": "process__startByMyself",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ApproveController.php",
    "groupTitle": "工作流"
  },
  {
    "type": "post",
    "url": "api/approve/process/startByMyselfAll",
    "title": "09. 查询我启动的流程（全部）",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "approve",
    "name": "process__startByMyselfAll",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ApproveController.php",
    "groupTitle": "工作流"
  },
  {
    "type": "post",
    "url": "api/approve/task/complete",
    "title": "06. 审批",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "approve",
    "name": "task__complete",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ApproveController.php",
    "groupTitle": "工作流"
  },
  {
    "type": "post",
    "url": "api/approve/task/withdraw",
    "title": "07. 撤回",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "approve",
    "name": "task__withdraw",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ApproveController.php",
    "groupTitle": "工作流"
  },
  {
    "type": "get",
    "url": "api/dialog/group/add",
    "title": "34. 新增群组",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "group__add",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "avatar",
            "description": "<p>群头像</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "chat_name",
            "description": "<p>群名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "userids",
            "description": "<p>群成员，格式: [userid1, userid2, userid3]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/group/adduser",
    "title": "36. 添加群成员",
    "description": "<p>需要token身份</p> <ul> <li>有群主时：只有群主可以邀请</li> <li>没有群主时：群内成员都可以邀请</li> </ul>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "group__adduser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dialog_id",
            "description": "<p>会话ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "userids",
            "description": "<p>新增的群成员，格式: [userid1, userid2, userid3]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/group/deluser",
    "title": "37. 移出（退出）群成员",
    "description": "<p>需要token身份</p> <ul> <li>只有群主、邀请人可以踢人</li> <li>群主、任务人员、项目人员不可被踢或退出</li> </ul>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "group__adduser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dialog_id",
            "description": "<p>会话ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "userids",
            "description": "<p>移出的群成员，格式: [userid1, userid2, userid3]</p> <ul> <li>留空表示自己退出</li> <li>有值表示移出，仅限群主操作</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/group/disband",
    "title": "39. 解散群组",
    "description": "<p>需要token身份</p> <ul> <li>只有群主且是个人类型群可以解散</li> </ul>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "group__disband",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dialog_id",
            "description": "<p>会话ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/group/edit",
    "title": "35. 修改群组",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "group__edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dialog_id",
            "description": "<p>会话ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "avatar",
            "description": "<p>群头像</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "chat_name",
            "description": "<p>群名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "admin",
            "description": "<p>系统管理员操作（1：只判断是不是系统管理员，否则判断是否群管理员）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/group/searchuser",
    "title": "40. 搜索个人群（仅限管理员）",
    "description": "<p>需要token身份，用于创建部门搜索个人群组</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "group__searchuser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>关键词</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/group/transfer",
    "title": "38. 转让群组",
    "description": "<p>需要token身份</p> <ul> <li>只有群主且是个人类型群可以解散</li> </ul>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "group__transfer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dialog_id",
            "description": "<p>会话ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userid",
            "description": "<p>新的群主</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/lists",
    "title": "01. 对话列表",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "lists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "timerange",
            "description": "<p>时间范围（如：1678248944,1678248944）</p> <ul> <li>第一个时间: 读取在这个时间之后更新的数据</li> <li>第二个时间: 读取在这个时间之后删除的数据ID（第1页附加返回数据: deleted_id）</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>当前页，默认:1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pagesize",
            "description": "<p>每页显示数量，默认:50，最大:100</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/msg/color",
    "title": "33. 设置颜色",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__color",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dialog_id",
            "description": "<p>会话ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>颜色</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/msg/detail",
    "title": "22. 消息详情",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__detail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "msg_id",
            "description": "<p>消息ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "only_update_at",
            "description": "<p>仅获取update_at字段</p> <ul> <li>no (默认)</li> <li>yes</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/msg/done",
    "title": "32. 完成待办",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__done",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>待办数据ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/msg/download",
    "title": "23. 文件下载",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__download",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "msg_id",
            "description": "<p>消息ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "down",
            "description": "<p>直接下载</p> <ul> <li>yes: 下载（默认）</li> <li>preview: 转预览地址</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/msg/emoji",
    "title": "28. emoji回复",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__emoji",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "msg_id",
            "description": "<p>消息ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "symbol",
            "description": "<p>回复或取消的emoji表情</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/msg/forward",
    "title": "27. 转发消息给",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__forward",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "msg_id",
            "description": "<p>消息ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "dialogids",
            "description": "<p>转发给的对话ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "userids",
            "description": "<p>转发给的成员ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/msg/list",
    "title": "09. 获取消息列表",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__list",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dialog_id",
            "description": "<p>对话ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "msg_id",
            "description": "<p>消息ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "position_id",
            "description": "<p>此消息ID前后的数据</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "prev_id",
            "description": "<p>此消息ID之前的数据</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "next_id",
            "description": "<p>此消息ID之后的数据</p> <ul> <li>position_id、prev_id、next_id 只有一个有效，优先循序为：position_id &gt; prev_id &gt; next_id</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "msg_type",
            "description": "<p>消息类型</p> <ul> <li>tag: 标记</li> <li>link: 链接</li> <li>text: 文本</li> <li>image: 图片</li> <li>file: 文件</li> <li>record: 录音</li> <li>meeting: 会议</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "take",
            "description": "<p>获取条数，默认:50，最大:100</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/msg/mark",
    "title": "25. 消息标记操作",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__mark",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dialog_id",
            "description": "<p>会话ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>类型</p> <ul> <li>read: 已读</li> <li>unread: 未读</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "after_msg_id",
            "description": "<p>仅标记已读指定之后（含）的消息</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/msg/one",
    "title": "11. 获取单条消息",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__one",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "msg_id",
            "description": "<p>消息ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  
  {
    "type": "get",
    "url": "api/dialog/msg/read",
    "title": "12. 已读聊天消息",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>消息ID（组）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/msg/readlist",
    "title": "21. 获取消息阅读情况",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__readlist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "msg_id",
            "description": "<p>消息ID（需要是消息的发送人）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/msg/search",
    "title": "10. 搜索消息位置",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dialog_id",
            "description": "<p>对话ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>搜索关键词</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "post",
    "url": "api/dialog/msg/sendanon",
    "title": "20. 发送匿名消息",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__sendanon",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userid",
            "description": "<p>对方会员ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>消息内容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "post",
    "url": "api/dialog/msg/sendfile",
    "title": "17. 文件上传",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__sendfile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dialog_id",
            "description": "<p>对话ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "reply_id",
            "description": "<p>回复ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "image_attachment",
            "description": "<p>图片是否也存到附件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "filename",
            "description": "<p>post-文件名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image64",
            "description": "<p>post-base64图片（二选一）</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "files",
            "description": "<p>post-文件对象（二选一）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "post",
    "url": "api/dialog/msg/sendfiles",
    "title": "18. 群发文件上传",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__sendfile",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_ids",
            "description": "<p>用户ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dialog_ids",
            "description": "<p>对话ID（user_ids 二选一）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "reply_id",
            "description": "<p>回复ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "image_attachment",
            "description": "<p>图片是否也存到附件</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "filename",
            "description": "<p>post-文件名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image64",
            "description": "<p>post-base64图片（二选一）</p>"
          },
          {
            "group": "Parameter",
            "type": "File",
            "optional": true,
            "field": "files",
            "description": "<p>post-文件对象（二选一）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/msg/sendfileid",
    "title": "19. 通过文件ID发送文件",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__sendfileid",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "file_id",
            "description": "<p>消息ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "dialogids",
            "description": "<p>转发给的对话ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "userids",
            "description": "<p>转发给的成员ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "post",
    "url": "api/dialog/msg/sendrecord",
    "title": "16. 发送语音",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__sendrecord",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dialog_id",
            "description": "<p>对话ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "reply_id",
            "description": "<p>回复ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "base64",
            "description": "<p>语音base64</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>语音时长（毫秒）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "post",
    "url": "api/dialog/msg/sendtext",
    "title": "15. 发送消息",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__sendtext",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dialog_id",
            "description": "<p>对话ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>消息内容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "text_type",
            "description": "<p>消息类型</p> <ul> <li>html: HTML（默认）</li> <li>md: MARKDOWN</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "update_id",
            "description": "<p>更新消息ID（优先大于 reply_id）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "update_mark",
            "description": "<p>是否更新标记</p> <ul> <li>no: 不标记（仅机器人支持）</li> <li>yes: 标记（默认）</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "reply_id",
            "description": "<p>回复ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "silence",
            "description": "<p>是否静默发送</p> <ul> <li>no: 正常发送（默认）</li> <li>yes: 静默发送</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/msg/silence",
    "title": "26. 消息免打扰",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__silence",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dialog_id",
            "description": "<p>会话ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>类型</p> <ul> <li>set</li> <li>cancel</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "post",
    "url": "api/dialog/msg/stream",
    "title": "14. 通知成员监听消息",
    "description": "<p>通知指定会员EventSource监听流动消息</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__stream",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dialog_id",
            "description": "<p>对话ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userid",
            "description": "<p>通知会员ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "stream_url",
            "description": "<p>流动消息地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/msg/tag",
    "title": "29. 标注/取消标注",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__tag",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "msg_id",
            "description": "<p>消息ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/msg/todo",
    "title": "30. 设待办/取消待办",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__todo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "msg_id",
            "description": "<p>消息ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>设待办对象</p> <ul> <li>all: 会话全部成员（默认）</li> <li>user: 会话指定成员</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "userids",
            "description": "<p>会员ID组（type=user有效，格式: [userid1, userid2, userid3]）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/msg/todolist",
    "title": "31. 获取消息待办情况",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__todolist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "msg_id",
            "description": "<p>消息ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/msg/unread",
    "title": "13. 获取未读消息数据",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__unread",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dialog_id",
            "description": "<p>对话ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "data:",
          "content": "{\n    \"id\": 43,\n    \"unread\": 308,\n    \"mention\": 11,\n    \"user_at\": \"2020-12-12 00:00:00.000\",\n    \"user_ms\": 1677558147167,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/msg/withdraw",
    "title": "24. 聊天消息撤回",
    "description": "<p>消息撤回限制24小时内，需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "msg__withdraw",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "msg_id",
            "description": "<p>消息ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "post",
    "url": "api/dialog/okr/add",
    "title": "41. 创建OKR评论会话",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "okr__add",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>标题</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "link_id",
            "description": "<p>关联id</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "userids",
            "description": "<p>群成员，格式: [userid1, userid2, userid3]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "post",
    "url": "api/dialog/okr/push",
    "title": "42. 推送OKR相关信息",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "okr__push",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "text",
            "description": "<p>发送内容</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userid",
            "description": "<p>成员ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/one",
    "title": "03. 获取单个会话信息",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "one",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dialog_id",
            "description": "<p>对话ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/open/user",
    "title": "08. 打开会话",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "open__user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userid",
            "description": "<p>对话会员ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/search",
    "title": "02. 搜索会话",
    "description": "<p>根据消息关键词搜索相关会话，需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>消息关键词</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/tel",
    "title": "07. 获取对方联系电话",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "tel",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dialog_id",
            "description": "<p>会话ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/todo",
    "title": "05. 获取会话待办",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "todo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dialog_id",
            "description": "<p>会话ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/top",
    "title": "06. 会话置顶",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "top",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dialog_id",
            "description": "<p>会话ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/dialog/user",
    "title": "04. 获取会话成员",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "dialog",
    "name": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "dialog_id",
            "description": "<p>会话ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "getuser",
            "description": "<p>获取会员详情（1: 返回会员昵称、邮箱等基本信息，0: 默认不返回）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/DialogController.php",
    "groupTitle": "对话"
  },
  {
    "type": "get",
    "url": "api/file/add",
    "title": "04. 添加、修改文件(夹)",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "file",
    "name": "add",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>项目名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>文件类型</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>文件ID（赋值修改文件名称）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pid",
            "description": "<p>父级ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "文件"
  },
  {
    "type": "get",
    "url": "api/file/content",
    "title": "08. 获取文件内容",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "file",
    "name": "content",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number|String",
            "optional": false,
            "field": "id",
            "description": "<ul> <li>Number: 文件ID（需要登录）</li> <li>String: 链接码（不需要登录，用于预览）</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "only_update_at",
            "description": "<p>仅获取update_at字段</p> <ul> <li>no (默认)</li> <li>yes</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "down",
            "description": "<p>直接下载</p> <ul> <li>no: 浏览（默认）</li> <li>yes: 下载（office文件直接下载，除非是preview）</li> <li>preview: 转预览地址</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "history_id",
            "description": "<p>读取历史记录ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "文件"
  },
  {
    "type": "get",
    "url": "api/file/content/history",
    "title": "13. 获取内容历史",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "file",
    "name": "content__history",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>文件ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>当前页，默认:1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pagesize",
            "description": "<p>每页显示数量，默认:20，最大:100</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "文件"
  },
  {
    "type": "get",
    "url": "api/file/content/office",
    "title": "11. 保存文件内容（office）",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "file",
    "name": "content__office",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>文件ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "文件"
  },
  {
    "type": "get",
    "url": "api/file/content/restore",
    "title": "14. 恢复文件历史",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "file",
    "name": "content__restore",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>文件ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "history_id",
            "description": "<p>历史数据ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "文件"
  },
  {
    "type": "get",
    "url": "api/file/content/save",
    "title": "09. 保存文件内容",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "file",
    "name": "content__save",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>文件ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "D",
            "description": "<p>Request Payload 提交</p> <ul> <li>content: 内容</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "文件"
  },
  {
    "type": "get",
    "url": "api/file/content/upload",
    "title": "12. 保存文件内容（上传文件）",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "file",
    "name": "content__upload",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pid",
            "description": "<p>父级ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "files",
            "description": "<p>文件名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "文件"
  },
  {
    "type": "get",
    "url": "api/file/copy",
    "title": "05. 复制文件(夹)",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "file",
    "name": "copy",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>文件ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "文件"
  },
  {
    "type": "get",
    "url": "api/file/download/confirm",
    "title": "20. 确认下载",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "file",
    "name": "download__confirm",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>下载文件名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "文件"
  },
  {
    "type": "get",
    "url": "api/file/download/pack",
    "title": "19. 打包文件",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "file",
    "name": "download__pack",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "ids",
            "description": "<p>文件ID，格式: [id, id2, id3]</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>下载文件名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "文件"
  },
  {
    "type": "get",
    "url": "api/file/link",
    "title": "18. 获取链接",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "file",
    "name": "link",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>文件ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refresh",
            "description": "<p>刷新链接</p> <ul> <li>no: 只获取（默认）</li> <li>yes: 刷新链接，之前的将失效</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "文件"
  },
  {
    "type": "get",
    "url": "api/file/lists",
    "title": "01. 获取文件列表",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "file",
    "name": "lists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pid",
            "description": "<p>父级ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "文件"
  },
  {
    "type": "get",
    "url": "api/file/move",
    "title": "06. 移动文件(夹)",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "file",
    "name": "move",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Numbers",
            "optional": false,
            "field": "ids",
            "description": "<p>文件ID（格式：[id1, id2]）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "pid",
            "description": "<p>移动到的文件夹ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "文件"
  },
  {
    "type": "get",
    "url": "api/file/office/token",
    "title": "10. 获取token",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "file",
    "name": "office__token",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "config",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "文件"
  },
  {
    "type": "get",
    "url": "api/file/one",
    "title": "02. 获取单条数据",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "file",
    "name": "one",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number|String",
            "optional": false,
            "field": "id",
            "description": "<ul> <li>Number 文件ID（需要登录）</li> <li>String 链接码（不需要登录，用于预览）</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "文件"
  },
  {
    "type": "get",
    "url": "api/file/remove",
    "title": "07. 删除文件(夹)",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "file",
    "name": "remove",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Numbers",
            "optional": false,
            "field": "ids",
            "description": "<p>文件ID（格式：[id1, id2]）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "文件"
  },
  {
    "type": "get",
    "url": "api/file/search",
    "title": "03. 搜索文件列表",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "file",
    "name": "search",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "link",
            "description": "<p>通过分享地址搜索（如：https://t.hitosea.com/single/file/ODcwOCwzOSxpa0JBS2lmVQ==）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "key",
            "description": "<p>关键词</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "文件"
  },
  {
    "type": "get",
    "url": "api/file/share",
    "title": "15. 获取共享信息",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "file",
    "name": "share",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>文件ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "文件"
  },
  {
    "type": "get",
    "url": "api/file/share/out",
    "title": "17. 退出共享",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "file",
    "name": "share__out",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>文件ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "文件"
  },
  {
    "type": "get",
    "url": "api/file/share/update",
    "title": "16. 设置共享",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "file",
    "name": "share__update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>文件ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "userids",
            "description": "<p>共享成员，格式: [userid1, userid2, userid3]</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "permission",
            "description": "<p>共享方式</p> <ul> <li>0：只读</li> <li>1：读写</li> <li>-1: 删除</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "force",
            "description": "<p>设置共享时是否忽略提醒</p> <ul> <li>0：如果子文件夹已存在共享则ret返回-3001（默认）</li> <li>1：忽略提醒</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/FileController.php",
    "groupTitle": "文件"
  },
  {
    "type": "get",
    "url": "api/project/add",
    "title": "03. 添加项目",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "add",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>项目名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "desc",
            "description": "<p>项目介绍</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "columns",
            "description": "<p>列表，格式：列表名称1,列表名称2</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "flow",
            "description": "<p>开启流程</p> <ul> <li>open: 开启</li> <li>close: 关闭（默认）</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "personal",
            "description": "<p>个人项目，注册成功时创建（仅支持创建一个个人项目）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/archived",
    "title": "12. 归档项目",
    "description": "<p>需要token身份（限：项目负责人）</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "archived",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "project_id",
            "description": "<p>项目ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>类型</p> <ul> <li>add：归档（默认）</li> <li>recovery：还原归档</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/column/add",
    "title": "15. 添加任务列表",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "column__add",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "project_id",
            "description": "<p>项目ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>列表名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/column/lists",
    "title": "14. 获取任务列表",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "column__lists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "project_id",
            "description": "<p>项目ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>当前页，默认:1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pagesize",
            "description": "<p>每页显示数量，默认:100，最大:200</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/column/one",
    "title": "18. 获取任务列详细",
    "description": "<p>需要token身份（限：项目负责人）</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "column__one",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "column_id",
            "description": "<p>列表ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "deleted",
            "description": "<p>是否读取已删除</p> <ul> <li>all：所有</li> <li>yes：已删除</li> <li>no：未删除（默认）</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/column/remove",
    "title": "17. 删除任务列表",
    "description": "<p>需要token身份（限：项目负责人）</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "column__remove",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "column_id",
            "description": "<p>列表ID（留空为添加列表）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/column/update",
    "title": "16. 修改任务列表",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "column__update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "column_id",
            "description": "<p>列表ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>列表名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>颜色</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/exit",
    "title": "11. 退出项目",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "exit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "project_id",
            "description": "<p>项目ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/flow/delete",
    "title": "41. 删除工作流",
    "description": "<p>需要token身份（限：项目负责人）</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "flow__delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "project_id",
            "description": "<p>项目ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/flow/list",
    "title": "39. 工作流列表",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "flow__list",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "project_id",
            "description": "<p>项目ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "post",
    "url": "api/project/flow/save",
    "title": "40. 保存工作流",
    "description": "<p>需要token身份（限：项目负责人）</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "flow__save",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "project_id",
            "description": "<p>项目ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "flows",
            "description": "<p>工作流数据</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/invite",
    "title": "06. 获取邀请链接",
    "description": "<p>需要token身份（限：项目负责人）</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "invite",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "project_id",
            "description": "<p>项目ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "refresh",
            "description": "<p>刷新链接</p> <ul> <li>no: 只获取（默认）</li> <li>yes: 刷新链接，之前的将失效</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/invite/info",
    "title": "07. 通过邀请链接code获取项目信息",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "invite__info",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/invite/join",
    "title": "08. 通过邀请链接code加入项目",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "invite__join",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/lists",
    "title": "01. 获取项目列表",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "lists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "all",
            "description": "<p>是否查看所有项目（限制管理员）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>项目类型</p> <ul> <li>all：全部（默认）</li> <li>team：团队项目</li> <li>personal：个人项目</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "archived",
            "description": "<p>归档状态</p> <ul> <li>all：全部</li> <li>no：未归档（默认）</li> <li>yes：已归档</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "getcolumn",
            "description": "<p>同时取列表</p> <ul> <li>no：不取（默认）</li> <li>yes：取列表</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "getuserid",
            "description": "<p>同时取成员ID</p> <ul> <li>no：不取（默认）</li> <li>yes：取列表</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "getstatistics",
            "description": "<p>同时取任务统计</p> <ul> <li>no：不取</li> <li>yes：取统计（默认）</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "keys",
            "description": "<p>搜索条件</p> <ul> <li>keys.name: 项目名称</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "timerange",
            "description": "<p>时间范围（如：1678248944,1678248944）</p> <ul> <li>第一个时间: 读取在这个时间之后更新的数据</li> <li>第二个时间: 读取在这个时间之后删除的数据ID（第1页附加返回数据: deleted_id）</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>当前页，默认:1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pagesize",
            "description": "<p>每页显示数量，默认:50，最大:100</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "sampleData:",
          "content": "{\n    \"data\": [\n        {\n            \"id\": 7,\n            \"name\": \"🏢 产品官网项目\",\n            \"desc\": \"设置各小组成员的工作列表，各自领取或领导分配任务，将做好的任务分期归档，方便复盘！\",\n            \"userid\": 1,\n            \"dialog_id\": 15,\n            \"archived_at\": null,\n            \"archived_userid\": 0,\n            \"created_at\": \"2022-01-02 06:23:15\",\n            \"updated_at\": \"2022-01-02 07:12:33\",\n\n            \"owner\": 1,         // 是否项目负责人\n            \"owner_userid\": 1,  // 项目负责人ID\n\n            \"task_num\": 9,\n            \"task_complete\": 0,\n            \"task_percent\": 0,\n            \"task_my_num\": 8,\n            \"task_my_complete\": 0,\n            \"task_my_percent\": 0,\n        },\n    ],\n    \"current_page\": 1,  // 当前页数\n    \"last_page\": 1,     // 下一页数\n    \"total\": 6,         // 总计数（当前查询条件）\n    \"total_all\": 6      // 总计数（全部）\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/log/lists",
    "title": "42. 获取项目、任务日志",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "log__lists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "project_id",
            "description": "<p>项目ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "task_id",
            "description": "<p>任务ID（与 项目ID 二选一，任务ID优先）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>当前页，默认:1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pagesize",
            "description": "<p>每页显示数量，默认:20，最大:100</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/one",
    "title": "02. 获取一个项目信息",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "one",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "project_id",
            "description": "<p>项目ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "sampleData:",
          "content": "{\n    \"id\": 7,\n    \"name\": \"🏢 产品官网项目\",\n    \"desc\": \"设置各小组成员的工作列表，各自领取或领导分配任务，将做好的任务分期归档，方便复盘！\",\n    \"userid\": 1,\n    \"dialog_id\": 15,\n    \"archived_at\": null,\n    \"archived_userid\": 0,\n    \"created_at\": \"2022-01-02 06:23:15\",\n    \"updated_at\": \"2022-01-02 07:12:33\",\n\n    \"owner\": 1,         // 是否项目负责人\n    \"owner_userid\": 1,  // 项目负责人ID\n\n    \"project_user\": [   // 项目成员\n        {\n            \"id\": 2,\n            \"project_id\": 2,\n            \"userid\": 1,\n            \"owner\": 1,\n            \"created_at\": \"2022-01-02 00:55:32\",\n            \"updated_at\": \"2022-01-02 00:55:32\"\n        }\n    ],\n\n    \"task_num\": 9,\n    \"task_complete\": 0,\n    \"task_percent\": 0,\n    \"task_my_num\": 8,\n    \"task_my_complete\": 0,\n    \"task_my_percent\": 0,\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/remove",
    "title": "13. 删除项目",
    "description": "<p>需要token身份（限：项目负责人）</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "remove",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "project_id",
            "description": "<p>项目ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "post",
    "url": "api/project/sort",
    "title": "10. 排序任务",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "sort",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "project_id",
            "description": "<p>项目ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "sort",
            "description": "<p>排序数据</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "only_column",
            "description": "<p>仅更新列表</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "post",
    "url": "api/project/task/add",
    "title": "30. 添加任务",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "task__add",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "project_id",
            "description": "<p>项目ID</p>"
          },
          {
            "group": "Parameter",
            "type": "mixed",
            "optional": true,
            "field": "column_id",
            "description": "<p>列表ID，任意值自动创建，留空取第一个</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>任务描述</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": "<p>任务详情</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "times",
            "description": "<p>计划时间（格式：开始时间,结束时间；如：2020-01-01 00:00,2020-01-01 23:59）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "owner",
            "description": "<p>负责人</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "subtasks",
            "description": "<p>子任务（格式：[{name,owner,times}]）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "top",
            "description": "<p>添加的任务排到列表最前面</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/task/addsub",
    "title": "31. 添加子任务",
    "description": "<p>需要token身份（限：项目、任务负责人）</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "task__addsub",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "task_id",
            "description": "<p>任务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>任务描述</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/task/archived",
    "title": "34. 归档任务",
    "description": "<p>需要token身份（限：项目、任务负责人）</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "task__archived",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "task_id",
            "description": "<p>任务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>类型</p> <ul> <li>add：归档（默认）</li> <li>recovery：还原归档</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/task/content",
    "title": "25. 获取任务详细描述",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "task__content",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "task_id",
            "description": "<p>任务ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/task/dialog",
    "title": "33. 创建/获取聊天室",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "task__dialog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "task_id",
            "description": "<p>任务ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/task/down",
    "title": "23. 下载导出的任务",
    "version": "1.0.0",
    "group": "project",
    "name": "task__down",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>通过export接口得到的下载钥匙</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据（直接下载文件）</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/task/easylists",
    "title": "20. 任务列表-简单的",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "task__easylists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "taskid",
            "description": "<p>排除的任务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "userid",
            "description": "<p>用户ID（如：1,2）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "timerange",
            "description": "<p>时间范围（如：2022-03-01 12:12:12,2022-05-01 12:12:12）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/task/export",
    "title": "21. 导出任务（限管理员）",
    "description": "<p>导出指定范围任务（已完成、未完成、已归档），返回下载地址，需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "task__export",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "userid",
            "description": "<p>指定会员，如：[1, 2]</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "time",
            "description": "<p>指定时间范围，如：['2020-12-12', '2020-12-30']</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<ul> <li>createdTime 任务创建时间</li> <li>taskTime  任务计划时间（默认）</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/task/exportoverdue",
    "title": "22. 导出超期任务（限管理员）",
    "description": "<p>导出指定范围任务（已完成、未完成、已归档），返回下载地址，需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "task__exportoverdue",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/task/filedelete",
    "title": "27. 删除任务文件",
    "description": "<p>需要token身份（限：项目、任务负责人）</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "task__filedelete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "file_id",
            "description": "<p>文件ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/task/filedetail",
    "title": "28. 获取任务文件详情",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "task__filedetail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "file_id",
            "description": "<p>文件ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "only_update_at",
            "description": "<p>仅获取update_at字段</p> <ul> <li>no (默认)</li> <li>yes</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/task/filedown",
    "title": "29. 下载任务文件",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "task__filedown",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "file_id",
            "description": "<p>文件ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "down",
            "description": "<p>直接下载</p> <ul> <li>yes: 下载（默认）</li> <li>preview: 转预览地址</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/task/files",
    "title": "26. 获取任务文件列表",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "task__files",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "task_id",
            "description": "<p>任务ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/task/flow",
    "title": "37. 任务工作流信息",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "task__flow",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "task_id",
            "description": "<p>任务ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/task/lists",
    "title": "19. 任务列表",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "task__lists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "keys",
            "description": "<p>搜索条件</p> <ul> <li>keys.name: ID、任务名称</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "project_id",
            "description": "<p>项目ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "parent_id",
            "description": "<p>主任务ID（project_id &amp;&amp; parent_id ≤ 0 时 仅查询自己参与的任务）</p> <ul> <li>大于0：指定主任务下的子任务</li> <li>等于-1：表示仅主任务</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "time",
            "description": "<p>指定时间范围，如：['2020-12-12', '2020-12-30']</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "timerange",
            "description": "<p>时间范围（如：1678248944,1678248944）</p> <ul> <li>第一个时间: 读取在这个时间之后更新的数据</li> <li>第二个时间: 读取在这个时间之后删除的数据ID（第1页附加返回数据: deleted_id）</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "archived",
            "description": "<p>归档状态</p> <ul> <li>all：所有（parent_id &gt; 0 时强制 all）</li> <li>yes：已归档</li> <li>no：未归档（默认）</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "deleted",
            "description": "<p>是否读取已删除</p> <ul> <li>all：所有</li> <li>yes：已删除</li> <li>no：未删除（默认）</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "sorts",
            "description": "<p>排序方式</p> <ul> <li>sorts.complete_at  完成时间：asc|desc</li> <li>sorts.archived_at  归档时间：asc|desc</li> <li>sorts.end_at  到期时间：asc|desc</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/task/move",
    "title": "38. 任务移动",
    "description": "<p>需要token身份（限：项目、任务负责人）</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "task__move",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "task_id",
            "description": "<p>任务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "project_id",
            "description": "<p>项目ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "column_id",
            "description": "<p>列ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/task/one",
    "title": "24. 获取单个任务信息",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "task__one",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "task_id",
            "description": "<p>任务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "archived",
            "description": "<p>归档状态</p> <ul> <li>all：所有</li> <li>yes：已归档</li> <li>no：未归档（默认）</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/task/remove",
    "title": "35. 删除任务",
    "description": "<p>需要token身份（限：项目、任务负责人）</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "task__remove",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "task_id",
            "description": "<p>任务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<ul> <li>recovery: 还原</li> <li>delete: 删除（默认）</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/task/resetfromlog",
    "title": "36. 根据日志重置任务",
    "description": "<p>需要token身份（限：项目、任务负责人）</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "task__resetfromlog",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "task_id",
            "description": "<p>任务ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "post",
    "url": "api/project/task/update",
    "title": "32. 修改任务、子任务",
    "description": "<p>需要token身份（限：项目、任务负责人）</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "task__update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "task_id",
            "description": "<p>任务ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>任务描述</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "times",
            "description": "<p>计划时间（格式：开始时间,结束时间；如：2020-01-01 00:00,2020-01-01 23:59）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "loop",
            "description": "<p>重复周期，数字代表天数（子任务不支持）</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "owner",
            "description": "<p>修改负责人</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "content",
            "description": "<p>任务详情（子任务不支持）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "color",
            "description": "<p>背景色（子任务不支持）</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "assist",
            "description": "<p>修改协助人员（子任务不支持）</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "visibility_appointor",
            "description": "<p>修改可见性人员</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "p_level",
            "description": "<p>优先级相关（子任务不支持）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "p_name",
            "description": "<p>优先级相关（子任务不支持）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "p_color",
            "description": "<p>优先级相关（子任务不支持）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "flow_item_id",
            "description": "<p>任务状态，工作流状态ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String|false",
            "optional": true,
            "field": "complete_at",
            "description": "<p>完成时间（如：2020-01-01 00:00，false表示未完成）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/top",
    "title": "43. 项目置顶",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "top",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "project_id",
            "description": "<p>项目ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/transfer",
    "title": "09. 移交项目",
    "description": "<p>需要token身份（限：项目负责人）</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "transfer",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "project_id",
            "description": "<p>项目ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "owner_userid",
            "description": "<p>新的项目负责人ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/update",
    "title": "04. 修改项目",
    "description": "<p>需要token身份（限：项目负责人）</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "project_id",
            "description": "<p>项目ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>项目名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "desc",
            "description": "<p>项目介绍</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/project/user",
    "title": "05. 修改项目成员",
    "description": "<p>需要token身份（限：项目负责人）</p>",
    "version": "1.0.0",
    "group": "project",
    "name": "user",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "project_id",
            "description": "<p>项目ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userid",
            "description": "<p>成员ID 或 成员ID组</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ProjectController.php",
    "groupTitle": "项目"
  },
  {
    "type": "get",
    "url": "api/report/detail",
    "title": "05. 报告详情",
    "version": "1.0.0",
    "group": "report",
    "name": "detail",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>报告id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ReportController.php",
    "groupTitle": "汇报"
  },
  {
    "type": "get",
    "url": "api/report/last_submitter",
    "title": "07. 获取最后一次提交的接收人",
    "version": "1.0.0",
    "group": "report",
    "name": "last_submitter",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ReportController.php",
    "groupTitle": "汇报"
  },
  {
    "type": "get",
    "url": "api/report/mark",
    "title": "06. 标记已读/未读",
    "version": "1.0.0",
    "group": "report",
    "name": "mark",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>报告id（组）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "action",
            "description": "<p>操作</p> <ul> <li>read: 标记已读（默认）</li> <li>unread: 标记未读</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ReportController.php",
    "groupTitle": "汇报"
  },
  {
    "type": "get",
    "url": "api/report/my",
    "title": "01. 我发送的汇报",
    "version": "1.0.0",
    "group": "report",
    "name": "my",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "keys",
            "description": "<p>搜索条件</p> <ul> <li>keys.type: 汇报类型，weekly:周报，daily:日报</li> <li>keys.created_at: 汇报时间</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>当前页，默认:1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pagesize",
            "description": "<p>每页显示数量，默认:20，最大:50</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ReportController.php",
    "groupTitle": "汇报"
  },
  {
    "type": "get",
    "url": "api/report/read",
    "title": "09. 标记汇报已读，可批量",
    "version": "1.0.0",
    "group": "report",
    "name": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "ids",
            "description": "<p>报告id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ReportController.php",
    "groupTitle": "汇报"
  },
  {
    "type": "get",
    "url": "api/report/receive",
    "title": "02. 我接收的汇报",
    "version": "1.0.0",
    "group": "report",
    "name": "receive",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "keys",
            "description": "<p>搜索条件</p> <ul> <li>keys.key: 关键词</li> <li>keys.type: 汇报类型，weekly:周报，daily:日报</li> <li>keys.created_at: 汇报时间</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>当前页，默认:1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pagesize",
            "description": "<p>每页显示数量，默认:20，最大:50</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ReportController.php",
    "groupTitle": "汇报"
  },
  {
    "type": "get",
    "url": "api/report/store",
    "title": "03. 保存并发送工作汇报",
    "version": "1.0.0",
    "group": "report",
    "name": "store",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>汇报ID，0为新建</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sign",
            "description": "<p>唯一签名，通过[api/report/template]接口返回</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>汇报标题</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "type",
            "description": "<p>汇报类型，weekly:周报，daily:日报</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "content",
            "description": "<p>内容</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "receive",
            "description": "<p>汇报对象</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "offset",
            "description": "<p>时间偏移量</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ReportController.php",
    "groupTitle": "汇报"
  },
  {
    "type": "get",
    "url": "api/report/template",
    "title": "04. 生成汇报模板",
    "version": "1.0.0",
    "group": "report",
    "name": "template",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "type",
            "description": "<p>汇报类型，weekly:周报，daily:日报</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "offset",
            "description": "<p>偏移量</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "date",
            "description": "<p>时间</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ReportController.php",
    "groupTitle": "汇报"
  },
  {
    "type": "get",
    "url": "api/report/unread",
    "title": "08. 获取未读",
    "version": "1.0.0",
    "group": "report",
    "name": "unread",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ReportController.php",
    "groupTitle": "汇报"
  },
  {
    "type": "get",
    "url": "api/system/checkin/down",
    "title": "23. 下载导出的签到数据",
    "version": "1.0.0",
    "group": "system",
    "name": "checkin__down",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>通过export接口得到的下载钥匙</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据（直接下载文件）</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "get",
    "url": "api/system/checkin/export",
    "title": "22. 导出签到数据（限管理员）",
    "version": "1.0.0",
    "group": "system",
    "name": "checkin__export",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "userid",
            "description": "<p>指定会员，如：[1, 2]</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "date",
            "description": "<p>指定日期范围，如：['2020-12-12', '2020-12-30']</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "time",
            "description": "<p>指定时间范围，如：['09:00', '18:00']</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "post",
    "url": "api/system/column/template",
    "title": "10. 创建项目模板",
    "description": "<p>获取创建项目模板、保存创建项目模板</p>",
    "version": "1.0.0",
    "group": "system",
    "name": "column__template",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<ul> <li>get: 获取（默认）</li> <li>save: 保存（限管理员）</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>优先级数据，格式：[{name,columns}]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "get",
    "url": "api/system/demo",
    "title": "08. 获取演示帐号",
    "version": "1.0.0",
    "group": "system",
    "name": "demo",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "get",
    "url": "api/approve/down",
    "title": "19. 下载导出的审批数据",
    "version": "1.0.0",
    "group": "system",
    "name": "down",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>通过export接口得到的下载钥匙</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "File",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据（直接下载文件）</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ApproveController.php",
    "groupTitle": "系统"
  },
  {
    "type": "get",
    "url": "api/system/email/check",
    "title": "21. 邮件发送测试（限管理员）",
    "description": "<p>测试配置邮箱是否能发送邮件</p>",
    "version": "1.0.0",
    "group": "system",
    "name": "email__check",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "post",
    "url": "api/system/fileupload",
    "title": "19. 上传文件",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "system",
    "name": "fileupload",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image64",
            "description": "<p>图片base64</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>文件名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "files",
            "description": "<p>文件名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "get",
    "url": "api/system/get/cnip",
    "title": "14. 是否中国IP地址",
    "version": "1.0.0",
    "group": "system",
    "name": "get__cnip",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>IP值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "get",
    "url": "api/system/get/info",
    "title": "12. 获取终端详细信息",
    "version": "1.0.0",
    "group": "system",
    "name": "get__info",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>key值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "get",
    "url": "api/system/get/ip",
    "title": "13. 获取IP地址",
    "version": "1.0.0",
    "group": "system",
    "name": "get__ip",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "get",
    "url": "api/system/get/ipgcj02",
    "title": "15. 获取IP地址经纬度",
    "version": "1.0.0",
    "group": "system",
    "name": "get__ipgcj02",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>IP值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "get",
    "url": "api/system/get/ipinfo",
    "title": "16. 获取IP地址详细信息",
    "version": "1.0.0",
    "group": "system",
    "name": "get__ipinfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ip",
            "description": "<p>IP值</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "get",
    "url": "api/system/get/updatelog",
    "title": "20. 获取更新日志",
    "description": "<p>获取更新日志</p>",
    "version": "1.0.0",
    "group": "system",
    "name": "get__updatelog",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "post",
    "url": "api/system/imgupload",
    "title": "17. 上传图片",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "system",
    "name": "imgupload",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "image",
            "description": "<p>post-图片对象</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "image64",
            "description": "<p>post-图片base64（与'image'二选一）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "filename",
            "description": "<p>post-文件名</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "width",
            "description": "<p>压缩图片宽（默认0）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "height",
            "description": "<p>压缩图片高（默认0）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "whcut",
            "description": "<p>压缩方式</p> <ul> <li>1：裁切（默认，宽、高非0有效）</li> <li>0：缩放</li> <li>-1或'auto'：保持等比裁切</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "get",
    "url": "api/system/get/imgview",
    "title": "18. 浏览图片空间",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "system",
    "name": "imgview",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "path",
            "description": "<p>路径</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "post",
    "url": "api/system/license",
    "title": "11. License",
    "description": "<p>获取License信息、保存License（限管理员）</p>",
    "version": "1.0.0",
    "group": "system",
    "name": "license",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<ul> <li>get: 获取</li> <li>save: 保存</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "license",
            "description": "<p>License 原文</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "post",
    "url": "api/system/priority",
    "title": "09. 任务优先级",
    "description": "<p>获取任务优先级、保存任务优先级</p>",
    "version": "1.0.0",
    "group": "system",
    "name": "priority",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<ul> <li>get: 获取（默认）</li> <li>save: 保存（限管理员）</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>优先级数据，格式：[{name,color,days,priority}]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "get",
    "url": "api/system/setting",
    "title": "01. 获取设置、保存设置",
    "version": "1.0.0",
    "group": "system",
    "name": "setting",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<ul> <li>get: 获取（默认）</li> <li>all: 获取所有（需要管理员权限）</li> <li>save: 保存设置（参数：['reg', 'reg_identity', 'reg_invite', 'login_code', 'password_policy', 'project_invite', 'chat_information', 'anon_message', 'auto_archived', 'archived_day', 'task_visible', 'task_default_time', 'all_group_mute', 'all_group_autoin', 'image_compress', 'image_save_local', 'start_home']）</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "get",
    "url": "api/system/setting/aibot",
    "title": "04. 获取会议设置、保存AI机器人设置（限管理员）",
    "version": "1.0.0",
    "group": "system",
    "name": "setting__aibot",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<ul> <li>get: 获取（默认）</li> <li>save: 保存设置（参数：['openai_key', 'openai_agency', 'claude_token', 'claude_agency']）</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "get",
    "url": "api/system/setting/apppush",
    "title": "06. 获取APP推送设置、保存APP推送设置（限管理员）",
    "version": "1.0.0",
    "group": "system",
    "name": "setting__apppush",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<ul> <li>get: 获取（默认）</li> <li>save: 保存设置（参数：['push', 'ios_key', 'ios_secret', 'android_key', 'android_secret']）</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "get",
    "url": "api/system/setting/checkin",
    "title": "05. 获取签到设置、保存签到设置（限管理员）",
    "version": "1.0.0",
    "group": "system",
    "name": "setting__checkin",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<ul> <li>get: 获取（默认）</li> <li>save: 保存设置（参数：['open', 'time', 'advance', 'delay', 'remindin', 'remindexceed', 'edit', 'modes', 'key']）</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "get",
    "url": "api/system/setting/email",
    "title": "02. 获取邮箱设置、保存邮箱设置（限管理员）",
    "version": "1.0.0",
    "group": "system",
    "name": "setting__email",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<ul> <li>get: 获取（默认）</li> <li>save: 保存设置（参数：['smtp_server', 'port', 'account', 'password', 'reg_verify', 'notice_msg', 'msg_unread_user_minute', 'msg_unread_group_minute', 'ignore_addr']）</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "get",
    "url": "api/system/setting/meeting",
    "title": "03. 获取会议设置、保存会议设置（限管理员）",
    "version": "1.0.0",
    "group": "system",
    "name": "setting__meeting",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<ul> <li>get: 获取（默认）</li> <li>save: 保存设置（参数：['open', 'appid', 'app_certificate']）</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "get",
    "url": "api/system/setting/thirdaccess",
    "title": "07. 第三方帐号（限管理员）",
    "version": "1.0.0",
    "group": "system",
    "name": "setting__thirdaccess",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<ul> <li>get: 获取（默认）</li> <li>save: 保存设置（参数：['ldap_open', 'ldap_host', 'ldap_port', 'ldap_password', 'ldap_user_dn', 'ldap_base_dn', 'ldap_sync_local']）</li> <li>testldap: 测试ldap连接</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "get",
    "url": "api/approve/user/status",
    "title": "20. 获取用户审批状态",
    "version": "1.0.0",
    "group": "system",
    "name": "user__status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userid",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ApproveController.php",
    "groupTitle": "系统"
  },
  {
    "type": "get",
    "url": "api/system/version",
    "title": "24. 获取版本号",
    "version": "1.0.0",
    "group": "system",
    "name": "version",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publish",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/SystemController.php",
    "groupTitle": "系统"
  },
  {
    "type": "get",
    "url": "api/users/basic",
    "title": "11. 获取指定会员基础信息",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "basic",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userid",
            "description": "<p>会员ID(多个格式：jsonArray，一次最多50个)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "post",
    "url": "api/users/bot/edit",
    "title": "32. 编辑机器人",
    "description": "<p>需要token身份，编辑 我的机器人 或 管理员修改系统机器人 信息</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "bot__edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>机器人ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>机器人名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "avatar",
            "description": "<p>机器人头像</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "clear_day",
            "description": "<p>清理天数（仅 我的机器人）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "webhook_url",
            "description": "<p>Webhook地址（仅 我的机器人）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/bot/info",
    "title": "31. 机器人信息",
    "description": "<p>需要token身份，获取我的机器人信息</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "bot__info",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>机器人ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/checkin/get",
    "title": "26. 获取签到设置",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "checkin__get",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/checkin/list",
    "title": "28. 获取签到数据",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "checkin__list",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ym",
            "description": "<p>年-月（如：2020-01）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "before",
            "description": "<p>取月份之前的数据（单位：月数，最大3）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "post",
    "url": "api/users/checkin/save",
    "title": "27. 保存签到设置",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "checkin__save",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "list",
            "description": "<p>优先级数据，格式：[{mac,remark}]</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/delete/account",
    "title": "22. 删除帐号",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "delete__account",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>帐号邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>邮箱验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>注销理由</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>登录密码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>类型</p> <ul> <li>warning: 提交校验</li> <li>confirm: 确认删除</li> </ul>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/department/add",
    "title": "24. 新建、修改部门（限管理员）",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "department__add",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "id",
            "description": "<p>部门id，留空为创建部门</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>部门名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "parent_id",
            "description": "<p>上级部门ID</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "owner_userid",
            "description": "<p>部门负责人ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dialog_group",
            "description": "<p>部门群（仅创建部门时有效）</p> <ul> <li>new: 创建（默认）</li> <li>use: 使用现有群</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "dialog_useid",
            "description": "<p>使用现有群ID（dialog_group=use时有效）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/department/del",
    "title": "25. 删除部门（限管理员）",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "department__del",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>部门id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/department/list",
    "title": "23. 部门列表（限管理员）",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "department__list",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/email/edit",
    "title": "21. 修改邮箱",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "edit__email",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newEmail",
            "description": "<p>新邮箱地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>邮箱验证码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/editdata",
    "title": "08. 修改自己的资料",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "editdata",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "userimg",
            "description": "<p>会员头像（地址）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tel",
            "description": "<p>电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nickname",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "profession",
            "description": "<p>职位/职称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据（同&quot;获取我的信息&quot;接口）</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/editpass",
    "title": "09. 修改自己的密码",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "editpass",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldpass",
            "description": "<p>旧密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newpass",
            "description": "<p>新密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据（同&quot;获取我的信息&quot;接口）</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/email/send",
    "title": "20. 发送邮箱验证码",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "email__send",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "type",
            "description": "<p>邮件类型</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/email/verification",
    "title": "14. 邮箱验证",
    "description": "<p>不需要token身份</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "email__verification",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>验证参数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/info",
    "title": "07. 获取我的信息",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "info",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "data:",
          "content": "{\n    \"userid\": 1,\n    \"identity\": [ ],\n    \"department\": [ ],\n    \"az\": \"\",\n    \"email\": \"admin@admin.com\",\n    \"nickname\": \"admin\",\n    \"userimg\": \"\",\n    \"login_num\": 10,\n    \"changepass\": 0,\n    \"last_ip\": \"127.0.0.1\",\n    \"last_at\": \"2021-06-01 12:00:00\",\n    \"line_ip\": \"127.0.0.1\",\n    \"line_at\": \"2021-06-01 12:00:00\",\n    \"created_ip\": \"\",\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/key/client",
    "title": "30. 客户端KEY",
    "description": "<p>获取客户端KEY，用于加密数据发送给服务端</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "key__client",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "client_id",
            "description": "<p>客户端ID（希望不变的，除非清除浏览器缓存或者卸载应用）</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/lists",
    "title": "12. 会员列表（限管理员）",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "lists",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "keys",
            "description": "<p>搜索条件</p> <ul> <li>keys.key               邮箱/电话/昵称/职位（赋值后keys.email、keys.tel、keys.nickname、keys.profession失效）</li> <li>keys.email             邮箱</li> <li>keys.tel               电话</li> <li>keys.nickname          昵称</li> <li>keys.profession        职位</li> <li>keys.identity          身份（如：admin、noadmin）</li> <li>keys.disable           是否离职 <ul> <li>yes:     仅离职</li> <li>all:     全部</li> <li>其他值:   仅在职（默认）</li> </ul> </li> <li>keys.email_verity      邮箱是否认证 <ul> <li>yes:     已认证</li> <li>no:      未认证</li> <li>其他值:   全部（默认）</li> </ul> </li> <li>keys.bot               是否包含机器人 <ul> <li>yes:     仅机器人</li> <li>all:     全部</li> <li>其他值:   非机器人（默认）</li> </ul> </li> <li>keys.department        部门ID（0表示默认部门，不赋值获取所有部门）</li> <li>keys.checkin_mac       签到mac地址（get_checkin_mac=1时有效）</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "get_checkin_mac",
            "description": "<p>获取签到mac地址</p> <ul> <li>0: 不获取（默认）</li> <li>1: 获取</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>当前页，默认:1</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pagesize",
            "description": "<p>每页显示数量，默认:20，最大:50</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/login",
    "title": "01. 登录、注册",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>类型</p> <ul> <li>login:登录（默认）</li> <li>reg:注册</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>邮箱</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code",
            "description": "<p>登录验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "code_key",
            "description": "<p>验证码通过key验证</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "invite",
            "description": "<p>注册邀请码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据（同&quot;获取我的信息&quot;接口）</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/login/codeimg",
    "title": "04. 验证码图片",
    "description": "<p>用于判断是否需要登录验证码</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "login__codeimg",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Image",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据（直接输出图片）</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/login/codejson",
    "title": "05. 验证码json",
    "description": "<p>用于判断是否需要登录验证码</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "login__codejson",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/login/needcode",
    "title": "03. 是否需要验证码",
    "description": "<p>用于判断是否需要登录验证码</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "login__needcode",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>用户名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1需要、0不需要）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/login/qrcode",
    "title": "02. 二维码登录",
    "description": "<p>通过二维码code登录 (或：是否登录成功)</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "login__qrcode",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>类型</p> <ul> <li>login: 登录（用于：app登录）</li> <li>status: 状态 (默认，用于：网页、客户端获取)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>二维码 code</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1需要、0不需要）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/meeting/invitation",
    "title": "19. 【会议】发送邀请",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "meeting__invitation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meetingid",
            "description": "<p>频道ID（不是数字）</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "userids",
            "description": "<p>邀请成员</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/meeting/link",
    "title": "17. 【会议】获取分享链接",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "meeting__link",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "meetingid",
            "description": "<p>频道ID（不是数字）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sharekey",
            "description": "<p>分享的key</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/meeting/open",
    "title": "16. 【会议】创建会议、加入会议",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "meeting__open",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>类型</p> <ul> <li>create: 创建会议，有效参数：name、userids</li> <li>join: 加入会议，有效参数：meetingid (必填)</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "meetingid",
            "description": "<p>频道ID（不是数字）</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "name",
            "description": "<p>会话ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "sharekey",
            "description": "<p>分享的key</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "username",
            "description": "<p>用户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "Array",
            "optional": true,
            "field": "userids",
            "description": "<p>邀请成员</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/meeting/tourist",
    "title": "18. 【会议】游客信息",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "meeting__tourist",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "tourist_id",
            "description": "<p>游客ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/operation",
    "title": "13. 操作会员（限管理员）",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "operation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "userid",
            "description": "<p>会员ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>操作</p> <ul> <li>setadmin             设为管理员</li> <li>clearadmin           取消管理员</li> <li>settemp              设为临时帐号</li> <li>cleartemp            取消临时身份（取消临时帐号）</li> <li>setauth             设为授权账号</li> <li>clearauth            取消授权（取消授权）</li> <li>checkin_macs         修改自动签到mac地址（需要参数 checkin_macs）</li> <li>department           修改部门（需要参数 department）</li> <li>setdisable           设为离职（需要参数 disable_time、transfer_userid）</li> <li>cleardisable         取消离职</li> <li>delete               删除会员（需要参数 delete_reason）</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>邮箱地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "tel",
            "description": "<p>联系电话</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>新的密码</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "nickname",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "profession",
            "description": "<p>职位</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "checkin_macs",
            "description": "<p>自动签到mac地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "department",
            "description": "<p>部门</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "disable_time",
            "description": "<p>离职时间</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "transfer_userid",
            "description": "<p>离职交接人</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "delete_reason",
            "description": "<p>删除原因</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/reg/needinvite",
    "title": "06. 是否需要邀请码",
    "description": "<p>用于判断注册是否需要邀请码</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "reg__needinvite",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/search",
    "title": "10. 搜索会员列表",
    "description": "<p>搜索会员列表</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "searchinfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "keys",
            "description": "<p>搜索条件</p> <ul> <li>keys.key                           昵称、拼音、邮箱关键字</li> <li>keys.disable                       0-排除离职（默认），1-仅离职，2-含离职</li> <li>keys.bot                           0-排除机器人（默认），1-仅机器人，2-含机器人</li> <li>keys.project_id                    在指定项目ID</li> <li>keys.no_project_id                 不在指定项目ID</li> <li>keys.dialog_id                     在指定对话ID</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "sorts",
            "description": "<p>排序方式</p> <ul> <li>sorts.az                           按字母：asc|desc</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "updated_time",
            "description": "<p>在这个时间戳之后更新的</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "state",
            "description": "<p>获取在线状态</p> <ul> <li>0: 不获取（默认）</li> <li>1: 获取会员在线状态，返回数据多一个online值</li> </ul>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "take",
            "description": "<p>获取数量，10-100</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "description": "<p>当前页，默认:1（赋值分页模式，take参数无效）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pagesize",
            "description": "<p>每页显示数量，默认:10，最大:100</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/share/list",
    "title": "33. 获取分享列表",
    "version": "1.0.0",
    "group": "users",
    "name": "share__list",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "type",
            "description": "<p>分享类型：file-文件，text-列表 默认file</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "pid",
            "description": "<p>父级文件id，用于获取子目录和上传到指定目录的id</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "upload_file_id",
            "description": "<p>上传文件id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/socket/status",
    "title": "29. 获取socket状态",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "socket__status",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fd",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/users/umeng/alias",
    "title": "15. 设置友盟别名",
    "description": "<p>需要token身份</p>",
    "version": "1.0.0",
    "group": "users",
    "name": "umeng__alias",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "alias",
            "description": "<p>别名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "ret",
            "description": "<p>返回状态码（1正确、0错误）</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>返回信息（错误描述）</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>返回数据</p>"
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/UsersController.php",
    "groupTitle": "会员"
  },
  {
    "type": "get",
    "url": "api/approve/verifyToken",
    "title": "01. 验证APi登录",
    "version": "1.0.0",
    "group": "users",
    "name": "verifyToken",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "publish",
            "description": ""
          }
        ]
      }
    },
    "filename": "app/Http/Controllers/Api/ApproveController.php",
    "groupTitle": "会员"
  }
] });
