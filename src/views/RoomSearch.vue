<template>
  <div class="about">
    <h1>This is an Room search page</h1>
    <ul>
      <li v-for="room in rooms" :key="room.id">
        {{`Room: ${room.number} - Hotel: ${room.hotel.name}`}}
      </li>
    </ul>
  </div>
</template>

<script>
const baseApiUrl = 'http://localhost:8000/api';

export default {
  name: 'RoomSearch',
  data: () => ({
    rooms: []
  }),
  methods: {
    async getAllRooms() {
      try {
        const response = await this.axios.get(`${baseApiUrl}/rooms`);
        this.rooms = response.data;
      }catch(e){
        console.error(e);
      }
    }
  },
  created(){
    this.getAllRooms();
  }
}
</script>