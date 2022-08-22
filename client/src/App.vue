<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import LoginComp from "@/components/LoginComp.vue";
import { useAuthStore } from "@/stores/auth";
import { useQuasar } from "quasar";

const auth = useAuthStore();
</script>

<template>
  <q-layout v-if="auth.isLogin == false">
    <q-page class="window-height window-width row justify-center items-center">
      <login-comp />
    </q-page>
  </q-layout>
  <q-layout v-else-if="auth.isLogin == true">
    <q-page-container>
      <RouterView />
    </q-page-container>
  </q-layout>
</template>

<style scoped></style>
