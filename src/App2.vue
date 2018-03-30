<template>
  <div id="app">    
    <top-nav-bar></top-nav-bar>

    <h1>Hello! {{testName}}</h1>
    <div>
      <input type="number" v-model="id" />
      <input type="text" v-model="idTrigger" />
      <p>Name: {{user.name}}</p>
      <p>Email: {{user.email}}</p>
      <p>Id: {{user.id}}</p>
    </div>

    <input type="checkbox" v-model="nugget.checked">
    <span>Am I checked? {{nugget.checked ? 'Yes' : 'No' }}</span>

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
                  <input class="form-control" v-model="missionFilter" style="width:8em;" type="text" placeholder="Filter">
                </span>
              </a>
            </li>
            <li class="nav-item" v-for="link in links" v-bind:key="link">
              <router-link class="nav-link" :class="{active:selectedMissionID === link}" v-if="matchesFilter(link)" :to="{path: '/mission/' + link}">{{link}}</router-link>
            </li>
            <li class="nav-item" v-for="i in 80" v-bind:key="i">
              <router-link class="nav-link" :class="{active:selectedMissionID === i}" v-if="matchesFilter('The Link' + i)" :to="{path: '/mission/' + i}">The Link-{{i}}</router-link>
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
import {Component, Prop, Model, Watch} from 'vue-property-decorator';
import TopNavBar from './components/TopNavBar.vue';
import $ from 'jquery';
import axios from 'axios';

@Component({
    components: {TopNavBar}
})
export default class App2 extends Vue {
  
  links: String[] = ['One', 'Two Is Longer', 'Three is the most long'];      
  missionFilter: String = '';
  newMissionName: String = 'wanker';
  id: String = '';
  idTrigger: String = '';
  user: Object = {};
  nugget: Object = {checked: false};
  selectedMissionID: Number = 1;

  mounted(){
    $(this.$refs.createMissionModal).on('shown.bs.modal', () => {   
      // clear previous values  
      this.newMissionName = '';
      $('#missionNameModal', this.$refs.createMissionModal).focus();
    });
  }

  // beforeUpdate(){
  //   console.log('bart beforeUpdate invoked');
  // }

  // updated(){
  //   console.log('bart updated invoked');
  // }

  missionsDropDownClicked(event: any){
    event.preventDefault();
    return false;
  }

  matchesFilter(linkName: String){
    return this.missionFilter === "" ||
            linkName.toUpperCase().indexOf(this.missionFilter.toUpperCase()) !== -1;
  }

  onSubmitCreateMission(){
    console.log('create the mission ', this.newMissionName);
    $(this.$refs.createMissionModal).modal('hide');
  }


  get testName() : String{
    return this.missionFilter.split('').reverse().join('');
  }

  @Watch('idTrigger')
  onIDChanged(newID: String, oldID: String){
    console.log(`id changed [${oldID}, ${newID}]`);
    this._fetchUser();
  }

  _fetchUser(){
    axios.get(`https://jsonplaceholder.typicode.com/users/${this.id}`).then(res => {
      this.user = res.data;
    });
  }
};
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
