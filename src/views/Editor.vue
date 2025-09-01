<template>
  <el-tabs v-model="active" type="border-card">
    <el-tab-pane label="问卷设计" name="design">
      <div style="display: flex; gap: 16px">
        <el-card class="fixed-card" style="width: 280px">
          <template #header>题型</template>
          <div
            v-for="component in componentList"
            :key="component.type"
            class="component-item"
            draggable="true"
            @dragstart="handleDragStart($event, component)"
            @click="handleAddComponent(component)"
          >
            <el-icon class="component-icon">
              <component :is="component.icon" />
            </el-icon>
            <span class="component-name">{{ component.name }}</span>
          </div>
        </el-card>
        <el-card class="fixed-card" style="flex: 1">
          <template #header>画布</template>
          <div class="canvas-dropzone" @dragover.prevent @drop="handleDrop">
            <div class="form-title" v-if="formTitle">
              {{ formTitle }}
            </div>
            <template v-if="canvasItems.length">
              <div
                v-for="(item, index) in canvasItems"
                :key="item.id"
                class="canvas-item"
                :class="{ active: selectedIndex === index }"
                @click="selectItem(index)"
                draggable="true"
                @dragstart="(e) => handleItemDragStart(index, e)"
                @dragover.prevent="(e) => handleItemDragOver(index, e)"
                @drop.stop="(e) => handleItemDrop(index, e)"
              >
                <div class="canvas-item-header">
                  <span>{{ item.title || getComponentName(item.type) }}</span>
                  <div class="canvas-item-ops">
                    <el-button
                      circle
                      size="small"
                      :icon="ArrowUp"
                      :disabled="index === 0"
                      @click.stop="moveUp(index)"
                    />
                    <el-button
                      circle
                      size="small"
                      :icon="ArrowDown"
                      :disabled="index === canvasItems.length - 1"
                      @click.stop="moveDown(index)"
                    />
                    <el-button
                      type="text"
                      size="small"
                      @click.stop="removeItem(index)"
                      >删除</el-button
                    >
                  </div>
                </div>
                <component
                  :is="rendererMap[item.type]"
                  v-model="item.content"
                />
              </div>
            </template>
            <template v-else>
              <el-empty description="将题型拖到此处" />
            </template>
          </div>
        </el-card>
        <el-card class="fixed-card" style="width: 360px">
          <template #header>属性设置</template>

          <template v-if="currentItem">
            <div class="prop-group">
              <div class="prop-title">表单</div>
              <el-input v-model="formTitle" placeholder="大标题(可选)" />
            </div>
            <div class="prop-group">
              <div class="prop-title">通用</div>
              <el-input
                v-model="currentItem.title"
                placeholder="题目标题(可选)"
              />
            </div>

            <template v-if="currentItem.type === 'input'">
              <div class="prop-group">
                <div class="prop-title">输入框</div>
                <el-select
                  v-model="currentItem.content[0].type"
                  placeholder="类型"
                  size="small"
                >
                  <el-option label="文本" value="text" />
                  <el-option label="数字" value="number" />
                </el-select>
                <el-input
                  v-model="currentItem.content[0].placeHolder"
                  placeholder="占位提示"
                  size="small"
                  style="margin-top: 8px"
                />
                <el-switch
                  v-model="currentItem.content[0].required"
                  active-text="必填"
                  inactive-text="可选"
                  style="margin-top: 8px"
                />
              </div>
            </template>

            <template v-else-if="currentItem.type === 'singleSelect'">
              <div class="prop-group">
                <div class="prop-title">单选项</div>
                <div
                  v-for="(opt, oi) in currentItem.content"
                  :key="opt.id"
                  class="option-row"
                  draggable="true"
                  @dragstart="() => onOptionDragStart(oi)"
                  @dragover.prevent="onOptionDragOver"
                  @drop="() => onOptionDrop(oi)"
                >
                  <el-input v-model="opt.label" size="small" />
                  <el-radio
                    :model-value="opt.isSelected"
                    @change="() => setSingleDefault(oi)"
                    >默认</el-radio
                  >
                  <el-button
                    circle
                    size="small"
                    :icon="ArrowUp"
                    :disabled="oi === 0"
                    @click="optionMoveUp(oi)"
                  />
                  <el-button
                    circle
                    size="small"
                    :icon="ArrowDown"
                    :disabled="oi === currentItem.content.length - 1"
                    @click="optionMoveDown(oi)"
                  />
                  <el-button
                    type="text"
                    size="small"
                    @click="removeSingleOption(oi)"
                    >删除</el-button
                  >
                </div>
                <el-button
                  type="primary"
                  plain
                  size="small"
                  @click="addSingleOption"
                  >新增选项</el-button
                >
              </div>
            </template>

            <template v-else-if="currentItem.type === 'multSelect'">
              <div class="prop-group">
                <div class="prop-title">多选项</div>
                <div
                  v-for="(opt, oi) in currentItem.content"
                  :key="opt.id"
                  class="option-row"
                  draggable="true"
                  @dragstart="() => onOptionDragStart(oi)"
                  @dragover.prevent="onOptionDragOver"
                  @drop="() => onOptionDrop(oi)"
                >
                  <el-input v-model="opt.label" size="small" />
                  <el-checkbox v-model="opt.isSelected">默认选中</el-checkbox>
                  <el-button
                    circle
                    size="small"
                    :icon="ArrowUp"
                    :disabled="oi === 0"
                    @click="optionMoveUp(oi)"
                  />
                  <el-button
                    circle
                    size="small"
                    :icon="ArrowDown"
                    :disabled="oi === currentItem.content.length - 1"
                    @click="optionMoveDown(oi)"
                  />
                  <el-button
                    type="text"
                    size="small"
                    @click="removeMultOption(oi)"
                    >删除</el-button
                  >
                </div>
                <el-button
                  type="primary"
                  plain
                  size="small"
                  @click="addMultOption"
                  >新增选项</el-button
                >
              </div>
            </template>

            <template v-else-if="currentItem.type === 'date'">
              <div class="prop-group">
                <div class="prop-title">日期</div>
                <div class="option-row">
                  <el-input-number
                    v-model="currentItem.content[0].range[0]"
                    :min="-3650"
                    :max="3650"
                    size="small"
                    controls-position="right"
                  />
                  <span style="padding: 0 6px">至</span>
                  <el-input-number
                    v-model="currentItem.content[0].range[1]"
                    :min="-3650"
                    :max="3650"
                    size="small"
                    controls-position="right"
                  />
                </div>
                <div>
                  <el-switch
                    v-model="currentItem.content[0].required"
                    active-text="必填"
                    inactive-text="可选"
                  />
                </div>
              </div>
            </template>

            <template v-else-if="currentItem.type === 'specialSelect'">
              <div class="prop-group">
                <div class="prop-title">特殊选择</div>
                <div
                  v-for="(opt, oi) in currentItem.content"
                  :key="opt.id"
                  class="option-row"
                  draggable="true"
                  @dragstart="() => onOptionDragStart(oi)"
                  @dragover.prevent="onOptionDragOver"
                  @drop="() => onOptionDrop(oi)"
                >
                  <el-input v-model="opt.label" size="small" />
                  <el-button
                    circle
                    size="small"
                    :icon="ArrowUp"
                    :disabled="oi === 0"
                    @click="optionMoveUp(oi)"
                  />
                  <el-button
                    circle
                    size="small"
                    :icon="ArrowDown"
                    :disabled="oi === currentItem.content.length - 1"
                    @click="optionMoveDown(oi)"
                  />
                  <el-button
                    type="text"
                    size="small"
                    @click="removeSpecialOption(oi)"
                    >删除</el-button
                  >
                </div>
                <el-button
                  type="primary"
                  plain
                  size="small"
                  @click="addSpecialOption"
                  >新增选项</el-button
                >
              </div>
            </template>
          </template>
          <template v-else>
            <el-empty description="请选择画布中的题目" />
          </template>
        </el-card>
      </div>
    </el-tab-pane>
    <el-tab-pane label="预览" name="preview">
      <div style="display: flex; gap: 16px">
        <el-card class="fixed-card" style="flex: 1">
          <template #header>预览</template>
          <div class="preview-area">
            <div class="form-title" v-if="formTitle">
              {{ formTitle }}
            </div>
            <template v-if="canvasItems.length">
              <div
                v-for="(item, index) in canvasItems"
                :key="item.id"
                class="preview-item"
              >
                <div class="preview-item-header">
                  <span class="preview-title"
                    >{{ index + 1 }}、{{
                      item.title || getComponentName(item.type)
                    }}</span
                  >
                </div>
                <component
                  :is="rendererMap[item.type]"
                  v-model="item.content"
                />
              </div>
            </template>
            <template v-else>
              <el-empty description="暂无题目，去设计页添加吧" />
            </template>
          </div>
        </el-card>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watch } from "vue";
import inputRender from "@/views/form/modules/inputRender.vue";
import singleChoiceRender from "@/views/form/modules/singleChoiceRender.vue";
import multChoiceRender from "@/views/form/modules/multChoiceRender.vue";
import dateRender from "@/views/form/modules/dateRender.vue";
import specialRender from "@/views/form/modules/specialRender.vue";
import { getUuid } from "@/uilts";
import { ArrowUp, ArrowDown } from "@element-plus/icons-vue";

const active = ref("design");
const formTitle = ref<string>("");

// 组件库定义，复用各渲染器
const componentList = [
  {
    type: "input",
    name: "输入框",
    icon: "Edit",
    defaultContent: [
      {
        id: getUuid(),
        type: "text",
        value: "",
        required: true,
        placeHolder: "请输入",
      },
    ],
  },
  {
    type: "singleSelect",
    name: "单选题",
    icon: "CircleCheck",
    defaultContent: [
      { id: getUuid(), label: "选项1", isSelected: false },
      { id: getUuid(), label: "选项2", isSelected: false },
    ],
  },
  {
    type: "multSelect",
    name: "多选题",
    icon: "Check",
    defaultContent: [
      { id: getUuid(), label: "选项1", isSelected: false },
      { id: getUuid(), label: "选项2", isSelected: false },
    ],
  },
  {
    type: "date",
    name: "日期选择",
    icon: "Calendar",
    defaultContent: [{ range: [0, 365], required: true, value: [] }],
  },
  {
    type: "specialSelect",
    name: "特殊选择",
    icon: "Star",
    defaultContent: [
      {
        id: getUuid(),
        label: "胎儿1",
        isSelected: false,
        subQuestions: {
          type: "input",
          content: [
            { id: getUuid(), type: "number", value: "", required: true },
          ],
        },
      },
    ],
  },
];
const draggedComponent = ref<any>(null);
const handleDragStart = (event: DragEvent, component: any) => {
  draggedComponent.value = component;
  event.dataTransfer?.setData("text/plain", component.type);
};

// 画布数据与渲染映射
const rendererMap: Record<string, any> = {
  input: inputRender,
  singleSelect: singleChoiceRender,
  multSelect: multChoiceRender,
  date: dateRender,
  specialSelect: specialRender,
};

type CanvasItem = {
  id: string;
  type: string;
  title?: string;
  content: any;
};

const canvasItems = ref<CanvasItem[]>([]);
const selectedIndex = ref<number | null>(null);
const currentItem = computed(() =>
  selectedIndex.value !== null ? canvasItems.value[selectedIndex.value] : null
);

// 拖拽排序（画布内）
const draggedIndex = ref<number | null>(null);
const dragOverIndex = ref<number | null>(null);

function handleItemDragStart(index: number, event: DragEvent) {
  draggedIndex.value = index;
  event.dataTransfer?.setData("text/plain", "reorder");
  event.dataTransfer?.setDragImage(new Image(), 0, 0);
}

function handleItemDragOver(index: number, event: DragEvent) {
  event.preventDefault();
  dragOverIndex.value = index;
}

function moveItem(oldIndex: number, newIndex: number) {
  if (oldIndex === newIndex) return;
  if (newIndex < 0) return;
  const movingItem = canvasItems.value[oldIndex];
  // 从原位置删除
  canvasItems.value.splice(oldIndex, 1);
  // 在目标位置插入（允许等于长度表示追加到末尾）
  const targetIndex = Math.min(newIndex, canvasItems.value.length);
  canvasItems.value.splice(targetIndex, 0, movingItem);

  // 维持选中项
  const id = movingItem.id;
  const idx = canvasItems.value.findIndex((it) => it.id === id);
  selectedIndex.value = idx === -1 ? null : idx;
}

function handleItemDrop(index: number, event: DragEvent) {
  event.preventDefault();
  if (draggedIndex.value !== null) {
    moveItem(draggedIndex.value, index);
  }
  draggedIndex.value = null;
  dragOverIndex.value = null;
}

function moveUp(index: number) {
  moveItem(index, index - 1);
}

function moveDown(index: number) {
  moveItem(index, index + 1);
}

function deepClone<T>(val: T): T {
  return JSON.parse(JSON.stringify(val));
}

function handleDrop() {
  if (!draggedComponent.value) return;
  const def = deepClone(draggedComponent.value.defaultContent || []);
  const item: CanvasItem = {
    id: getUuid(),
    type: draggedComponent.value.type,
    title: draggedComponent.value.name || "",
    content: def,
  };
  canvasItems.value.push(item);
  selectedIndex.value = canvasItems.value.length - 1;
}

// 题型点击直接添加到画布
function handleAddComponent(component: any) {
  const def = deepClone(component.defaultContent || []);
  const item: CanvasItem = {
    id: getUuid(),
    type: component.type,
    title: component.name || "",
    content: def,
  };
  canvasItems.value.push(item);
  selectedIndex.value = canvasItems.value.length - 1;
}

function selectItem(index: number) {
  selectedIndex.value = index;
}

function removeItem(index: number) {
  canvasItems.value.splice(index, 1);
  if (selectedIndex.value === index) {
    selectedIndex.value = null;
  } else if (selectedIndex.value !== null && selectedIndex.value > index) {
    selectedIndex.value = selectedIndex.value - 1;
  }
}

function getComponentName(type: string) {
  const item = componentList.find((c) => c.type === type);
  return item ? item.name : type;
}

// 属性面板：单选
function setSingleDefault(optionIndex: number) {
  if (!currentItem.value) return;
  currentItem.value.content.forEach((opt: any, idx: number) => {
    opt.isSelected = idx === optionIndex;
  });
}
function addSingleOption() {
  if (!currentItem.value) return;
  currentItem.value.content.push({
    id: getUuid(),
    label: `选项${currentItem.value.content.length + 1}`,
    isSelected: false,
  });
}
function removeSingleOption(index: number) {
  if (!currentItem.value) return;
  currentItem.value.content.splice(index, 1);
}

// 属性面板：多选
function addMultOption() {
  if (!currentItem.value) return;
  currentItem.value.content.push({
    id: getUuid(),
    label: `选项${currentItem.value.content.length + 1}`,
    isSelected: false,
  });
}
function removeMultOption(index: number) {
  if (!currentItem.value) return;
  currentItem.value.content.splice(index, 1);
}

// 属性面板：特殊选择
function addSpecialOption() {
  if (!currentItem.value) return;
  currentItem.value.content.push({
    id: getUuid(),
    label: `胎儿${currentItem.value.content.length + 1}`,
    isSelected: false,
    subQuestions: {
      type: "input",
      content: [{ id: getUuid(), type: "number", value: "", required: true }],
    },
  });
}
function removeSpecialOption(index: number) {
  if (!currentItem.value) return;
  currentItem.value.content.splice(index, 1);
}

// 属性面板：选项排序（通用）
const optionDragIndex = ref<number | null>(null);
function onOptionDragStart(index: number) {
  optionDragIndex.value = index;
}
function onOptionDragOver() {}
function onOptionDrop(targetIndex: number) {
  if (!currentItem.value) return;
  if (optionDragIndex.value === null) return;
  const list = currentItem.value.content;
  const moving = list[optionDragIndex.value];
  list.splice(optionDragIndex.value, 1);
  const insertAt = Math.min(targetIndex, list.length);
  list.splice(insertAt, 0, moving);
  optionDragIndex.value = null;
}
function optionMoveUp(index: number) {
  if (!currentItem.value) return;
  if (index <= 0) return;
  const list = currentItem.value.content;
  const temp = list[index - 1];
  list[index - 1] = list[index];
  list[index] = temp;
}
function optionMoveDown(index: number) {
  if (!currentItem.value) return;
  const list = currentItem.value.content;
  if (index >= list.length - 1) return;
  const temp = list[index + 1];
  list[index + 1] = list[index];
  list[index] = temp;
}
</script>
<style lang="scss" scoped>
.component-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f8f9fa;
  border: 1px solid #e4e7ed;
  border-radius: 6px;
  cursor: grab;
}

.canvas-dropzone {
  min-height: 420px;
  padding: 8px;
  background: #fafafa;
  border: 1px dashed #c0c4cc;
  border-radius: 6px;
}

.form-title {
  margin: 8px 8px 12px;
  font-size: 18px;
  font-weight: 700;
  color: #303133;
}

.canvas-item {
  padding: 12px;
  margin-bottom: 12px;
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: 6px;
}
.canvas-item.active {
  border-color: var(--el-color-primary);
  box-shadow: 0 0 0 1px var(--el-color-primary) inset;
}
.canvas-item-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #606266;
}

.prop-group {
  margin-bottom: 16px;
}
.prop-title {
  margin-bottom: 8px;
  font-weight: 600;
}
.option-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

/* 预览样式 */
.preview-area {
  padding: 8px;
}
.preview-item {
  padding: 12px;
  margin-bottom: 12px;
  background: #fff;
  border: 1px solid #ebeef5;
  border-radius: 6px;
}
.preview-item-header {
  margin-bottom: 8px;
  color: #303133;
  font-weight: 600;
}
.preview-title {
  font-size: 14px;
}

/* 固定卡片头部，仅内容滚动 */
.fixed-card :deep(.el-card__body) {
  max-height: calc(100vh - 260px);
  overflow: auto;
}
.fixed-card :deep(.el-card__header) {
  position: sticky;
  top: 0;
  z-index: 1;
  background: #fff;
}
</style>
