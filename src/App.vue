<template>
  <div id="app">    
    <top-nav-bar></top-nav-bar>

    <div class="container-fluid">
      <div class="d-flex d-block d-sm-none">
        <a class="nav-link dropdown-toggle p-0" v-on:click="missionsDropDownClicked" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Missions</a>        
        <div class="dropdown-menu">
        </div>
      </div>

      <div class="row m-0">
        <div class="col-auto p-0 d-none d-sm-block child">
          <ul class="nav nav-pills flex-column align-items-start">
            <li class="nav-item w-100">
              <div class="d-flex justify-content-start">
                <div class="nav-link">Missions</div>
                <button class="btn kiki-sm-button ml-3 mt-2" data-toggle="modal" data-target="#createMissionModal" type="button" title="Create a new Mission">+</button>                               
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-item">
                <span class="nav-link">
                  <input class="form-control" v-model="missionFilter" style="width:8em;" type="text" id="formGroupExampleInput" placeholder="Filter">
                </span>
              </a>
            </li>
            <li class="nav-item" v-for="link in links">              
              <!-- <a class="nav-link" v-if="matchesFilter(link)" href="#">{{link}}</a> -->
              <router-link class="nav-link" :to="{path: '/mission/' + link}">{{link}}</router-link>
            </li>
            <li class="nav-item" v-for="i in 80">
              <!-- <a v-if="i === 1" class="nav-link active" href="#">The Link {{i}}</a> -->
              <!-- <a class="nav-link" v-if="matchesFilter('The Link' + i)" href="#">The Link {{i}}</a> -->
              <router-link class="nav-link" :to="{path: '/mission/' + i}">The Link-{{i}}</router-link>
            </li>
          </ul>
        </div>
        <div class="col child"> 
          <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
          </div>
          <router-view/>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="createMissionModal" ref="createMissionModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Create Mission</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form v-on:submit="onSubmitCreateMission">
              <div class="form-group">
                <label for="mission-name" class="col-form-label text-align-left">MissionName:</label>
                <input type="text" class="form-control" id="missionNameModal" v-model="newMissionName">
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-primary">Create Mission</button>
              </div>
            </form>
          </div>          
        </div>
      </div>
    </div>
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TopNavBar from './components/TopNavBar.vue';
import $ from 'jquery';

export default Vue.extend({
  name: 'App',
  components: {TopNavBar},
  data: function(){
    return {
      links: ['One', 'Two Is Longer', 'Three is the most long'],
      missionFilter: '',
      newMissionName: 'wanker'
    }
  },

  methods: {
    missionsDropDownClicked: function(event: any){
      event.preventDefault();
      return false;
    },

    matchesFilter: function(linkName: String){
      return this.missionFilter === "" ||
             linkName.toUpperCase().indexOf(this.missionFilter.toUpperCase()) !== -1;
    },

    onSubmitCreateMission: function(){
      console.log('create the mission ', this.newMissionName);
      $(this.$refs.createMissionModal).modal('hide');
    },

    fancyNugget: function(){
      console.log('fancy nugget made');
    }
  },

  mounted(){    
    $(this.$refs.createMissionModal).on('shown.bs.modal', () => {   
      // clear previous values  
      this.newMissionName = '';
      $('#missionNameModal', this.$refs.createMissionModal).focus();
    });
  }
});
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
