<template>
<nav class="navbar navbar-expand-sm navbar-light">
  <a class="navbar-brand" href="#">Project</a>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsableNavBar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>     

  <div class="collapse navbar-collapse" id="collapsableNavBar">
    <ul class="navbar-nav mr-auto">                   
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          My Org
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Happy Dentist</a>
          <a class="dropdown-item" href="#">IT Helpers</a>                
        </div>
      </li>
      <li class="nav-item active">
        <router-link class="nav-link" to="/mission/">Missions</router-link>
        <!-- <a class="nav-link" href="#">Missions</a> -->
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Agents</a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="#">History</a>
        </li>                
    </ul>

    <ul class="navbar-nav">   
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="settingsDropDown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img class="navbar-icon" width="18" height="18" src="../assets/open-iconic-master/svg/cog.svg" alt="Settings" title="Settings"/>
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="settingsDropDown">
          <a class="dropdown-item" href="#">Team</a>
          <a class="dropdown-item" href="#">History</a>
          <a class="dropdown-item" href="#">API Access</a>
        </div>
      </li>
      
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="userDropDown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img width="18" height="18" src="../assets/open-iconic-master/svg/person.svg" alt="Settings" title="User Settings"/>
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropDown">
          <h6 class="dropdown-header">Signed in as {{loginEmail}}</h6>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Your Profile</a>
          <a class="dropdown-item" href="#">Audit</a>
          <router-link class="dropdown-item" to="/logout">Logout</router-link>              
        </div>
      </li>
    </ul>
  </div> 
</nav>
</template>

<script lang="ts">
import Vue from 'vue'

export default class TopNavBar extends Vue {
  get loginEmail(){
    return 'awesome';// this.$store.state.login.email;
  }
}
</script>