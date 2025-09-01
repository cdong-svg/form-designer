import { defineStore } from "pinia";
// import { defineStore } from 'pinia';

export const useValidationStore = defineStore("validation", {
  state: () => ({
    isValidated: false, // 默认不通过校验,
    isRequired: false, // 默认当前题不需要校验
    isValidatedV2: {},
  }),

  actions: {
    setValidation(status: boolean) {
      this.isValidated = status; // 设置校验结果
    },
    setRequired(status: boolean) {
      this.isRequired = status;
    },
    setValidationV2(id: string, status: boolean) {
      this.isValidatedV2[id] = status;
    },
  },
});

export const useHideQuestionStore = defineStore("hideQuestions", {
  state: () => ({
    hideQuestions: [] as number[][], // 二维数组，存储隐藏的题号
    currentIndex: 0, // 当前题目的索引，默认为 0
    hideQuestionsV2: {},
  }),

  actions: {
    // 设置当前题目的索引
    setCurrentIndex(index: number) {
      if (index >= 0 && index < this.hideQuestions.length) {
        this.currentIndex = index;
      } else {
        console.error(`Invalid index: ${index}`);
      }
    },

    // 设置当前题目的隐藏问题
    setHideQuestions(value: number[], index?: number) {
      // 根据当前索引更新 hideQuestions
      let i = index || this.currentIndex || 0;
      if (i >= 0 && i < this.hideQuestions.length) {
        this.hideQuestions[i] = value;
      } else {
        console.error(`Invalid current index: ${i}`);
      }
    },

    initHideQuestions(value: number[][]) {
      this.hideQuestions = value;
      //   console.log("this.hideQuestions", this.hideQuestions);
    },
    resetCurrentStepHideQuestions() {
      this.hideQuestions[this.currentIndex] = [];
    },
    setHideQuestionsV2(id: string, value: number[]) {
      this.hideQuestionsV2[id] = value;
    },
    initHideQuestion() {
      this.hideQuestionsV2 = {};
    },
  },
  getters: {
    // 返回一个扁平化的 Set，包含所有隐藏的题号
    hiddenQuestionNo(state): Set<number> {
      return new Set<number>(state.hideQuestions.flat());
    },
  },
});
