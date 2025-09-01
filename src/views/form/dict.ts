import { getUuid } from "@/uilts/index";
const formatQuestionnaireForApi = (params: any) => {
  return JSON.stringify({
    name: params.name,
    description: JSON.stringify(params.description),
    designJson: JSON.stringify(params.designJson),
  });
};

// 介入性产前诊断穿刺术后随访问卷
const AfterSurgery_Questions = [
  {
    id: "e514e15f-d2f0-42b1-87bf-f8408d7fb97d",
    code: "e514e15f",
    type: "singleSelect",
    title: "您的手术方式为",
    content: [
      {
        id: "1d621435-35ee-4d54-a7e2-bc6b9a2aa352",
        label: "羊水穿刺",
        autoJump: true,
      },
      {
        id: "7d283531-7175-4fe0-bd93-8a619877c4e2",
        label: "脐血穿刺",
        autoJump: true,
      },
      {
        id: "be10ced3-eb80-4906-b687-9d02d1e8493e",
        label: "绒毛穿刺",
        autoJump: true,
      },
    ],
  },
  {
    id: "28f30072-aba0-4d51-878d-9bebc7f41de2",
    code: "28f30072",
    type: "input",
    title: "您现在的孕周是",
    content: [
      {
        id: "8c81d27b-b762-491f-a69c-1190e779306f",
        type: "text",
        placeHolder: "请输入孕周",
      },
    ],
  },
  {
    id: "14b28636-0df6-45d5-93e1-ce7042477997",
    code: "14b28636",
    type: "singleSelect",
    title: "您现在有无腹痛？",
    content: [
      {
        id: "2f5b0bd1-2d92-4b2f-871c-31a11aff0a58",
        label: "有",
        autoJump: true,
      },
      {
        id: "950c7a57-c092-4483-b355-cd1825ce0db4",
        label: "无",
        autoJump: true,
      },
    ],
  },
  {
    id: "f638d479-ce7e-47d7-8c04-57ad6abd4aa4",
    code: "f638d479",
    type: "singleSelect",
    title: "您有无阴道流血、流液？",
    content: [
      {
        id: "d2851bbd-f5a4-4449-bb71-7a963449ac5a",
        label: "有",
        autoJump: true,
      },
      {
        id: "6385154d-6b21-4159-8072-cc3a896d32b8",
        label: "无",
        autoJump: true,
      },
    ],
  },
  {
    id: "76b01f04-b40c-4487-b202-2f8d06c20c59",
    code: "76b01f04",
    type: "singleSelect",
    title: "胎动是否正常？",
    content: [
      {
        id: "ffc8dad7-94d5-4941-a6f1-402210fbfe0d",
        label: "是",
        autoJump: true,
      },
      {
        id: "c837cf24-9293-4994-86ac-e80ee88bd5e7",
        label: "否",
        autoJump: true,
      },
      {
        id: "6707751c-7d75-45ef-b82a-5284f0197369",
        label: "还未感受到胎动",
        autoJump: true,
      },
    ],
  },
  {
    id: "14f48feb-9bb8-4000-91a3-c213f0184364",
    code: "14f48feb",
    type: "singleSelect",
    title: "您是否知晓术后注意事项及复诊时间？",
    content: [
      {
        id: "b0a0603d-d9a7-46a3-a170-106030fdaf87",
        label: "是",
        autoJump: true,
      },
      {
        id: "a978e04c-13ee-4f1e-9100-c1e024cbb537",
        label: "否",
        autoJump: true,
      },
    ],
  },
  {
    id: "c961ab8d-16ac-4fc5-87c5-995ed41d36cb",
    code: "c961ab8d",
    type: "input",
    title: "非常感谢您的配合，如有其它情况或建议请填写至下框（非必填）",
    content: [
      {
        id: "cdbd4452-7ecf-40e2-9cd0-709fdadb7c64",
        type: "textarea",
        required: false,
        placeHolder: "请在此输入",
      },
    ],
    required: false,
  },
];

const AfterSurgery_Questionnaire = {
  name: "介入性产前诊断穿刺术后随访问卷",
  description: [
    "亲爱的孕妈妈：",
    "您好！浙江大学医学院附属妇产科医院向您致以诚挚的问候。您孕期在我院做了介入性产前诊断穿刺术。",
    "为了更好地关注您和宝宝的健康，我们希望向您了解一些后续情况。您的反馈对我们非常重要，感谢您的配合与支持！",
  ],
  designJson: AfterSurgery_Questions,
};

// 羊穿问卷
const Diagnosis_of_Amniocentesis_Quetions = [
  {
    id: "beec250b-da9a-4052-90e9-5de11d7c9f36",
    code: "beec250b",
    type: "singleSelect",
    title: "请问您的分娩方式为：",
    content: [
      {
        id: "638556bb-bf50-417c-9589-b868f779b541",
        label: "剖宫产",
        autoJump: true,
        hideQuestions: [8, 9, 10, 11],
      },
      {
        id: "0bd3ff18-8f1e-4e0c-9e4a-f4fb60a684ed",
        label: "顺产",
        autoJump: true,
        hideQuestions: [8, 9, 10, 11],
      },
      {
        id: "34944ad6-4b6c-49bb-8339-5bbf1c6d9775",
        label: "产钳助产",
        autoJump: true,
        hideQuestions: [8, 9, 10, 11],
      },
      {
        id: "94c2168c-9641-4e86-b850-286b8d0dde24",
        label: "流产（引产）",
        autoJump: true,
        hideQuestions: [2, 3, 4, 5, 6, 7],
      },
    ],
  },
  {
    id: "7e8f9f9e-b476-4f10-8c08-077db1ae10ab",
    code: "7e8f9f9e",
    type: "date",
    title: "请问您的分娩日期是？（非必填）",
    content: [
      {
        id: "9085a755-ed85-4a63-8bd2-1ddfed83fde2",
        range: [-365, 0],
        required: false,
      },
    ],
  },
  {
    id: "aafa5524-d07f-404d-8d82-b1f1a832d721",
    code: "aafa5524",
    type: "singleSelect",
    title: "请问您生产的胎数是？（选择“其他”请注明胎数）",
    content: [
      {
        id: "d3934378-e4b1-4940-af29-e4f87aa81e8f",
        label: "单胎",
        autoJump: true,
      },
      {
        id: "8898fe6f-19dd-469e-8441-d4f9d53bb6a3",
        label: "双胎",
        autoJump: true,
      },
      {
        id: "51c48bd6-6cd9-482e-acae-98c242c3e8c4",
        label: "其他",
        subQuestions: {
          id: "cdc25771-92a9-4c93-9534-ce13f7a6b49f",
          type: "input",
          content: [
            {
              id: "a313c15a-0297-41ef-ada2-46bea80d92a0",
              type: "number",
              placeHolder: "请输入您生产的胎数",
            },
          ],
        },
      },
    ],
  },
  {
    id: "64a152d6-d9c4-4e9c-ab0f-df841754ac2a",
    code: "64a152d6",
    type: "specialSelect",
    title: "请问您的胎儿出生后情况？",
    content: [
      {
        id: "6f1508de-0270-49aa-a861-4d2888ddbf5f",
        label: "A胎",
        subQuestions: {
          id: "40a6e698-57c3-49a0-b396-f938b2e0436b",
          type: "singleSelect",
          content: [
            { id: "3b587ba8-b1bd-4f48-acea-8d378f9ccc42", label: "正常" },
            {
              id: "ab7bb76c-0e6e-461b-afa1-531c9036c2ec",
              label: "异常",
              subQuestions: {
                id: "19165f09-6b09-4625-b8d4-a70e6c81e6cf",
                type: "input",
                content: [
                  {
                    id: "4920d303-a58b-4aea-9c44-43583db8e155",
                    type: "text",
                    placeHolder: "请输入",
                  },
                ],
              },
            },
          ],
        },
      },
      {
        id: "5fce1720-5f7c-49c7-9fcf-2e691b4a966d",
        label: "B胎",
        subQuestions: {
          id: "245bd5d1-f280-4a97-9a33-ebf2a1202a1e",
          type: "singleSelect",
          content: [
            { id: "8d35d48f-42cd-4857-a165-5143f274a1a8", label: "正常" },
            {
              id: "7509ed14-431a-4792-8d16-4c5f0a7e840c",
              label: "异常",
              subQuestions: {
                id: "ba854b1e-1805-4d7f-99ce-7c3bf15f42b7",
                type: "input",
                content: [
                  {
                    id: "82a736c1-1416-4334-9e04-ea55922dd959",
                    type: "text",
                    placeHolder: "请输入",
                  },
                ],
              },
            },
          ],
        },
      },
      {
        id: "a4f5a3a5-b01d-40fa-9a17-26c3ec4bb027",
        label: "C胎",
        subQuestions: {
          id: "c6c6e32d-6728-4e4f-b6e1-5b793879ffb8",
          type: "singleSelect",
          content: [
            { id: "b0c9bf35-70a2-4ef6-af32-880dd4d17e28", label: "正常" },
            {
              id: "c1f83c64-bc38-49ef-93be-1e49a94bccd9",
              label: "异常",
              subQuestions: {
                id: "c7c1a580-a7f7-4bdf-94fc-e156bfb35ec7",
                type: "input",
                content: [
                  {
                    id: "5e8050d1-4ccb-4980-9b70-46c12e1dd927",
                    type: "text",
                    placeHolder: "请输入",
                  },
                ],
              },
            },
          ],
        },
      },
      {
        id: "c9df995d-b696-445a-850f-c159eb03a935",
        label: "D胎",
        subQuestions: {
          id: "1c6158bd-f547-49d9-941c-2da09f2999e7",
          type: "singleSelect",
          content: [
            { id: "6dbf2310-b9cc-4bc6-af03-b35415e05873", label: "正常" },
            {
              id: "d985d13a-41ec-488a-b3e4-3fdbc66e12a2",
              label: "异常",
              subQuestions: {
                id: "1b9690c6-d08f-458d-be4d-e2472c17b840",
                type: "input",
                content: [
                  {
                    id: "8fcb6735-d71c-431b-887a-54f9696355f3",
                    type: "text",
                    placeHolder: "请输入",
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
  {
    id: "d519cb62-d0f5-45a0-98f6-5ceb600106c0",
    code: "d519cb62",
    type: "singleSelect",
    title: "请问您的胎儿性别是？",
    content: [
      {
        id: "c589c1df-005a-4642-a345-ff229cd47a94",
        label: "男",
        autoJump: true,
      },
      {
        id: "f62da254-a265-401d-9416-a6880f81a97d",
        label: "女",
        autoJump: true,
      },
      {
        id: "f97a6ca2-c838-4c59-87be-3e39fd5d7aef",
        label: "一男一女",
        autoJump: true,
      },
      {
        id: "03b4e87c-b49f-4c47-8464-f5a3212231c7",
        label: "两男",
        autoJump: true,
      },
      {
        id: "36a14076-7b71-493a-919b-00fa17a4e1fd",
        label: "两女",
        autoJump: true,
      },
      {
        id: "0a819280-9f4e-4c42-bd9a-b05b30e88772",
        label: "其他",
        subQuestions: {
          id: "aa254b44-ec73-48c1-8f0a-efdc32cf6c44",
          type: "input",
          content: [
            {
              id: "d1044116-079d-4f48-a890-976709a37ee7",
              type: "text",
              placeHolder: "请输入",
            },
          ],
        },
      },
    ],
  },
  {
    id: "3ebdaba5-0283-4b77-aab5-bec86757e1fd",
    code: "3ebdaba5",
    type: "input",
    title: "请问您在孕几周分娩？",
    content: [
      {
        id: "4ecdf444-3cc4-4c82-99b7-db69fea8cce2",
        type: "number",
        placeHolder: "请输入",
      },
    ],
  },
  {
    id: "93014d9d-5cf6-4331-8f85-312fded2b11f",
    code: "93014d9d",
    type: "specialSelect",
    title: "请问您的胎儿出生时的体重(单位：g)为？",
    content: [
      {
        id: "164c975d-a172-4c10-8feb-5078474a8ae4",
        label: "A胎",
        subQuestions: {
          id: "40e2c454-a920-4c7d-ba02-d69a65708ecc",
          type: "input",
          content: [
            {
              id: "27ee7fb6-d0a3-4893-8cce-e6324b07ff46",
              type: "number",
              placeHolder: "请输入",
            },
          ],
        },
      },
      {
        id: "f6412aa1-951e-4d87-a694-43da7cb6718e",
        label: "B胎",
        subQuestions: {
          id: "83fa5aa8-4024-403a-835d-d94200f9ad1f",
          type: "input",
          content: [
            {
              id: "c42b294a-c342-495c-816a-f0e785945c07",
              type: "number",
              placeHolder: "请输入",
            },
          ],
        },
      },
      {
        id: "7018a1d1-8fc0-4e2a-ac44-415b95ad3b76",
        label: "C胎",
        subQuestions: {
          id: "c0cda12e-5057-48eb-859f-86a59b297dd8",
          type: "input",
          content: [
            {
              id: "064dc4a3-0efd-49d1-ab9c-ae954f0646ef",
              type: "number",
              placeHolder: "请输入",
            },
          ],
        },
      },
      {
        id: "83b782cd-4f20-4d2d-a08b-6e6301865139",
        label: "D胎",
        subQuestions: {
          id: "59abb286-a898-4274-b05a-d0ddc1c00676",
          type: "input",
          content: [
            {
              id: "6d3c88e0-f553-401c-9743-a386036a11e6",
              type: "number",
              placeHolder: "请输入",
            },
          ],
        },
      },
    ],
  },
  {
    id: "865a782e-feef-4c87-8dd9-9f43eccc177d",
    code: "865a782e",
    type: "input",
    title: "请问您孕几周引产？",
    content: [
      {
        id: "4ecdf444-3cc4-4c82-99b7-db69fea8cce2",
        type: "number",
        placeHolder: "请输入",
      },
    ],
  },
  {
    id: "6d67d113-b5cf-4cc9-bb4a-73ca8f5592e2",
    code: "6d67d113",
    type: "multSelect",
    title: "请问您引产的原因为？（多选）",
    content: [
      {
        id: "b483e340-d53c-48bc-b36b-46c8b1cd64fa",
        label: "胎儿畸形，具体为:",
        subQuestions: {
          id: "24426baa-1e8c-4d86-98c3-1623af6abee1",
          type: "input",
          content: [
            {
              id: "40af1f9e-ef44-4782-9166-25b5a64ec0ce",
              type: "text",
              placeHolder: "请输入",
            },
          ],
        },
      },
      {
        id: "c474e115-9aa4-4687-936b-71056b12122e",
        label: "胎儿基因或染色体异常，具体为:",
        subQuestions: {
          id: "8d232097-4127-4b2a-8bd8-4330f6ed47ec",
          type: "input",
          content: [
            {
              id: "2477687e-1db4-4640-8bc2-04a60cd111ac",
              type: "text",
              placeHolder: "请输入",
            },
          ],
        },
      },
      {
        id: "582b69eb-7fd4-4931-8a54-6375b2ac4b68",
        label: "社会原因（家庭，个人等因素）",
      },
      {
        id: "e00bea0a-8478-43c0-bb79-7e1c96e1a18f",
        label: "其他",
        subQuestions: {
          id: "a83efc50-3aea-44d3-8b5b-b337622130c7",
          type: "input",
          content: [
            {
              id: "745b104d-6c05-4403-9cac-1cf45f93e850",
              type: "text",
              placeHolder: "请输入",
            },
          ],
        },
      },
    ],
  },
  {
    id: "259294f8-a47d-4fb0-8e03-dd889d80d64e",
    code: "259294f8",
    type: "singleSelect",
    title:
      "请问您在孕期是否做过羊水穿刺、脐带血穿刺、胚胎组织送检等染色体检测？",
    content: [
      {
        id: "af9bc817-0db6-466d-83ce-fce6800ec9c8",
        label: "做过",
        autoJump: true,
      },
      {
        id: "f94d2333-27ee-4fda-afce-11befaa9b888",
        label: "未做过",
        autoJump: true,
        hideQuestions: [11],
      },
    ],
  },
  {
    id: "9b658e1b-a6e9-4466-9fa5-7c6fbcb8510e",
    code: "9b658e1b",
    type: "singleSelect",
    title: "请问您检查的结果如何？",
    content: [
      {
        id: "64d1d181-bc2f-496a-8e1b-72f44388791f",
        label: "正常",
        autoJump: true,
      },
      {
        id: "700f2e0b-1ade-4c1c-b02f-d733a3f30917",
        label: "异常，具体为",
        subQuestions: {
          id: "b8a43a57-71af-4643-8930-803e2aee3bd0",
          type: "input",
          content: [
            {
              id: "508ac93b-1053-44dd-b210-20f987f547b7",
              type: "text",
              placeHolder: "请输入具体",
            },
          ],
        },
      },
    ],
  },
  {
    id: "263441d8-fbe6-4a39-8f01-0ea31347acf5",
    code: "263441d8",
    type: "input",
    title: "非常感谢您的配合，如有其它情况或建议请填写至下框（非必填）",
    content: [
      {
        id: "5141b839-2441-47f9-96ca-4d276038093e",
        type: "textarea",
        required: false,
        placeHolder: "请输入",
      },
    ],
    required: false,
  },
];
const Diagnosis_of_Amniocentesis_Questionnaire = {
  name: "介入性产前诊断随访问卷",
  description: [
    "亲爱的孕妈妈：",
    "您好！浙江大学医学院附属妇产科医院向您致以诚挚的问候。您孕期在我院做了羊水穿刺/脐血穿刺/绒毛活检等介入性产前诊断。",
    "为了更好地关注您和宝宝的健康，我们希望向您了解一些后续情况。您的反馈对我们非常重要，感谢您的配合与支持！",
  ],
  designJson: Diagnosis_of_Amniocentesis_Quetions,
};
// MRI 问卷
const MRI_Questions = [
  {
    // 1
    title: "分娩（或引产）孕周是？",
    id: getUuid(),
    type: "input",
    content: [{ id: getUuid(), type: "number", placeHolder: "请输入数字" }],
  },
  {
    // 2
    title: "分娩方式：",
    id: getUuid(),
    type: "singleSelect",
    content: [
      {
        label: "剖宫产",
        id: getUuid(),
        hideQuestions: [15, 16, 17, 18, 19],
        autoJump: true,
      },
      {
        label: "顺产",
        id: getUuid(),
        hideQuestions: [15, 16, 17, 18, 19],
        autoJump: true,
      },
      {
        label: "产钳助产",
        id: getUuid(),
        hideQuestions: [15, 16, 17, 18, 19],
        autoJump: true,
      },
      {
        label: "流产（引产）",
        id: getUuid(),
        hideQuestions: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
        autoJump: true,
      },
    ],
  },
  {
    //3
    title: "请问您在孕期是否做过无创DNA检测？",
    id: getUuid(),
    type: "singleSelect",
    content: [
      { label: "做过", id: getUuid(), autoJump: true },
      { label: "没做过", id: getUuid(), hideQuestions: [4], autoJump: true },
    ],
  },
  {
    // 4
    title: "请问您检查的结果如何？",
    id: getUuid(),
    type: "singleSelect",
    content: [
      { label: "结果显示：低风险", id: getUuid(), autoJump: true },
      {
        label: "结果提示高风险，具体为",
        id: getUuid(),
        subQuestions: {
          type: "input",
          id: getUuid(),
          content: [
            { id: getUuid(), placeHolder: "请输入具体风险", type: "text" },
          ],
        },
      },
    ],
  },
  {
    //5
    title: "在孕期是否做过羊水穿刺，脐带血穿刺？",
    id: getUuid(),
    type: "singleSelect",
    content: [
      { label: "做过", id: getUuid(), autoJump: true },
      { label: "没做过", id: getUuid(), hideQuestions: [6], autoJump: true },
    ],
  },
  {
    //6
    title: "检查的结果？",
    id: getUuid(),
    type: "singleSelect",
    content: [
      { label: "正常", id: getUuid(), autoJump: true },
      {
        label: "异常",
        id: getUuid(),
        subQuestions: {
          type: "input",
          id: getUuid(),
          content: [{ id: getUuid(), placeHolder: "请输入", type: "text" }],
        },
      },
    ],
  },
  {
    //7
    title: "分娩日期？",
    id: getUuid(),
    type: "date",
    content: [{ id: getUuid(), range: [-365, 0], required: false }],
  },
  {
    //8
    title: "生产的胎数是？（选择“其他”请注明胎数）",
    id: getUuid(),
    type: "singleSelect",
    content: [
      { id: getUuid(), label: "单胎", autoJump: true },
      { id: getUuid(), label: "双胎", autoJump: true },
      {
        id: getUuid(),
        label: "其他",
        subQuestions: {
          type: "input",
          id: getUuid(),
          content: [
            { id: getUuid(), placeHolder: "请输入您生产的胎数", type: "digit" },
          ],
        },
      },
    ],
  },
  {
    // 9
    title: "胎儿出生后情况？",
    id: getUuid(),
    type: "specialSelect",
    content: [
      {
        label: "A胎",
        id: getUuid(),
        subQuestions: {
          type: "singleSelect",
          id: getUuid(),
          content: [
            { label: "正常", id: getUuid() },
            {
              label: "异常",
              id: getUuid(),
              subQuestions: {
                type: "input",
                id: getUuid(),
                content: [
                  {
                    id: getUuid(),
                    placeHolder: "请输入具体异常",
                    type: "text",
                  },
                ],
              },
            },
          ],
        },
      },
      {
        label: "B胎",
        id: getUuid(),
        subQuestions: {
          type: "singleSelect",
          id: getUuid(),
          content: [
            { label: "正常", id: getUuid() },
            {
              label: "异常",
              id: getUuid(),
              subQuestions: {
                type: "input",
                id: getUuid(),
                content: [
                  {
                    id: getUuid(),
                    placeHolder: "请输入具体异常",
                    type: "text",
                  },
                ],
              },
            },
          ],
        },
      },
      {
        label: "C胎",
        id: getUuid(),
        subQuestions: {
          type: "singleSelect",
          id: getUuid(),
          content: [
            { label: "正常", id: getUuid() },
            {
              label: "异常",
              id: getUuid(),
              subQuestions: {
                type: "input",
                id: getUuid(),
                content: [
                  {
                    id: getUuid(),
                    placeHolder: "请输入具体异常",
                    type: "text",
                  },
                ],
              },
            },
          ],
        },
      },
      {
        label: "D胎",
        id: getUuid(),
        subQuestions: {
          type: "singleSelect",
          id: getUuid(),
          content: [
            { label: "正常", id: getUuid() },
            {
              label: "异常",
              id: getUuid(),
              subQuestions: {
                type: "input",
                id: getUuid(),
                content: [
                  {
                    id: getUuid(),
                    placeHolder: "请输入具体异常",
                    type: "text",
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
  {
    //10
    title: "胎儿性别？",
    id: getUuid(),
    type: "singleSelect",
    content: [
      { id: getUuid(), label: "男", autoJump: true },
      { id: getUuid(), label: "女", autoJump: true },
      { id: getUuid(), label: "一男一女", autoJump: true },
      { id: getUuid(), label: "两男", autoJump: true },
      { id: getUuid(), label: "两女", autoJump: true },
      {
        id: getUuid(),
        label: "其他",
        subQuestions: {
          type: "input",
          id: getUuid(),
          content: [
            { id: getUuid(), placeHolder: "请输入胎儿性别", type: "text" },
          ],
        },
      },
    ],
  },
  {
    //11
    id: getUuid(),
    type: "specialSelect",
    title: "胎儿出生时的体重(单位：g)为？",
    content: [
      {
        label: "A胎",
        id: getUuid(),
        subQuestions: {
          type: "input",
          id: getUuid(),
          content: [{ id: getUuid(), placeHolder: "请输入", type: "text" }],
        },
      },
      {
        label: "B胎",
        id: getUuid(),
        subQuestions: {
          type: "input",
          id: getUuid(),
          content: [{ id: getUuid(), placeHolder: "请输入", type: "text" }],
        },
      },
      {
        label: "C胎",
        id: getUuid(),
        subQuestions: {
          type: "input",
          id: getUuid(),
          content: [{ id: getUuid(), placeHolder: "请输入", type: "text" }],
        },
      },
      {
        label: "D胎",
        id: getUuid(),
        subQuestions: {
          type: "input",
          id: getUuid(),
          content: [{ id: getUuid(), placeHolder: "请输入", type: "text" }],
        },
      },
    ],
  },
  {
    //12
    title: "出生后诊断（出生后正常请选择无）",
    id: getUuid(),
    type: "singleSelect",
    content: [
      {
        id: getUuid(),
        label: "无",
        hideQuestions: [13, 14, 15, 16, 17, 18, 19],
      },
      {
        id: getUuid(),
        label: "有",
        subQuestions: {
          type: "input",
          id: getUuid(),
          content: [{ id: getUuid(), placeHolder: "请输入", type: "digit" }],
        },
      },
    ],
  },
  {
    //13
    title: "出生后复查及治疗情况：（多选）",
    id: getUuid(),
    type: "multSelect",
    content: [
      {
        label: "体检",
        id: getUuid(),
        subQuestions: {
          type: "singleSelect",
          id: getUuid(),
          content: [
            { label: "正常", id: getUuid() },
            {
              label: "异常",
              id: getUuid(),
              subQuestions: {
                type: "input",
                id: getUuid(),
                content: [
                  {
                    id: getUuid(),
                    type: "number",
                    placeHolder: "请输入检查时间（月龄）",
                  },
                  {
                    id: getUuid(),
                    type: "text",
                    placeHolder: "请输入检查内容",
                  },
                ],
              },
            },
          ],
        },
      },
      {
        label: "超声波检查",
        id: getUuid(),
        subQuestions: {
          type: "singleSelect",
          id: getUuid(),
          content: [
            { label: "正常", id: getUuid() },
            {
              label: "异常",
              id: getUuid(),
              subQuestions: {
                type: "input",
                id: getUuid(),
                content: [
                  {
                    id: getUuid(),
                    type: "number",
                    placeHolder: "请输入检查时间（月龄）",
                  },
                  {
                    id: getUuid(),
                    type: "text",
                    placeHolder: "请输入检查内容",
                  },
                ],
              },
            },
          ],
        },
      },
      {
        label: "CT或平片",
        id: getUuid(),
        subQuestions: {
          type: "singleSelect",
          id: getUuid(),
          content: [
            { label: "正常", id: getUuid() },
            {
              label: "异常",
              id: getUuid(),
              subQuestions: {
                type: "input",
                id: getUuid(),
                content: [
                  {
                    id: getUuid(),
                    type: "number",
                    placeHolder: "请输入检查时间（月龄）",
                  },
                  {
                    id: getUuid(),
                    type: "text",
                    placeHolder: "请输入检查内容",
                  },
                ],
              },
            },
          ],
        },
      },
      {
        label: "MRI",
        id: getUuid(),
        subQuestions: {
          type: "singleSelect",
          id: getUuid(),
          content: [
            { label: "正常", id: getUuid() },
            {
              label: "异常",
              id: getUuid(),
              subQuestions: {
                type: "input",
                id: getUuid(),
                content: [
                  {
                    id: getUuid(),
                    type: "number",
                    placeHolder: "请输入检查时间（月龄）",
                  },
                  {
                    id: getUuid(),
                    type: "text",
                    placeHolder: "请输入检查内容",
                  },
                ],
              },
            },
          ],
        },
      },
      {
        label: "手术",
        id: getUuid(),
        subQuestions: {
          type: "input",
          id: getUuid(),
          content: [
            {
              id: getUuid(),
              type: "number",
              placeHolder: "请输入检查时间（月龄）",
            },
            { id: getUuid(), type: "text", placeHolder: "请输入检查内容" },
          ],
        },
      },
      {
        label: "其他",
        id: getUuid(),
        subQuestions: {
          type: "input",
          id: getUuid(),
          content: [
            { id: getUuid(), type: "text", placeHolder: "请输入检查项目" },
            {
              id: getUuid(),
              type: "number",
              placeHolder: "请输入检查时间（月龄）",
            },
            { id: getUuid(), type: "text", placeHolder: "请输入检查内容" },
          ],
        },
      },
    ],
  },
  {
    //14
    title: "补充记录",
    id: getUuid(),
    type: "input",
    content: [{ id: getUuid(), type: "text", placeHolder: "请输入补充资料" }],
  },
  {
    //15
    title: "请问您引产的原因为？",
    id: getUuid(),
    type: "singleSelect",

    content: [
      {
        label: "胎儿畸形，具体为:",
        id: getUuid(),
        subQuestions: {
          type: "input",
          id: getUuid(),
          content: [{ id: getUuid(), type: "text", placeHolder: "具体为：" }],
        },
      },
      {
        label: "胎儿基因或染色体异常，具体为:",
        id: getUuid(),
        subQuestions: {
          type: "input",
          id: getUuid(),
          content: [{ id: getUuid(), type: "text", placeHolder: "具体为：" }],
        },
      },
      {
        label: "无特殊情况（社会原因）",
        id: getUuid(),
      },
      {
        label: "其他",
        id: getUuid(),
        subQuestions: {
          type: "input",
          id: getUuid(),
          content: [{ id: getUuid(), type: "text", placeHolder: "具体为：" }],
        },
      },
    ],
  },
  {
    //16
    title:
      "请问您在孕期是否做过羊水穿刺、脐带血穿刺、胚胎组织送检等染色体检测？",
    id: getUuid(),
    type: "singleSelect",
    content: [
      { label: "做过", id: getUuid(), autoJump: true },
      { label: "未做过", id: getUuid(), hideQuestions: [18], autoJump: true },
    ],
  },
  {
    //17
    title: "请问您检查的结果如何？",
    id: getUuid(),
    type: "input",
    content: [
      { label: "正常", id: getUuid(), autoJump: true },
      {
        label: "异常",
        id: getUuid(),
        subQuestions: {
          type: "input",
          id: getUuid(),
          content: [{ id: getUuid(), placeHolder: "请输入具体", type: "text" }],
        },
      },
    ],
  },
  {
    //18
    title: "是否做过尸检？",
    id: getUuid(),
    type: "singleSelect",
    content: [
      { label: "做过", id: getUuid(), autoJump: true },
      { label: "未做过", id: getUuid(), hideQuestions: [19] },
    ],
  },
  {
    //19
    title: "请问您检查的结果如何？",
    id: getUuid(),
    type: "input",
    content: [
      { label: "正常", id: getUuid(), autoJump: true },
      {
        label: "异常",
        id: getUuid(),
        subQuestions: {
          type: "input",
          id: getUuid(),
          content: [{ id: getUuid(), placeHolder: "请输入", type: "text" }],
        },
      },
    ],
  },
];

const MRI_Questionnaire = {
  name: "会诊 / 会诊超声 / MRI 随访记录表",
  description: [
    "亲爱的孕妈妈：",
    "您好！浙江大学医学院附属妇产科医院向您致以诚挚的问候。您孕期在我院做了无创DNA检测。",
    "为了更好地关注您和宝宝的健康，我们希望向您了解一些后续情况。您的反馈对我们非常重要，感谢您的配合与支持！",
  ],
  designJson: MRI_Questions,
};
const Screening_of_DOWN_Questions = [
  {
    id: "beec250b-da9a-4052-90e9-5de11d7c9f36",
    code: "beec250b",
    type: "singleSelect",
    title: "请问您的分娩方式为：",
    content: [
      {
        id: "638556bb-bf50-417c-9589-b868f779b541",
        label: "剖宫产",
        autoJump: true,
        hideQuestions: [12, 13, 14, 15],
      },
      {
        id: "0bd3ff18-8f1e-4e0c-9e4a-f4fb60a684ed",
        label: "顺产",
        autoJump: true,
        hideQuestions: [12, 13, 14, 15],
      },
      {
        id: "34944ad6-4b6c-49bb-8339-5bbf1c6d9775",
        label: "产钳助产",
        autoJump: true,
        hideQuestions: [12, 13, 14, 15],
      },
      {
        id: "94c2168c-9641-4e86-b850-286b8d0dde24",
        label: "流产（引产）",
        autoJump: true,
        hideQuestions: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
      },
    ],
  },
  {
    id: "c34cf365-6a99-49e4-a70c-be0815fcb850",
    code: "c34cf365",
    type: "singleSelect",
    title: "请问您在孕期是否做过无创DNA检测？",
    content: [
      {
        id: "d605883b-71a1-41d9-8fc5-c545c0a0231b",
        label: "做过",
        autoJump: true,
      },
      {
        id: "bd451886-f48c-40c2-a3d4-099e75f75350",
        label: "未做过",
        autoJump: true,
        hideQuestions: [3],
      },
    ],
  },
  {
    id: "9a833016-3597-4168-8577-3bad6efb1f74",
    code: "9a833016",
    type: "singleSelect",
    title: "请问您检查的结果如何？",
    content: [
      {
        id: "85e8f352-a33d-41b5-bd86-1a51b0d4b476",
        label: "结果显示：低风险",
        autoJump: true,
      },
      {
        id: "dc460513-b694-47a9-a971-d53f4958f531",
        label: "结果提示高风险，具体为",
        subQuestions: {
          id: "2053a79f-cf6a-4b62-8dfb-39e60449468c",
          type: "input",
          content: [
            {
              id: "a84bada4-ec13-4d46-8a00-90026fe8976a",
              type: "text",
              placeHolder: "请输入",
            },
          ],
        },
      },
    ],
  },
  {
    id: "917bbf06-6f61-4a2a-b38f-a6eeb1767d6a",
    code: "917bbf06",
    type: "singleSelect",
    title: "请问您在孕期是否做过羊水穿刺，脐带血穿刺等染色体检测？",
    content: [
      {
        id: "9b52cd49-5a98-439f-9f53-d6a21db6d9b0",
        label: "做过",
        autoJump: true,
      },
      {
        id: "59cc7391-dd65-4c7a-a130-002b2717f221",
        label: "未做过",
        autoJump: true,
        hideQuestions: [5],
      },
    ],
  },
  {
    id: "5a99f523-b123-4fe6-a21f-40d64e1b4a59",
    code: "5a99f523",
    type: "singleSelect",
    title: "请问您检查的结果如何？",
    content: [
      {
        id: "14e286aa-61f8-42b7-a699-a139491b5cf1",
        label: "正常",
        autoJump: true,
      },
      {
        id: "3f5e9af5-1c46-4f35-a5e9-c3678eb1b1cc",
        label: "异常，具体为",
        subQuestions: {
          id: "a78c24af-7e4b-468c-92f0-57ab48482c57",
          type: "input",
          content: [
            {
              id: "36c29b8a-589e-4c3f-a7b9-4f57398d09a8",
              type: "text",
              placeHolder: "请输入",
            },
          ],
        },
      },
    ],
  },
  {
    id: "7e8f9f9e-b476-4f10-8c08-077db1ae10ab",
    code: "7e8f9f9e",
    type: "date",
    title: "请问您的分娩日期是？（非必填）",
    content: [
      {
        id: "9085a755-ed85-4a63-8bd2-1ddfed83fde2",
        range: [-365, 0],
        required: false,
      },
    ],
  },
  {
    id: "aafa5524-d07f-404d-8d82-b1f1a832d721",
    code: "aafa5524",
    type: "singleSelect",
    title: "请问您生产的胎数是？（选择“其他”请注明胎数）",
    content: [
      {
        id: "d3934378-e4b1-4940-af29-e4f87aa81e8f",
        label: "单胎",
        autoJump: true,
      },
      {
        id: "8898fe6f-19dd-469e-8441-d4f9d53bb6a3",
        label: "双胎",
        autoJump: true,
      },
      {
        id: "51c48bd6-6cd9-482e-acae-98c242c3e8c4",
        label: "其他",
        subQuestions: {
          id: "cdc25771-92a9-4c93-9534-ce13f7a6b49f",
          type: "input",
          content: [
            {
              id: "a313c15a-0297-41ef-ada2-46bea80d92a0",
              type: "number",
              placeHolder: "请输入您生产的胎数",
            },
          ],
        },
      },
    ],
  },
  {
    id: "64a152d6-d9c4-4e9c-ab0f-df841754ac2a",
    code: "64a152d6",
    type: "specialSelect",
    title: "请问您的胎儿出生后情况？",
    content: [
      {
        id: "6f1508de-0270-49aa-a861-4d2888ddbf5f",
        label: "A胎",
        subQuestions: {
          id: "40a6e698-57c3-49a0-b396-f938b2e0436b",
          type: "singleSelect",
          content: [
            { id: "3b587ba8-b1bd-4f48-acea-8d378f9ccc42", label: "正常" },
            {
              id: "ab7bb76c-0e6e-461b-afa1-531c9036c2ec",
              label: "异常",
              subQuestions: {
                id: "19165f09-6b09-4625-b8d4-a70e6c81e6cf",
                type: "input",
                content: [
                  {
                    id: "4920d303-a58b-4aea-9c44-43583db8e155",
                    type: "text",
                    placeHolder: "请输入",
                  },
                ],
              },
            },
          ],
        },
      },
      {
        id: "5fce1720-5f7c-49c7-9fcf-2e691b4a966d",
        label: "B胎",
        subQuestions: {
          id: "245bd5d1-f280-4a97-9a33-ebf2a1202a1e",
          type: "singleSelect",
          content: [
            { id: "8d35d48f-42cd-4857-a165-5143f274a1a8", label: "正常" },
            {
              id: "7509ed14-431a-4792-8d16-4c5f0a7e840c",
              label: "异常",
              subQuestions: {
                id: "ba854b1e-1805-4d7f-99ce-7c3bf15f42b7",
                type: "input",
                content: [
                  {
                    id: "82a736c1-1416-4334-9e04-ea55922dd959",
                    type: "text",
                    placeHolder: "请输入",
                  },
                ],
              },
            },
          ],
        },
      },
      {
        id: "a4f5a3a5-b01d-40fa-9a17-26c3ec4bb027",
        label: "C胎",
        subQuestions: {
          id: "c6c6e32d-6728-4e4f-b6e1-5b793879ffb8",
          type: "singleSelect",
          content: [
            { id: "b0c9bf35-70a2-4ef6-af32-880dd4d17e28", label: "正常" },
            {
              id: "c1f83c64-bc38-49ef-93be-1e49a94bccd9",
              label: "异常",
              subQuestions: {
                id: "c7c1a580-a7f7-4bdf-94fc-e156bfb35ec7",
                type: "input",
                content: [
                  {
                    id: "5e8050d1-4ccb-4980-9b70-46c12e1dd927",
                    type: "text",
                    placeHolder: "请输入",
                  },
                ],
              },
            },
          ],
        },
      },
      {
        id: "c9df995d-b696-445a-850f-c159eb03a935",
        label: "D胎",
        subQuestions: {
          id: "1c6158bd-f547-49d9-941c-2da09f2999e7",
          type: "singleSelect",
          content: [
            { id: "6dbf2310-b9cc-4bc6-af03-b35415e05873", label: "正常" },
            {
              id: "d985d13a-41ec-488a-b3e4-3fdbc66e12a2",
              label: "异常",
              subQuestions: {
                id: "1b9690c6-d08f-458d-be4d-e2472c17b840",
                type: "input",
                content: [
                  {
                    id: "8fcb6735-d71c-431b-887a-54f9696355f3",
                    type: "text",
                    placeHolder: "请输入",
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
  {
    id: "d519cb62-d0f5-45a0-98f6-5ceb600106c0",
    code: "d519cb62",
    type: "singleSelect",
    title: "请问您的胎儿性别是？",
    content: [
      {
        id: "c589c1df-005a-4642-a345-ff229cd47a94",
        label: "男",
        autoJump: true,
      },
      {
        id: "f62da254-a265-401d-9416-a6880f81a97d",
        label: "女",
        autoJump: true,
      },
      {
        id: "f97a6ca2-c838-4c59-87be-3e39fd5d7aef",
        label: "一男一女",
        autoJump: true,
      },
      {
        id: "03b4e87c-b49f-4c47-8464-f5a3212231c7",
        label: "两男",
        autoJump: true,
      },
      {
        id: "36a14076-7b71-493a-919b-00fa17a4e1fd",
        label: "两女",
        autoJump: true,
      },
      {
        id: "0a819280-9f4e-4c42-bd9a-b05b30e88772",
        label: "其他",
        subQuestions: {
          id: "aa254b44-ec73-48c1-8f0a-efdc32cf6c44",
          type: "input",
          content: [
            {
              id: "d1044116-079d-4f48-a890-976709a37ee7",
              type: "text",
              placeHolder: "请输入",
            },
          ],
        },
      },
    ],
  },
  {
    id: "3ebdaba5-0283-4b77-aab5-bec86757e1fd",
    code: "3ebdaba5",
    type: "input",
    title: "请问您在孕几周分娩？",
    content: [
      {
        id: "4ecdf444-3cc4-4c82-99b7-db69fea8cce2",
        type: "number",
        placeHolder: "请输入",
      },
    ],
  },
  {
    id: "93014d9d-5cf6-4331-8f85-312fded2b11f",
    code: "93014d9d",
    type: "specialSelect",
    title: "请问您的胎儿出生时的体重(单位：g)为？",
    content: [
      {
        id: "164c975d-a172-4c10-8feb-5078474a8ae4",
        label: "A胎",
        subQuestions: {
          id: "40e2c454-a920-4c7d-ba02-d69a65708ecc",
          type: "input",
          content: [
            {
              id: "27ee7fb6-d0a3-4893-8cce-e6324b07ff46",
              type: "number",
              placeHolder: "请输入",
            },
          ],
        },
      },
      {
        id: "f6412aa1-951e-4d87-a694-43da7cb6718e",
        label: "B胎",
        subQuestions: {
          id: "83fa5aa8-4024-403a-835d-d94200f9ad1f",
          type: "input",
          content: [
            {
              id: "c42b294a-c342-495c-816a-f0e785945c07",
              type: "number",
              placeHolder: "请输入",
            },
          ],
        },
      },
      {
        id: "7018a1d1-8fc0-4e2a-ac44-415b95ad3b76",
        label: "C胎",
        subQuestions: {
          id: "c0cda12e-5057-48eb-859f-86a59b297dd8",
          type: "input",
          content: [
            {
              id: "064dc4a3-0efd-49d1-ab9c-ae954f0646ef",
              type: "number",
              placeHolder: "请输入",
            },
          ],
        },
      },
      {
        id: "83b782cd-4f20-4d2d-a08b-6e6301865139",
        label: "D胎",
        subQuestions: {
          id: "59abb286-a898-4274-b05a-d0ddc1c00676",
          type: "input",
          content: [
            {
              id: "6d3c88e0-f553-401c-9743-a386036a11e6",
              type: "number",
              placeHolder: "请输入",
            },
          ],
        },
      },
    ],
  },
  {
    id: "865a782e-feef-4c87-8dd9-9f43eccc177d",
    code: "865a782e",
    type: "input",
    title: "请问您孕几周引产？",
    content: [
      {
        id: "4ecdf444-3cc4-4c82-99b7-db69fea8cce2",
        type: "number",
        placeHolder: "请输入",
      },
    ],
  },
  {
    id: "6d67d113-b5cf-4cc9-bb4a-73ca8f5592e2",
    code: "6d67d113",
    type: "multSelect",
    title: "请问您引产的原因为？（多选）",
    content: [
      {
        id: "b483e340-d53c-48bc-b36b-46c8b1cd64fa",
        label: "胎儿畸形，具体为:",
        subQuestions: {
          id: "24426baa-1e8c-4d86-98c3-1623af6abee1",
          type: "input",
          content: [
            {
              id: "40af1f9e-ef44-4782-9166-25b5a64ec0ce",
              type: "text",
              placeHolder: "请输入",
            },
          ],
        },
      },
      {
        id: "c474e115-9aa4-4687-936b-71056b12122e",
        label: "胎儿基因或染色体异常，具体为:",
        subQuestions: {
          id: "8d232097-4127-4b2a-8bd8-4330f6ed47ec",
          type: "input",
          content: [
            {
              id: "2477687e-1db4-4640-8bc2-04a60cd111ac",
              type: "text",
              placeHolder: "请输入",
            },
          ],
        },
      },
      {
        id: "582b69eb-7fd4-4931-8a54-6375b2ac4b68",
        label: "社会原因（家庭、个人等因素）",
      },
      {
        id: "e00bea0a-8478-43c0-bb79-7e1c96e1a18f",
        label: "其他",
        subQuestions: {
          id: "a83efc50-3aea-44d3-8b5b-b337622130c7",
          type: "input",
          content: [
            {
              id: "745b104d-6c05-4403-9cac-1cf45f93e850",
              type: "text",
              placeHolder: "请输入",
            },
          ],
        },
      },
    ],
  },
  {
    id: "259294f8-a47d-4fb0-8e03-dd889d80d64e",
    code: "259294f8",
    type: "singleSelect",
    title:
      "请问您在孕期是否做过羊水穿刺、脐带血穿刺、胚胎组织送检等染色体检测？",
    content: [
      {
        id: "af9bc817-0db6-466d-83ce-fce6800ec9c8",
        label: "做过",
        autoJump: true,
      },
      {
        id: "f94d2333-27ee-4fda-afce-11befaa9b888",
        label: "未做过",
        autoJump: true,
        hideQuestions: [15],
      },
    ],
  },
  {
    id: "9b658e1b-a6e9-4466-9fa5-7c6fbcb8510e",
    code: "9b658e1b",
    type: "singleSelect",
    title: "请问您检查的结果如何？",
    content: [
      {
        id: "64d1d181-bc2f-496a-8e1b-72f44388791f",
        label: "正常",
        autoJump: true,
      },
      {
        id: "700f2e0b-1ade-4c1c-b02f-d733a3f30917",
        label: "异常，具体为",
        subQuestions: {
          id: "b8a43a57-71af-4643-8930-803e2aee3bd0",
          type: "input",
          content: [
            {
              id: "508ac93b-1053-44dd-b210-20f987f547b7",
              type: "text",
              placeHolder: "请输入",
            },
          ],
        },
      },
    ],
  },
  {
    id: "263441d8-fbe6-4a39-8f01-0ea31347acf5",
    code: "263441d8",
    type: "input",
    title: "非常感谢您的配合，如有其它情况或建议请填写至下框（非必填）",
    content: [
      {
        id: "5141b839-2441-47f9-96ca-4d276038093e",
        type: "textarea",
        required: false,
        placeHolder: "请输入",
      },
    ],
    required: false,
  },
];

const Screening_of_DOWN_Questionnaire = {
  name: "血清学筛查（唐氏筛查）随访问卷",
  description: [
    "亲爱的孕妈妈：",
    "您好！浙江大学医学院附属妇产科医院向您致以诚挚的问候。您孕期在我院做了血清学筛查（唐氏筛查）检测。",
    "为了更好地关注您和宝宝的健康，我们希望向您了解一些后续情况。您的反馈对我们非常重要，感谢您的配合与支持！",
  ],
  designJson: Screening_of_DOWN_Questions,
};
const Non_Invasive_DNA_Questions = [
  {
    id: "beec250b-da9a-4052-90e9-5de11d7c9f36",
    code: "beec250b",
    type: "singleSelect",
    title: "请问您的分娩方式为：",
    content: [
      {
        id: "638556bb-bf50-417c-9589-b868f779b541",
        label: "剖宫产",
        autoJump: true,
        hideQuestions: [10, 11, 12, 13],
      },
      {
        id: "0bd3ff18-8f1e-4e0c-9e4a-f4fb60a684ed",
        label: "顺产",
        autoJump: true,
        hideQuestions: [10, 11, 12, 13],
      },
      {
        id: "34944ad6-4b6c-49bb-8339-5bbf1c6d9775",
        label: "产钳助产",
        autoJump: true,
        hideQuestions: [10, 11, 12, 13],
      },
      {
        id: "94c2168c-9641-4e86-b850-286b8d0dde24",
        label: "流产（引产）",
        autoJump: true,
        hideQuestions: [2, 3, 4, 5, 6, 7, 8, 9],
      },
    ],
  },
  {
    id: "917bbf06-6f61-4a2a-b38f-a6eeb1767d6a",
    code: "917bbf06",
    type: "singleSelect",
    title: "请问您在孕期是否做过羊水穿刺，脐带血穿刺等染色体检测？",
    content: [
      {
        id: "9b52cd49-5a98-439f-9f53-d6a21db6d9b0",
        label: "做过",
        autoJump: true,
      },
      {
        id: "59cc7391-dd65-4c7a-a130-002b2717f221",
        label: "未做过",
        autoJump: true,
        hideQuestions: [3],
      },
    ],
  },
  {
    id: "5a99f523-b123-4fe6-a21f-40d64e1b4a59",
    code: "5a99f523",
    type: "singleSelect",
    title: "请问您检查的结果如何？",
    content: [
      {
        id: "14e286aa-61f8-42b7-a699-a139491b5cf1",
        label: "正常",
        autoJump: true,
      },
      {
        id: "3f5e9af5-1c46-4f35-a5e9-c3678eb1b1cc",
        label: "异常，具体为",
        subQuestions: {
          id: "a78c24af-7e4b-468c-92f0-57ab48482c57",
          type: "input",
          content: [
            {
              id: "36c29b8a-589e-4c3f-a7b9-4f57398d09a8",
              type: "text",
              placeHolder: "请输入",
            },
          ],
        },
      },
    ],
  },
  {
    id: "7e8f9f9e-b476-4f10-8c08-077db1ae10ab",
    code: "7e8f9f9e",
    type: "date",
    title: "请问您的分娩日期是？（非必填）",
    content: [
      {
        id: "9085a755-ed85-4a63-8bd2-1ddfed83fde2",
        range: [-365, 0],
        required: false,
      },
    ],
  },
  {
    id: "aafa5524-d07f-404d-8d82-b1f1a832d721",
    code: "aafa5524",
    type: "singleSelect",
    title: "请问您生产的胎数是？（选择“其他”请注明胎数）",
    content: [
      {
        id: "d3934378-e4b1-4940-af29-e4f87aa81e8f",
        label: "单胎",
        autoJump: true,
      },
      {
        id: "8898fe6f-19dd-469e-8441-d4f9d53bb6a3",
        label: "双胎",
        autoJump: true,
      },
      {
        id: "51c48bd6-6cd9-482e-acae-98c242c3e8c4",
        label: "其他",
        subQuestions: {
          id: "cdc25771-92a9-4c93-9534-ce13f7a6b49f",
          type: "input",
          content: [
            {
              id: "a313c15a-0297-41ef-ada2-46bea80d92a0",
              type: "number",
              placeHolder: "请输入您生产的胎数",
            },
          ],
        },
      },
    ],
  },
  {
    id: "64a152d6-d9c4-4e9c-ab0f-df841754ac2a",
    code: "64a152d6",
    type: "specialSelect",
    title: "请问您的胎儿出生后情况？",
    content: [
      {
        id: "6f1508de-0270-49aa-a861-4d2888ddbf5f",
        label: "A胎",
        subQuestions: {
          id: "40a6e698-57c3-49a0-b396-f938b2e0436b",
          type: "singleSelect",
          content: [
            { id: "3b587ba8-b1bd-4f48-acea-8d378f9ccc42", label: "正常" },
            {
              id: "ab7bb76c-0e6e-461b-afa1-531c9036c2ec",
              label: "异常，具体为",
              subQuestions: {
                id: "19165f09-6b09-4625-b8d4-a70e6c81e6cf",
                type: "input",
                content: [
                  {
                    id: "4920d303-a58b-4aea-9c44-43583db8e155",
                    type: "text",
                    placeHolder: "请输入",
                  },
                ],
              },
            },
          ],
        },
      },
      {
        id: "5fce1720-5f7c-49c7-9fcf-2e691b4a966d",
        label: "B胎",
        subQuestions: {
          id: "245bd5d1-f280-4a97-9a33-ebf2a1202a1e",
          type: "singleSelect",
          content: [
            { id: "8d35d48f-42cd-4857-a165-5143f274a1a8", label: "正常" },
            {
              id: "7509ed14-431a-4792-8d16-4c5f0a7e840c",
              label: "异常，具体为",
              subQuestions: {
                id: "ba854b1e-1805-4d7f-99ce-7c3bf15f42b7",
                type: "input",
                content: [
                  {
                    id: "82a736c1-1416-4334-9e04-ea55922dd959",
                    type: "text",
                    placeHolder: "请输入",
                  },
                ],
              },
            },
          ],
        },
      },
      {
        id: "a4f5a3a5-b01d-40fa-9a17-26c3ec4bb027",
        label: "C胎",
        subQuestions: {
          id: "c6c6e32d-6728-4e4f-b6e1-5b793879ffb8",
          type: "singleSelect",
          content: [
            { id: "b0c9bf35-70a2-4ef6-af32-880dd4d17e28", label: "正常" },
            {
              id: "c1f83c64-bc38-49ef-93be-1e49a94bccd9",
              label: "异常，具体为",
              subQuestions: {
                id: "c7c1a580-a7f7-4bdf-94fc-e156bfb35ec7",
                type: "input",
                content: [
                  {
                    id: "5e8050d1-4ccb-4980-9b70-46c12e1dd927",
                    type: "text",
                    placeHolder: "请输入",
                  },
                ],
              },
            },
          ],
        },
      },
      {
        id: "c9df995d-b696-445a-850f-c159eb03a935",
        label: "D胎",
        subQuestions: {
          id: "1c6158bd-f547-49d9-941c-2da09f2999e7",
          type: "singleSelect",
          content: [
            { id: "6dbf2310-b9cc-4bc6-af03-b35415e05873", label: "正常" },
            {
              id: "d985d13a-41ec-488a-b3e4-3fdbc66e12a2",
              label: "异常，具体为",
              subQuestions: {
                id: "1b9690c6-d08f-458d-be4d-e2472c17b840",
                type: "input",
                content: [
                  {
                    id: "8fcb6735-d71c-431b-887a-54f9696355f3",
                    type: "text",
                    placeHolder: "请输入",
                  },
                ],
              },
            },
          ],
        },
      },
    ],
  },
  {
    id: "d519cb62-d0f5-45a0-98f6-5ceb600106c0",
    code: "d519cb62",
    type: "singleSelect",
    title: "请问您的胎儿性别是？",
    content: [
      {
        id: "c589c1df-005a-4642-a345-ff229cd47a94",
        label: "男",
        autoJump: true,
      },
      {
        id: "f62da254-a265-401d-9416-a6880f81a97d",
        label: "女",
        autoJump: true,
      },
      {
        id: "f97a6ca2-c838-4c59-87be-3e39fd5d7aef",
        label: "一男一女",
        autoJump: true,
      },
      {
        id: "03b4e87c-b49f-4c47-8464-f5a3212231c7",
        label: "两男",
        autoJump: true,
      },
      {
        id: "36a14076-7b71-493a-919b-00fa17a4e1fd",
        label: "两女",
        autoJump: true,
      },
      {
        id: "0a819280-9f4e-4c42-bd9a-b05b30e88772",
        label: "其他",
        subQuestions: {
          id: "aa254b44-ec73-48c1-8f0a-efdc32cf6c44",
          type: "input",
          content: [
            {
              id: "d1044116-079d-4f48-a890-976709a37ee7",
              type: "text",
              placeHolder: "请输入胎儿性别",
            },
          ],
        },
      },
    ],
  },
  {
    id: "3ebdaba5-0283-4b77-aab5-bec86757e1fd",
    code: "3ebdaba5",
    type: "input",
    title: "请问您在孕几周分娩？",
    content: [
      {
        id: "4ecdf444-3cc4-4c82-99b7-db69fea8cce2",
        type: "number",
        placeHolder: "请输入",
      },
    ],
  },
  {
    id: "93014d9d-5cf6-4331-8f85-312fded2b11f",
    code: "93014d9d",
    type: "specialSelect",
    title: "请问您的胎儿出生时的体重(单位：g)为？",
    content: [
      {
        id: "164c975d-a172-4c10-8feb-5078474a8ae4",
        label: "A胎",
        subQuestions: {
          id: "40e2c454-a920-4c7d-ba02-d69a65708ecc",
          type: "input",
          content: [
            {
              id: "27ee7fb6-d0a3-4893-8cce-e6324b07ff46",
              type: "number",
              placeHolder: "请输入",
            },
          ],
        },
      },
      {
        id: "f6412aa1-951e-4d87-a694-43da7cb6718e",
        label: "B胎",
        subQuestions: {
          id: "83fa5aa8-4024-403a-835d-d94200f9ad1f",
          type: "input",
          content: [
            {
              id: "c42b294a-c342-495c-816a-f0e785945c07",
              type: "number",
              placeHolder: "请输入",
            },
          ],
        },
      },
      {
        id: "7018a1d1-8fc0-4e2a-ac44-415b95ad3b76",
        label: "C胎",
        subQuestions: {
          id: "c0cda12e-5057-48eb-859f-86a59b297dd8",
          type: "input",
          content: [
            {
              id: "064dc4a3-0efd-49d1-ab9c-ae954f0646ef",
              type: "number",
              placeHolder: "请输入",
            },
          ],
        },
      },
      {
        id: "83b782cd-4f20-4d2d-a08b-6e6301865139",
        label: "D胎",
        subQuestions: {
          id: "59abb286-a898-4274-b05a-d0ddc1c00676",
          type: "input",
          content: [
            {
              id: "6d3c88e0-f553-401c-9743-a386036a11e6",
              type: "number",
              placeHolder: "请输入",
            },
          ],
        },
      },
    ],
  },
  {
    id: "865a782e-feef-4c87-8dd9-9f43eccc177d",
    code: "865a782e",
    type: "input",
    title: "请问您孕几周引产？",
    content: [
      {
        id: "4ecdf444-3cc4-4c82-99b7-db69fea8cce2",
        type: "number",
        placeHolder: "请输入",
      },
    ],
  },
  {
    id: "6d67d113-b5cf-4cc9-bb4a-73ca8f5592e2",
    code: "6d67d113",
    type: "multSelect",
    title: "请问您引产的原因为？（多选）",
    content: [
      {
        id: "b483e340-d53c-48bc-b36b-46c8b1cd64fa",
        label: "胎儿畸形，具体为:",
        subQuestions: {
          id: "24426baa-1e8c-4d86-98c3-1623af6abee1",
          type: "input",
          content: [
            {
              id: "40af1f9e-ef44-4782-9166-25b5a64ec0ce",
              type: "text",
              placeHolder: "请输入",
            },
          ],
        },
      },
      {
        id: "c474e115-9aa4-4687-936b-71056b12122e",
        label: "胎儿基因或染色体异常，具体为:",
        subQuestions: {
          id: "8d232097-4127-4b2a-8bd8-4330f6ed47ec",
          type: "input",
          content: [
            {
              id: "2477687e-1db4-4640-8bc2-04a60cd111ac",
              type: "text",
              placeHolder: "请输入",
            },
          ],
        },
      },
      {
        id: "582b69eb-7fd4-4931-8a54-6375b2ac4b68",
        label: "社会原因（家庭，个人等因素）",
      },
      {
        id: "e00bea0a-8478-43c0-bb79-7e1c96e1a18f",
        label: "其他",
        subQuestions: {
          id: "a83efc50-3aea-44d3-8b5b-b337622130c7",
          type: "input",
          content: [
            {
              id: "745b104d-6c05-4403-9cac-1cf45f93e850",
              type: "text",
              placeHolder: "请输入",
            },
          ],
        },
      },
    ],
  },
  {
    id: "259294f8-a47d-4fb0-8e03-dd889d80d64e",
    code: "259294f8",
    type: "singleSelect",
    title:
      "请问您在孕期是否做过羊水穿刺、脐带血穿刺、胚胎组织送检等染色体检测？",
    content: [
      {
        id: "af9bc817-0db6-466d-83ce-fce6800ec9c8",
        label: "做过",
        autoJump: true,
      },
      {
        id: "f94d2333-27ee-4fda-afce-11befaa9b888",
        label: "未做过",
        autoJump: true,
        hideQuestions: [13],
      },
    ],
  },
  {
    id: "9b658e1b-a6e9-4466-9fa5-7c6fbcb8510e",
    code: "9b658e1b",
    type: "singleSelect",
    title: "请问您检查的结果如何？",
    content: [
      {
        id: "64d1d181-bc2f-496a-8e1b-72f44388791f",
        label: "正常",
        autoJump: true,
      },
      {
        id: "700f2e0b-1ade-4c1c-b02f-d733a3f30917",
        label: "异常，具体为",
        subQuestions: {
          id: "b8a43a57-71af-4643-8930-803e2aee3bd0",
          type: "input",
          content: [
            {
              id: "508ac93b-1053-44dd-b210-20f987f547b7",
              type: "text",
              placeHolder: "请输入具体",
            },
          ],
        },
      },
    ],
  },
  {
    id: "263441d8-fbe6-4a39-8f01-0ea31347acf5",
    code: "263441d8",
    type: "input",
    title: "非常感谢您的配合，如有其它情况或建议请填写至下框（非必填）",
    content: [
      {
        id: "5141b839-2441-47f9-96ca-4d276038093e",
        type: "textarea",
        required: false,
        placeHolder: "请输入",
      },
    ],
    required: false,
  },
];
const Non_Invasive_DNA_Questionnaire = {
  name: "产科无创DNA随访问卷",
  description: [
    "亲爱的孕妈妈：",
    "您好！浙江大学医学院附属妇产科医院向您致以诚挚的问候。您孕期在我院做了无创DNA检测。",
    "为了更好地关注您和宝宝的健康，我们希望向您了解一些后续情况。您的反馈对我们非常重要，感谢您的配合与支持！",
  ],
  designJson: Non_Invasive_DNA_Questions,
};
const apiQuestion = {
  name: "会诊 / 会诊超声 / MRI 随访记录表",
  description:
    '["亲爱的孕妈妈：","您好！浙江大学医学院附属妇产科医院向您致以诚挚的问候。","为了更好地关注您和宝宝的健康，我们希望向您了解一些后续情况。您的反馈对我们非常重要，感谢您的配合与支持！"]',
  designJson:
    '[{"id": "b3851e80-5156-46e3-8ef3-d872926cf3a0", "code": "b3851e80", "type": "input", "title": "分娩（或引产）孕周是？", "content": [{"id": "4ecdf444-3cc4-4c82-99b7-db69fea8cce2", "type": "number", "placeHolder": "请输入"}]}, {"id": "beec250b-da9a-4052-90e9-5de11d7c9f36", "code": "beec250b", "type": "singleSelect", "title": "分娩方式：", "content": [{"id": "638556bb-bf50-417c-9589-b868f779b541", "label": "剖宫产", "autoJump": true, "hideQuestions": [15, 16, 17, 18, 19]}, {"id": "0bd3ff18-8f1e-4e0c-9e4a-f4fb60a684ed", "label": "顺产", "autoJump": true, "hideQuestions": [15, 16, 17, 18, 19]}, {"id": "34944ad6-4b6c-49bb-8339-5bbf1c6d9775", "label": "产钳助产", "autoJump": true, "hideQuestions": [15, 16, 17, 18, 19]}, {"id": "94c2168c-9641-4e86-b850-286b8d0dde24", "label": "流产（引产）", "autoJump": true, "hideQuestions": [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]}]}, {"id": "c34cf365-6a99-49e4-a70c-be0815fcb850", "code": "c34cf365", "type": "singleSelect", "title": "请问您在孕期是否做过无创DNA检测？", "content": [{"id": "d605883b-71a1-41d9-8fc5-c545c0a0231b", "label": "做过", "autoJump": true}, {"id": "bd451886-f48c-40c2-a3d4-099e75f75350", "label": "没做过", "autoJump": true, "hideQuestions": [4]}]}, {"id": "9a833016-3597-4168-8577-3bad6efb1f74", "code": "9a833016", "type": "singleSelect", "title": "请问您检查的结果如何？", "content": [{"id": "85e8f352-a33d-41b5-bd86-1a51b0d4b476", "label": "结果显示：低风险", "autoJump": true}, {"id": "dc460513-b694-47a9-a971-d53f4958f531", "label": "结果提示高风险，具体为", "subQuestions": {"id": "2053a79f-cf6a-4b62-8dfb-39e60449468c", "type": "input", "content": [{"id": "a84bada4-ec13-4d46-8a00-90026fe8976a", "type": "text", "placeHolder": "请输入"}]}}]}, {"id": "917bbf06-6f61-4a2a-b38f-a6eeb1767d6a", "code": "917bbf06", "type": "singleSelect", "title": "在孕期是否做过羊水穿刺，脐带血穿刺？", "content": [{"id": "9b52cd49-5a98-439f-9f53-d6a21db6d9b0", "label": "做过", "autoJump": true}, {"id": "59cc7391-dd65-4c7a-a130-002b2717f221", "label": "没做过", "autoJump": true, "hideQuestions": [6]}]}, {"id": "5a99f523-b123-4fe6-a21f-40d64e1b4a59", "code": "5a99f523", "type": "singleSelect", "title": "检查的结果？", "content": [{"id": "14e286aa-61f8-42b7-a699-a139491b5cf1", "label": "正常", "autoJump": true}, {"id": "3f5e9af5-1c46-4f35-a5e9-c3678eb1b1cc", "label": "异常", "subQuestions": {"id": "a78c24af-7e4b-468c-92f0-57ab48482c57", "type": "input", "content": [{"id": "36c29b8a-589e-4c3f-a7b9-4f57398d09a8", "type": "text", "placeHolder": "请输入"}]}}]}, {"id": "7e8f9f9e-b476-4f10-8c08-077db1ae10ab", "code": "7e8f9f9e", "type": "date", "title": "分娩日期？", "content": [{"id": "9085a755-ed85-4a63-8bd2-1ddfed83fde2", "range": [-365, 0], "required": false}]}, {"id": "aafa5524-d07f-404d-8d82-b1f1a832d721", "code": "aafa5524", "type": "singleSelect", "title": "生产的胎数是？（选择“其他”请注明胎数）", "content": [{"id": "d3934378-e4b1-4940-af29-e4f87aa81e8f", "label": "单胎", "autoJump": true}, {"id": "8898fe6f-19dd-469e-8441-d4f9d53bb6a3", "label": "双胎", "autoJump": true}, {"id": "51c48bd6-6cd9-482e-acae-98c242c3e8c4", "label": "其他", "subQuestions": {"id": "cdc25771-92a9-4c93-9534-ce13f7a6b49f", "type": "input", "content": [{"id": "a313c15a-0297-41ef-ada2-46bea80d92a0", "type": "number", "placeHolder": "请输入您生产的胎数"}]}}]}, {"id": "64a152d6-d9c4-4e9c-ab0f-df841754ac2a", "code": "64a152d6", "type": "specialSelect", "title": "胎儿出生后情况？", "content": [{"id": "6f1508de-0270-49aa-a861-4d2888ddbf5f", "label": "A胎", "subQuestions": {"id": "40a6e698-57c3-49a0-b396-f938b2e0436b", "type": "singleSelect", "content": [{"id": "3b587ba8-b1bd-4f48-acea-8d378f9ccc42", "label": "正常"}, {"id": "ab7bb76c-0e6e-461b-afa1-531c9036c2ec", "label": "异常", "subQuestions": {"id": "19165f09-6b09-4625-b8d4-a70e6c81e6cf", "type": "input", "content": [{"id": "4920d303-a58b-4aea-9c44-43583db8e155", "type": "text", "placeHolder": "请输入"}]}}]}}, {"id": "5fce1720-5f7c-49c7-9fcf-2e691b4a966d", "label": "B胎", "subQuestions": {"id": "245bd5d1-f280-4a97-9a33-ebf2a1202a1e", "type": "singleSelect", "content": [{"id": "8d35d48f-42cd-4857-a165-5143f274a1a8", "label": "正常"}, {"id": "7509ed14-431a-4792-8d16-4c5f0a7e840c", "label": "异常", "subQuestions": {"id": "ba854b1e-1805-4d7f-99ce-7c3bf15f42b7", "type": "input", "content": [{"id": "82a736c1-1416-4334-9e04-ea55922dd959", "type": "text", "placeHolder": "请输入"}]}}]}}, {"id": "a4f5a3a5-b01d-40fa-9a17-26c3ec4bb027", "label": "C胎", "subQuestions": {"id": "c6c6e32d-6728-4e4f-b6e1-5b793879ffb8", "type": "singleSelect", "content": [{"id": "b0c9bf35-70a2-4ef6-af32-880dd4d17e28", "label": "正常"}, {"id": "c1f83c64-bc38-49ef-93be-1e49a94bccd9", "label": "异常", "subQuestions": {"id": "c7c1a580-a7f7-4bdf-94fc-e156bfb35ec7", "type": "input", "content": [{"id": "5e8050d1-4ccb-4980-9b70-46c12e1dd927", "type": "text", "placeHolder": "请输入"}]}}]}}, {"id": "c9df995d-b696-445a-850f-c159eb03a935", "label": "D胎", "subQuestions": {"id": "1c6158bd-f547-49d9-941c-2da09f2999e7", "type": "singleSelect", "content": [{"id": "6dbf2310-b9cc-4bc6-af03-b35415e05873", "label": "正常"}, {"id": "d985d13a-41ec-488a-b3e4-3fdbc66e12a2", "label": "异常", "subQuestions": {"id": "1b9690c6-d08f-458d-be4d-e2472c17b840", "type": "input", "content": [{"id": "8fcb6735-d71c-431b-887a-54f9696355f3", "type": "text", "placeHolder": "请输入"}]}}]}}]}, {"id": "d519cb62-d0f5-45a0-98f6-5ceb600106c0", "code": "d519cb62", "type": "singleSelect", "title": "胎儿性别？", "content": [{"id": "c589c1df-005a-4642-a345-ff229cd47a94", "label": "男", "autoJump": true}, {"id": "f62da254-a265-401d-9416-a6880f81a97d", "label": "女", "autoJump": true}, {"id": "f97a6ca2-c838-4c59-87be-3e39fd5d7aef", "label": "一男一女", "autoJump": true}, {"id": "03b4e87c-b49f-4c47-8464-f5a3212231c7", "label": "两男", "autoJump": true}, {"id": "36a14076-7b71-493a-919b-00fa17a4e1fd", "label": "两女", "autoJump": true}, {"id": "0a819280-9f4e-4c42-bd9a-b05b30e88772", "label": "其他", "subQuestions": {"id": "aa254b44-ec73-48c1-8f0a-efdc32cf6c44", "type": "input", "content": [{"id": "d1044116-079d-4f48-a890-976709a37ee7", "type": "text", "placeHolder": "请输入胎儿性别"}]}}]}, {"id": "93014d9d-5cf6-4331-8f85-312fded2b11f", "code": "93014d9d", "type": "specialSelect", "title": "胎儿出生时的体重(单位：g)为？", "content": [{"id": "164c975d-a172-4c10-8feb-5078474a8ae4", "label": "A胎", "subQuestions": {"id": "40e2c454-a920-4c7d-ba02-d69a65708ecc", "type": "input", "content": [{"id": "27ee7fb6-d0a3-4893-8cce-e6324b07ff46", "type": "number", "placeHolder": "请输入"}]}}, {"id": "f6412aa1-951e-4d87-a694-43da7cb6718e", "label": "B胎", "subQuestions": {"id": "83fa5aa8-4024-403a-835d-d94200f9ad1f", "type": "input", "content": [{"id": "c42b294a-c342-495c-816a-f0e785945c07", "type": "number", "placeHolder": "请输入"}]}}, {"id": "7018a1d1-8fc0-4e2a-ac44-415b95ad3b76", "label": "C胎", "subQuestions": {"id": "c0cda12e-5057-48eb-859f-86a59b297dd8", "type": "input", "content": [{"id": "064dc4a3-0efd-49d1-ab9c-ae954f0646ef", "type": "number", "placeHolder": "请输入"}]}}, {"id": "83b782cd-4f20-4d2d-a08b-6e6301865139", "label": "D胎", "subQuestions": {"id": "59abb286-a898-4274-b05a-d0ddc1c00676", "type": "input", "content": [{"id": "6d3c88e0-f553-401c-9743-a386036a11e6", "type": "number", "placeHolder": "请输入"}]}}]}, {"id": "faf9d104-a53d-43ae-a510-a5fee7ac8928", "code": "faf9d104", "type": "singleSelect", "title": "出生后诊断（出生后正常请选择无）", "content": [{"id": "d9e6ddd3-fcd0-4495-ab83-a20f71d7e155", "label": "无", "hideQuestions": [13, 14, 15, 16, 17, 18, 19]}, {"id": "78031ab4-815b-4bf4-9f0a-650f7768dd7a", "label": "有", "subQuestions": {"id": "f7b38156-a17a-4d60-aea4-003aaa8590a0", "type": "input", "content": [{"id": "a3b9d9b2-c4c4-431a-b723-3c43d566d29d", "type": "text", "placeHolder": "请输入"}]}}]}, {"id": "3f7d36b6-90d3-4f6a-abf6-190e7881587a", "code": "3f7d36b6", "type": "multSelect", "title": "出生后复查及治疗情况：（多选）", "content": [{"id": "30eaa98f-b493-4d68-86c4-4f20f05a7846", "label": "体检", "subQuestions": {"id": "888ecf67-a054-42ec-b8fc-9f32d129357e", "type": "singleSelect", "content": [{"id": "9b6aec88-d011-4130-8b9a-f98ac27916c2", "label": "正常"}, {"id": "370f0cb1-5e3a-4959-a7e0-de26cd3f6a5e", "label": "异常", "subQuestions": {"id": "fb698e6d-7392-4eb7-ac82-26571f9d4c9f", "type": "input", "content": [{"id": "dc73f302-a730-468c-a33a-60c6b3b1ead1", "type": "number", "placeHolder": "请输入检查时间（月龄）"}, {"id": "19f57508-d5e0-4211-810b-5a47f0fcc1f7", "type": "text", "placeHolder": "请输入检查内容"}]}}]}}, {"id": "d858e269-a388-44f6-89ba-ae9ab6d6666f", "label": "超声波检查", "subQuestions": {"id": "7f7e6e4b-32c4-4fd0-abed-1bab93c242a7", "type": "singleSelect", "content": [{"id": "f67707cc-bdb4-4b5d-8c5d-908caf504cec", "label": "正常"}, {"id": "47bfdaca-405b-4ced-afa2-04de88281074", "label": "异常", "subQuestions": {"id": "74f491d4-d5e9-43f8-9586-1ebc964e3dad", "type": "input", "content": [{"id": "99b74d70-1725-46c6-b430-8751f431a30a", "type": "number", "placeHolder": "请输入检查时间（月龄）"}, {"id": "63ad8e19-f857-45ae-9596-1793a0552ee4", "type": "text", "placeHolder": "请输入检查内容"}]}}]}}, {"id": "e752c9c3-2900-4f11-bee2-9109c81a7ed7", "label": "CT或平片", "subQuestions": {"id": "b2d99f2b-3f8c-4a66-b4fe-8a4529a5e931", "type": "singleSelect", "content": [{"id": "0519eede-e255-4698-969a-69ef6724f2eb", "label": "正常"}, {"id": "1cfa55e6-a65f-4dcc-bb96-a446e801e488", "label": "异常", "subQuestions": {"id": "82e3530b-2f34-4322-8130-464c30278a51", "type": "input", "content": [{"id": "3b69eb61-5219-4114-b27a-a096f8e2c204", "type": "number", "placeHolder": "请输入检查时间（月龄）"}, {"id": "b4f8c0f5-784b-4bed-9f58-e3ce31422fd1", "type": "text", "placeHolder": "请输入检查内容"}]}}]}}, {"id": "5361e8e9-e7f7-40bd-a297-c34c66f24875", "label": "MRI", "subQuestions": {"id": "961c7d5e-f3f2-473f-b6ea-98eb5b1acc48", "type": "singleSelect", "content": [{"id": "9aa0a876-1735-427b-a1db-73e00a808b28", "label": "正常"}, {"id": "047f60d6-1d94-407a-916a-87f76f0d1aed", "label": "异常", "subQuestions": {"id": "d389ce92-8ee7-419d-bd79-d84b8d392322", "type": "input", "content": [{"id": "5221ea1e-64ef-4dba-b918-3feb9aa7a81d", "type": "number", "placeHolder": "请输入检查时间（月龄）"}, {"id": "08ad8935-a9bb-4d3c-8e54-cf1c8526d526", "type": "text", "placeHolder": "请输入检查内容"}]}}]}}, {"id": "02dc96f5-39b7-4713-8443-2a74710c56f4", "label": "手术", "subQuestions": {"id": "9430471b-bd03-4af5-a5e7-8ff7e82c8e51", "type": "input", "content": [{"id": "66adaefd-ee24-4978-be38-57122168a3aa", "type": "number", "placeHolder": "请输入检查时间（月龄）"}, {"id": "549212eb-4b29-42fa-bba2-6ff596178155", "type": "text", "placeHolder": "请输入检查内容"}]}}, {"id": "70e5ecb2-1b9e-4a34-8cff-ee91310bbd70", "label": "其他", "subQuestions": {"id": "c960d6fc-edc2-401b-9dbe-4dc180c38bca", "type": "input", "content": [{"id": "2e498330-ed4d-4d77-b102-f60be379625f", "type": "text", "placeHolder": "请输入检查项目"}, {"id": "7ce22a57-8550-4ce8-b92e-92736e8e0e46", "type": "number", "placeHolder": "请输入检查时间（月龄）"}, {"id": "d16ba7e6-60b3-4d0e-afe8-b91a9bfde66e", "type": "text", "placeHolder": "请输入检查内容"}]}}]}, {"id": "021ef5df-e9ad-40f9-8b6f-d29e0ce8dc5b", "code": "021ef5df", "type": "input", "title": "补充记录", "content": [{"id": "384d3d23-3fb7-466f-8cef-1f655a2b0dc7", "type": "text", "placeHolder": "请输入补充资料"}]}, {"id": "6d67d113-b5cf-4cc9-bb4a-73ca8f5592e2", "code": "6d67d113", "type": "multSelect", "title": "请问您引产的原因为？（多选）", "content": [{"id": "b483e340-d53c-48bc-b36b-46c8b1cd64fa", "label": "胎儿畸形，具体为:", "subQuestions": {"id": "24426baa-1e8c-4d86-98c3-1623af6abee1", "type": "input", "content": [{"id": "40af1f9e-ef44-4782-9166-25b5a64ec0ce", "type": "text", "placeHolder": "请输入"}]}}, {"id": "c474e115-9aa4-4687-936b-71056b12122e", "label": "胎儿基因或染色体异常，具体为:", "subQuestions": {"id": "8d232097-4127-4b2a-8bd8-4330f6ed47ec", "type": "input", "content": [{"id": "2477687e-1db4-4640-8bc2-04a60cd111ac", "type": "text", "placeHolder": "请输入"}]}}, {"id": "582b69eb-7fd4-4931-8a54-6375b2ac4b68", "label": "无特殊情况（社会原因）"}, {"id": "e00bea0a-8478-43c0-bb79-7e1c96e1a18f", "label": "其他", "subQuestions": {"id": "a83efc50-3aea-44d3-8b5b-b337622130c7", "type": "input", "content": [{"id": "745b104d-6c05-4403-9cac-1cf45f93e850", "type": "text", "placeHolder": "请输入"}]}}]}, {"id": "259294f8-a47d-4fb0-8e03-dd889d80d64e", "code": "259294f8", "type": "singleSelect", "title": "请问您在孕期是否做过羊水穿刺、脐带血穿刺、胚胎组织送检等染色体检测？", "content": [{"id": "af9bc817-0db6-466d-83ce-fce6800ec9c8", "label": "做过", "autoJump": true}, {"id": "f94d2333-27ee-4fda-afce-11befaa9b888", "label": "未做过", "autoJump": true, "hideQuestions": [17]}]}, {"id": "9b658e1b-a6e9-4466-9fa5-7c6fbcb8510e", "code": "9b658e1b", "type": "singleSelect", "title": "请问您检查的结果如何？", "content": [{"id": "64d1d181-bc2f-496a-8e1b-72f44388791f", "label": "正常", "autoJump": true}, {"id": "700f2e0b-1ade-4c1c-b02f-d733a3f30917", "label": "异常", "subQuestions": {"id": "b8a43a57-71af-4643-8930-803e2aee3bd0", "type": "input", "content": [{"id": "508ac93b-1053-44dd-b210-20f987f547b7", "type": "text", "placeHolder": "请输入具体"}]}}]}, {"id": "d0b33088-2628-433b-86ae-2eceaf6a3955", "code": "d0b33088", "type": "singleSelect", "title": "是否做过尸检？", "content": [{"id": "1698713a-9a05-402b-a11b-a3103ea79453", "label": "做过", "autoJump": true}, {"id": "6b006071-bf4d-49f9-9aba-d385b0ccc4e6", "label": "未做过", "hideQuestions": [19]}]}, {"id": "9510aec9-a370-466b-adbe-69b441b40e57", "code": "9510aec9", "type": "singleSelect", "title": "请问您检查的结果如何？", "content": [{"id": "649d93e6-e21f-4c7a-8546-68ab5ad0120f", "label": "正常"}, {"id": "a0408427-f987-4165-88ef-46e3d8f97cf5", "label": "异常", "subQuestions": {"id": "dda9662f-f098-470f-aa22-efa2d6fe5dce", "type": "input", "content": [{"id": "7b5dde59-590d-4ecc-993d-7ac44bb74ebc", "type": "text", "placeHolder": "请输入"}]}}]}]',
};
const question = {
  name: apiQuestion.name,
  description: JSON.parse(apiQuestion.description),
  designJson: JSON.parse(apiQuestion.designJson),
};
// 唐筛问卷
let params = formatQuestionnaireForApi(MRI_Questionnaire);
// console.log('Non_Invasive_DNA_Questions', params);
export default params;
