<script setup>
import { reactive } from "vue";
import { useAuthStore } from "@/stores/auth";
import axios from "axios";

const auth = useAuthStore();

const state = reactive({
  id: "",
  password: "",
  layout: false,
});

function Login() {
  console.log("로그인함수");
  axios
    .get("api/auth/test")
    .then((response) => console.log(response))
    .catch((error) =>
      console.log("[LoginComp.vue] Login() axios error -> " + error)
    );
}
</script>

<template>
  <q-page class="window-height window-width row justify-center items-center">
    <div class="justify-center items-center q-pa-md">
      <div class="q-gutter-y-md column" style="width: 250px">
        <q-form @submit="Login" class="loginForm q-gutter-sm">
          <q-input
            bg-color="white"
            outlined
            v-model="state.id"
            type="text"
            label="id"
            :rules="[(val) => !!val || 'Field is required']"
          >
            <template v-slot:prepend>
              <q-icon name="account_circle" />
            </template>
          </q-input>
          <q-input
            bg-color="white"
            outlined
            v-model="state.password"
            type="password"
            label="password"
            :rules="[(val) => !!val || 'Field is required']"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>
          <div class="row">
            <q-btn
              type="submit"
              color="primary"
              glossy
              class="full-width"
              label="Login"
            />
          </div>
          <div class="row">
            <q-btn
              color="secondary"
              glossy
              class="full-width"
              label="Join"
              @click="state.layout = true"
            />
          </div>
        </q-form>
      </div>
      <q-dialog persistent v-model="state.layout">
        <!-- 회원가입 join form 만들 예정 -->
      </q-dialog>
    </div>
  </q-page>
</template>

<style>
.loginForm .q-field__bottom {
  display: none !important;
}
.loginForm .q-field--with-bottm {
  padding-bottom: 5px;
}
</style>
