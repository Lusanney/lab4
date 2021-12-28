<template>
  <div class="about">
    <h1>This is an hotel search page</h1>
    <ul>
      <li v-for="hotel in hotels" :key="hotel.id">
        {{`Hotel: ${hotel.name}`}}
      </li>
    </ul>
  </div>
</template>

<script>
const baseApiUrl = 'http://localhost:8000/api';

export default {
  name: 'HotelSearch',
  data: () => ({
    hotels: []
  }),
  methods: {
    async getAllHotels() {
      try {
        const response = await this.axios.get(`${baseApiUrl}/hotels`);
        this.hotels = response.data;
      }catch(e){
        console.error(e);
      }
    }
  },
  created(){
    this.getAllHotels();
  }
}
</script>