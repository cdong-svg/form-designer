<script setup lang="ts" name="MultChoiceRender">
import { useValidationStore } from "@/store/modules/questionaire";
import inputsRender from "./inputRender.vue";
import singleChoiceRender from "./singleChoiceRender.vue";
import {
  ref,
  reactive,
  inject,
  watch,
  computed,
  nextTick,
  onMounted,
  onUnmounted,
} from "vue";
// 定义父组件传递的 modelValue
const props = defineProps({
  modelValue: {
    type: Array,
    default: () => [],
  },
  fetusCount: {
    type: Number,
    default: 4, // 默认显示所有胎
  },
});
// 定义向父组件发送更新事件
const emit = defineEmits(["update:modelValue"]);
let selectedVal = ref([]);
type multOptions = {
  id: string;
  label: string;
  isSelected?: boolean;
  showSingleSelect?: any;
  showInput?: any;
  subQuestions?: any;
}[];
// 初始化 questions 数据，默认绑定父组件传递的modelValue值
const options = reactive<multOptions>(props.modelValue as multOptions);
const validationStore = useValidationStore();
const componentKey = `multSelectRender-${Math.random()
  .toString(36)
  .substring(2, 10)}`;

// 从父组件注入校验控制
const formValidation = inject("formValidation", null) as any;
const componentId = `multChoiceRender-${Math.random()
  .toString(36)
  .substring(2, 10)}`;
const shouldValidate = ref(false);

// 注册组件，用于校验控制
if (formValidation) {
  formValidation.registerValidation(componentId);

  // 检查是否应该显示校验结果
  watchEffect(() => {
    shouldValidate.value = formValidation.getShouldShowValidation();
  });
}

// 监听questions的变化并通过emit更新父组件的modelValue
watch(
  () => options,
  (newVal) => {
    emit("update:modelValue", newVal);
  },
  { deep: true }
);

// 同步父级变更（如属性面板排序）
watch(
  () => props.modelValue,
  (newVal) => {
    options.splice(0, options.length, ...(newVal as any));
  },
  { deep: true }
);
const activeNames = ref([0, 1, 2, 3]);
// 根据胎数过滤内容
const displayContent = computed(() => {
  return options.slice(0, props.fetusCount);
});
const isValid = ref(false);

function validate() {
  let storeValidate = useValidationStore();
  let isRequired = storeValidate.isRequired || true;

  // 检查是否有子问题被回答
  let hasAnswered = false;
  for (const item of displayContent.value) {
    if (item.subQuestions && item.subQuestions.content) {
      // 对于单选类型，检查是否有选中项
      if (item.subQuestions.type === "singleSelect") {
        const hasSelected = item.subQuestions.content.find(
          (option: any) => option.isSelected
        );
        if (hasSelected) {
          hasAnswered = true;
          break;
        }
      }
      // 对于输入类型，检查是否有输入值
      else if (item.subQuestions.type === "input") {
        const hasInput = item.subQuestions.content.find(
          (input: any) => input.value
        );
        if (hasInput) {
          hasAnswered = true;
          break;
        }
      }
    }
  }

  if (!isRequired || (isRequired && hasAnswered)) {
    isValid.value = true;
    storeValidate.setValidation(true);
  } else {
    isValid.value = false;
    storeValidate.setValidation(false);
  }

  // 更新全局校验状态
  validationStore.setValidationV2(componentKey, isValid.value);

  // 更新父组件中的校验结果
  if (formValidation) {
    formValidation.updateValidationResult(componentId, isValid.value);
  }

  return isValid.value;
}

// 手动触发校验的方法
function triggerValidation() {
  shouldValidate.value = true;
  return validate();
}

// 暴露方法供父组件调用
defineExpose({ validate, triggerValidation });

onMounted(() => {
  nextTick(() => {
    validate();
  });
});

onUnmounted(() => {
  validationStore.setValidationV2(componentKey, true);
  if (formValidation) {
    formValidation.unregisterValidation(componentId);
  }
});
</script>

<template>
  <el-collapse v-model="activeNames">
    <el-collapse-item
      v-for="(item, index) in displayContent"
      :key="item.id"
      :title="item.label"
      :name="index"
    >
      <singleChoiceRender
        v-if="item.subQuestions && item.subQuestions.type === 'singleSelect'"
        v-model="item.subQuestions.content"
        class="ml-8"
      />
      <inputsRender
        v-if="item.subQuestions && item.subQuestions.type === 'input'"
        v-model="item.subQuestions.content"
        class="ml-8"
      />
    </el-collapse-item>
  </el-collapse>
</template>

<style scoped lang="scss">
.block {
  display: block;
  line-height: 32px;
}

.error-message {
  position: absolute;
  bottom: -18px;
  left: 0;
  font-size: 12px;
  color: #f56c6c;
}
</style>
