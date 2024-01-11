<script setup>
  import Button from 'primevue/button';
  import Card from 'primevue/card';

</script>

<template>
  <div class="flex align-items-center justify-content-center">
    <div class="card">
      <Card style="width: 25em">
        <template #title class="text-center"> Advanced Card </template>

        <template #footer>
          <Button icon="pi pi-plus" severity="success" rounded aria-label="Bookmark" />
        </template>
      </Card>
      <h1>56</h1>
    </div>


  </div>
</template>

<style>
  body
  {
      background: black!important;
  }
  h1{
      font-size: 100px;
      color: white;
  }
</style>