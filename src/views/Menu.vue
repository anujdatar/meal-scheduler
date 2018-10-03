<template>
  <div class="menu">
    <div id="add-item">
      Add item to list
      <form @submit.prevent="addItem">
        <input type="text" placeholder="Add a menu item to list" name="addSingle">
        <input type="submit" value="Add" id="submit">
      </form>
      <br><br>
      Add multiple items from file. *.csv or *.txt
      <form @submit.prevent="addItems">
        <input type="file" name="addFile" id="addFile">
      </form>
    </div>
  </div>
</template>
