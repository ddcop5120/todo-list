<template>
  <div class="mx-auto">
    <v-col cols="12" sm="6" md="3">
      <v-text-field
        label="準備要做的任務"
        solo
        v-model="newTodo"
        @keyup.enter="addTodo"
      ></v-text-field>
      <v-btn color="#F44336" @click="addTodo">搜索</v-btn>
    </v-col>
    <div v-for="(item, index) in todos" :key="index">{{ item.title }}</div>
    <data-table></data-table>
  </div>
</template>

<script>
//import Calendars from "@/components/Calendars.vue";
import DataTable from "@/components/DataTable.vue";

export default {
  components: {
    //Calendars,
    DataTable,
  },
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      let value = this.newTodo.trim();
      if (!value) {
        return;
      }
      let timestamp = Math.floor(Date.now());
      this.todos.push({ id: timestamp, title: value, completed: false });
      this.newTodo = "";
    },
  },
};
</script>