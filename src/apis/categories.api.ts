import http from "@/utils/http";

export const categoriesApi = {
  getCategories: () => {
    return http.get("/categories");
  },
};
