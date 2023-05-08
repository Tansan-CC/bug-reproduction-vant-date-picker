<script setup lang="ts">
import { ref } from "vue";
import { computed } from "vue";
import dayjs from "dayjs";

const date = ref(dayjs());

const dateComputer = computed({
  get() {
    return date.value.format("YYYY-MM").split("-");
  },
  set(val) {
    date.value = dayjs(val.join("-"));
  },
});

const minDate = dayjs().toDate();

const maxDate = dayjs().add(1, "year").toDate();

function lastMonth() {
  date.value = date.value.subtract(1, "month");
}

function nextMonth() {
  date.value = date.value.add(1, "month");
}
</script>

<template>
  <div class="controller">
    <van-button type="primary" @click="lastMonth">Last month</van-button>
    <van-button type="primary" @click="nextMonth">Next month</van-button>
  </div>
  <van-date-picker
    v-model="dateComputer"
    :columns-type="['year', 'month']"
    :min-date="minDate"
    :max-date="maxDate"
  />
</template>

<style scoped>
.controller {
  display: flex;
  justify-content: space-between;
}
</style>
