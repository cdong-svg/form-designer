<template>
  <el-container style="height: 100vh">
    <el-header>
      <div
        style="
          display: flex;
          align-items: center;
          justify-content: space-between;
        "
      >
        <div>表单编辑器</div>
        <div>
          <el-button
            v-if="auth.isAuthenticated"
            type="primary"
            text
            @click="onLogout"
            >退出登录</el-button
          >
        </div>
      </div>
    </el-header>
    <el-main>
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import { useAuthStore } from "@/store/auth";
import { useRouter } from "vue-router";
const auth = useAuthStore();
const router = useRouter();
const onLogout = () => {
  auth.logout();
  router.replace("/login");
};
</script>
