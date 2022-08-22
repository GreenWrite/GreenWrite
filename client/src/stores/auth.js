import { defineStore } from "pinia";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: JSON.parse(localStorage.getItem("user")),
    isLogin: false,
    reissue: false,
  }),
  actions: {
    login(data, onSuccess, onError) {
      axios
        .post("/api/auth/login", data)
        .then((response) => {
          if (response.data.result.length > 0) {
            const user = response.data.result[0];
            localStorage.setItem("user", JSON.stringify(user));
            if (user != null) {
              this.isLogin = true;
            } else {
              this.isLogin = false;
            }
            onSuccess(response);
          }
        })
        .catch((error) => {
          onError(error);
        });
    },
  },
});
