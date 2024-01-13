<script setup>
  import Button from 'primevue/button';
  import Card from 'primevue/card';
  import {increseCounter, countNo} from './stores/counter';
</script>

<template>
  <div class="flex items-center flex-col justify-center">
    <div class="card p-5 w-28 m-auto bg-white shadow-lg">
      <h1 class="text-center">{{countNo}}</h1>
      <div class="flex justify-around ">
        <Button icon="pi pi-minus" severity="danger" rounded aria-label="Search" />
        <div class="mx-2"></div>
        <Button @click="increseCounter()" icon="pi pi-plus" severity="success" rounded aria-label="Search" />
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style>
  body
  {
      background: black!important;
  }
  
</style>