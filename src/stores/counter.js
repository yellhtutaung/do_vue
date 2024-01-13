import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const countNo = ref(0);

const increseCounter = () =>
{
  countNo.value++
  console.log(countNo.value)
  return countNo.value;
}

export {increseCounter, countNo}