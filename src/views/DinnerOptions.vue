<template>
  <div class="main">
    <!-- <h1>this is the menu page</h1> -->
      <div class="dinnerMenu">
      <div id="itemAddForm">
        <form @submit.prevent="getNewMenuItem" id="addItem">
          <label for="addSingle">Add item to list</label><br>
          <input type="text" placeholder="Add a menu item to list" name="addSingle" id="newItem">
          <input type="submit" value="Add" id="submitItem">
        </form>
        <br><br><br>
        
        <form @submit.prevent="getNewMenuList" id="addItems">
          <label for="addFile">Add multiple items from file. *.csv or *.txt <br>
            Items separated by "commas" or "line-breaks".
          </label><br>
          <input type="file" name="addFile" id="addFile">
          <input type="submit" value="Add List" id="submitList">
        </form><br><br><br>

        <form @submit.prevent="renderMenuList" id="testForm">
          <input type="submit" value="testBtn" id="submitBtn">
        </form>
      </div>

      <div id="itemList">
        <ul id="menuList"></ul>
      </div>
    </div>

  </div>
</template>

<script>
import { getNewMenuList, getNewMenuItem } from './../js/dinnerOptions.js'
import { renderMenuList } from './../js/localDbInteract.js'

export default {
  name: 'DinnerOptions',
  methods: {
    getNewMenuList,
    getNewMenuItem,
    renderMenuList
  }
}

</script>
