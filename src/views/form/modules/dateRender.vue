<script setup lang="ts" name="DateRender">
/* eslint-disable */

import moment from "moment";
import { useValidationStore } from "@/store/modules/questionaire";
import { reactive, ref, watch, watchEffect, computed, onMounted } from "vue";
type DatePicker = {
  range: [number, number];
  require?: boolean;
  value: string[][];
};
// 定义父组件传递的 modelValue
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
});

// 定义向父组件发送更新事件
const emit = defineEmits(["update:modelValue"]);

// 初始化 questions 数据，默认绑定父组件传递的modelValue值
const questions = reactive<DatePicker[]>(props.modelValue as DatePicker[]);

// 监听questions的变化并通过emit更新父组件的modelValue
watch(
  () => questions,
  (newQuestions) => {
    emit("update:modelValue", newQuestions);
  },
  { deep: true }
);
watchEffect(() => {
  let storeValidate = useValidationStore();
  let isRequired = storeValidate.isRequired;
  if (!isRequired || (isRequired && questions[0].value)) {
    storeValidate.setValidation(true);
  } else {
    storeValidate.setValidation(false);
  }
});
let disableDate = (date: Date) => {
  if (moment().add(questions[0].range![0], "days")) {
    const minDate = moment().add(questions[0].range![0], "days").toDate();
    const maxDate = moment().add(questions[0].range![1], "days").toDate();
    return date < minDate || date > maxDate;
  }
};
let date = ref<string | undefined>();
let originDate = computed(() => {
  return formatDate(date.value as string);
});
onMounted(() => {
  if (!questions.length) return; // 确保 questions 不为空
  const question = questions[0];

  if (!question.value) return; // 确保 value 存在

  let rawValue = question.value;

  if (Array.isArray(rawValue) && rawValue.length > 0) {
    const firstItem = rawValue[0]; // TS很神奇吧

    if (typeof firstItem === "string") {
      try {
        const parsed = JSON.parse(firstItem);
        date.value = Array.isArray(parsed) ? parsed.join("-") : firstItem;
      } catch {
        date.value = firstItem; // 解析失败，直接赋值
      }
    }
  } else if (typeof rawValue === "string") {
    date.value = rawValue; // 兜底处理
  }
});
function onChangeDate(date: any) {
  questions[0].value = formatDate(date);
  console.log(questions[0].value, "questions[0].value");
}
function formatDate(date: string | Date) {
  return [
    [
      String(moment(date).year()),
      String(moment(date).month() + 1), // 月份是 0-11，需要 +1
      String(moment(date).date()),
    ],
  ];
}
</script>

<template>
  <div>
    <div id="dateRender">
      <el-date-picker
        v-model="date"
        name="选择日期"
        :show-toolbar="false"
        class="left-border-container"
        :option-height="36"
        :disabled-date="disableDate"
        @change="onChangeDate"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.left-border-container {
  margin-top: 1rem;
  background-color: #f7f8f9;
  border-left: 0.2rem solid #ececec;
  border-radius: 0.2rem;
}
</style>
