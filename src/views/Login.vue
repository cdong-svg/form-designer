<template>
  <div
    style="
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
    "
  >
    <el-card style="width: 380px">
      <template #header>
        <div style="text-align: center">登录</div>
      </template>
      <el-form :model="form" :rules="rules" ref="formRef" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="form.password"
            type="password"
            placeholder="请输入密码"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" :loading="loading" @click="onSubmit"
            >登录</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import { useAuthStore } from "@/store/auth";
import { useRoute, useRouter } from "vue-router";

const auth = useAuthStore();
const router = useRouter();
const route = useRoute();
const loading = ref(false);
const formRef = ref();
const form = reactive({ username: "", password: "" });
const rules = {
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
};

const onSubmit = () => {
  formRef.value?.validate(async (valid: boolean) => {
    if (!valid) return;
    loading.value = true;
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.code === 0) {
        auth.setAuth(data.data.token, data.data.user);
        const redirect = (route.query.redirect as string) || "/editor";
        router.replace(redirect);
      } else {
        ElMessage.error(data.message || "登录失败");
      }
    } catch (e) {
      ElMessage.error("网络错误");
    } finally {
      loading.value = false;
    }
  });
};
</script>
