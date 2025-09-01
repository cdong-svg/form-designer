<script setup lang="ts" name="InputRender">
import { useValidationStore } from "@/store/modules/questionaire";
import {
  inject,
  nextTick,
  onUnmounted,
  onMounted,
  ref,
  watch,
  watchEffect,
} from "vue";

interface Question {
  type: string;
  placeHolder?: string;
  value?: string | number | undefined;
  required?: boolean;
}

// 定义校验注入的接口
interface FormValidation {
  registerValidation: (id: string) => void;
  unregisterValidation: (id: string) => void;
  updateValidationResult: (id: string, isValid: boolean) => void;
  getShouldShowValidation: () => boolean;
}

// 定义父组件传递的 modelValue
const props = defineProps<{ modelValue: Question[] }>();

// 定义向父组件发送更新事件
const emit = defineEmits(["update:modelValue"]);

// 绑定到组件内部的数据
const questions = ref<Question[]>([...props.modelValue]);
const validationErrors = ref<any[]>(
  Array.from({ length: questions.value.length }).fill("")
);

// 从父组件注入校验控制
const formValidation = inject<FormValidation | null>("formValidation", null);
const componentId = `inputRender-${Math.random()
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

// 监听questions的变化并通过emit更新父组件
watch(
  questions,
  (newQuestions) => {
    emit("update:modelValue", newQuestions);

    // 如果用户输入了值，标记为已交互
    const hasValue = newQuestions.some((q) => !!q.value);
    if (hasValue) {
      hasUserInteracted.value = true;
    }

    // 每次数据变化都校验，但只在需要时显示错误
    validate();
  },
  { deep: true }
);

// 校验逻辑
const validationStore = useValidationStore();
const componentKey = `inputRender-${Math.random()
  .toString(36)
  .substring(2, 10)}`;

function validate() {
  let isValid = true;
  validationErrors.value = Array.from({ length: questions.value.length }).fill(
    ""
  );

  questions.value.forEach((item, index) => {
    if (item.required !== false && !item.value) {
      isValid = false;
      // 强制设置错误信息，无论shouldValidate状态如何
      validationErrors.value[index] = "请完善内容";
    } else if (
      item.type === "number" &&
      item.value !== undefined &&
      item.value !== null
    ) {
      const numValue = Number(item.value);
      if (Number.isNaN(numValue) || numValue < 1) {
        isValid = false;
        item.value = undefined;
      }
    }
  });

  // 更新全局校验状态
  validationStore.setValidationV2(componentKey, isValid);

  // 更新父组件中的校验结果
  if (formValidation) {
    formValidation.updateValidationResult(componentId, isValid);
  }

  return isValid;
}

// 手动触发校验的方法
function triggerValidation() {
  // 强制设置校验为true
  shouldValidate.value = true;
  hasUserInteracted.value = true;

  // 执行校验
  const result = validate();

  // 确保UI更新显示错误信息
  nextTick(() => {
    // 如果有必要，可以再次触发校验
    if (!result) {
      validationStore.setValidation(false);
    }
  });

  return result;
}

// 暴露方法供父组件调用
defineExpose({ validate, triggerValidation });
onMounted(() => {
  validate();
});
// 组件卸载时清理
onUnmounted(() => {
  validationStore.setValidationV2(componentKey, true);
  if (formValidation) {
    formValidation.unregisterValidation(componentId);
  }
});
</script>

<template>
  <div>
    <div id="input-render">
      <div v-for="(item, index) in questions" :key="index" class="mb-4">
        <el-input
          v-model="item.value"
          :placeholder="item.placeHolder || '请输入'"
          :type="item.type"
          class="inputs"
          :class="{ 'is-error': validationErrors[index] && shouldValidate }"
        />
        <div
          v-show="validationErrors[index] && shouldValidate"
          class="error-message"
        >
          {{ validationErrors[index] }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mb-4 {
  position: relative;
  margin-bottom: 1.5rem;
}

.is-error :deep(.el-input__wrapper) {
  box-shadow: 0 0 0 1px var(--el-color-danger) inset !important;
}

.error-message {
  position: absolute;
  bottom: -18px;
  left: 0;
  font-size: 12px;
  line-height: 1;
  color: #f56c6c;
  white-space: nowrap;
}
</style>
