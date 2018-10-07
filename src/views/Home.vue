<template>
  <div class="main">
    <form name="generateCal" id="generateCal">
      <div id="dateSelector">
        <label for="startDate">Select start date</label>
        <input type="date" name="startDate" id="startDate">
      </div>
      <div id="generateBtn">
        <input type="submit" value="Generate Calendar" id="generateBtn">
      </div>
    </form>
    <Calendar />
  </div>
</template>

<script>
// @ is an alias to /src
import Calendar from '@/components/calendar.vue'

export default {
  name: 'home',
  components: {
    Calendar
  }
}
</script>
