<template>
  <div>
    <data-table></data-table>
  </div>
</template>

<script>
import DataTable from "@/components/DataTable.vue";
export default {
  components: { DataTable },
  props: ["data"],
  data() {
    return {
      singleSelect: false,
      selected: [],
      headers: [
        {
          text: "待辦內容",
          align: "start",
          sortable: false,
          value: "content",
        },
        { text: "起始時間", value: "start" },
        { text: "截止時間", value: "end" },
      ],
      desserts: [
        {
          id: "1",
          content: "開會",
          start: "09/22",
          end: "09/23",
          completed: false,
        },
        {
          id: "2",
          content: "吃飯",
          start: "09/23",
          end: "09/24",
          completed: false,
        },
        {
          id: "3",
          content: "去給狗幹",
          start: "09/21",
          end: "09/24",
          completed: false,
        },
      ],
    };
  },
};
</script>


