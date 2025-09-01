<script setup lang="ts" name="SingleChoiceRender">
import {
  useHideQuestionStore,
  useValidationStore,
} from "@/store/modules/questionaire";

import InputRender from "./inputRender.vue";
import {
  ref,
  reactive,
  inject,
  watch,
  watchEffect,
  nextTick,
  onMounted,
  onUnmounted,
} from "vue";

interface Option {
  label: string;
  id: string;
  showInput?: boolean;
  isSelected?: boolean;
  autoJump?: boolean;
  subQuestions?: { type: string; content: any; required?: boolean };
  hideQuestions?: number[];
}

// 定义父组件传递的 modelValue
const props = defineProps<{ modelValue: Option[] }>();
const emit = defineEmits(["update:modelValue", "goNext"]);

const selectId = ref("");
const options = reactive<Option[]>([...props.modelValue]);
const validationStore = useValidationStore();

// 从父组件注入校验控制
const formValidation = inject("formValidation", null) as any;
const componentId = `singleChoiceRender-${Math.random()
  .toString(36)
  .substring(2, 10)}`;
const shouldValidate = ref(false);
const hasUserInteracted = ref(false);

// 注册组件，用于校验控制
if (formValidation) {
  formValidation.registerValidation(componentId);

  // 检查是否应该显示校验结果
  watchEffect(() => {
    shouldValidate.value =
      formValidation.getShouldShowValidation() || hasUserInteracted.value;
  });
}

// 监听选中项
function onClickOption(item: Option) {
  selectId.value = item.id;
  const hiddenQuestionStore = useHideQuestionStore();

  options.forEach((opt) => {
    if (opt.id === item.id) {
      opt.isSelected = true;
      hiddenQuestionStore.setHideQuestionsV2(opt.id, opt.hideQuestions || []);
    } else {
      opt.isSelected = false;
      hiddenQuestionStore.setHideQuestionsV2(opt.id, []);
    }
  });

  // 用户已交互
  hasUserInteracted.value = true;
  validate();
}

const componentKey = `singleSelectRender-${Math.random()
  .toString(36)
  .substring(2, 10)}`;

// 监听选项变化，更新父组件
watch(
  () => options,
  (newOptions) => {
    emit("update:modelValue", newOptions);
  },
  { deep: true }
);

// 同步父级变更（例如在属性面板中拖拽/排序）到内部 options
watch(
  () => props.modelValue,
  (newVal) => {
    // 覆盖内部数组顺序与内容
    options.splice(0, options.length, ...(newVal as Option[]));
  },
  { deep: true }
);

const isValid = ref(false);

// 校验逻辑
function validate() {
  isValid.value = selectId.value !== "";

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
    selectId.value = options.find((opt) => opt.isSelected)?.id || "";
    options.forEach((opt) => {
      if (opt.isSelected && opt.hideQuestions) {
        const hiddenQuestionStore = useHideQuestionStore();
        hiddenQuestionStore.setHideQuestionsV2(opt.id, opt.hideQuestions || []);
      }
    });
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
  <div class="relative">
    <el-radio-group v-model="selectId" class="single-choice-group">
      <template v-for="item in options" :key="item.id">
        <el-radio :value="item.id" @click="onClickOption(item)">
          {{ item.label }}
        </el-radio>

        <InputRender
          v-if="item.isSelected && item.subQuestions?.type === 'input'"
          v-model="item.subQuestions.content"
        />
      </template>
    </el-radio-group>
    <div v-if="!isValid && shouldValidate" class="error-message">
      请选择一项
    </div>
  </div>
</template>

<style scoped>
.option {
  box-sizing: border-box;
  height: 3rem;
  padding-left: 2rem;
  font-size: 1rem;
  line-height: 3rem;
  background-color: #f7f8f9;
  border-radius: 0.25rem;
}

.active {
  box-sizing: border-box;
  font-weight: 600;
  line-height: 40px;
  color: #3d82f2;
  border: #3d82f2 2px solid;
}

.error-message {
  position: absolute;
  top: 32px;
  left: 0;
  font-size: 12px;
  line-height: 1;
  color: #f56c6c;
}

.single-choice-group {
  position: relative;
  display: flex;
  align-items: flex-start;

  /* background-color: #f7f8f9; */

  /* height: 70px; */
  min-height: 50px;
}
</style>
