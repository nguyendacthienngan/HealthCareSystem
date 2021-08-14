<template>
  <CRow class="d-flex justify-content-center">
    <CCol col="12" lg="6" class="">
      <CCard>
        <CCardHeader>
          <div class="">
            <a href="#/doctors">
              <CIcon :content="$options.freeSet.cilArrowLeft" /> 
            </a>
            <h4 class="text-center">Thông tin của {{this.username}}</h4>
          </div>
         
        </CCardHeader>
        <CCardBody>
          <CDataTable
            striped
            small
            fixed
            :items="visibleData"
            :fields="fields"
          />
        </CCardBody>
        <CCardFooter>
         
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import { freeSet } from '@coreui/icons'

import usersData from './Data'
export default {
  name: 'User',
  freeSet,
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.usersOpened = from.fullPath.includes('users')
    })
  },
  data () {
    return {
      usersOpened: null
    }
  },
  computed: {
    fields () {
      return [
        { key: 'key', label: this.username, _style: 'width:150px'},
        { key: 'value', label: '', _style: 'width:150px;' }
      ]
    },
    userData () {
      const id = this.$route.params.id
      const user = usersData.find((user, index) => index + 1 == id)
      const userDetails = user ? Object.entries(user) : [['id', 'Not found']]
      return userDetails.map(([key, value]) => { return { key, value } })
    },
    visibleData () {
      return this.userData.filter(param => param.key !== 'username')
    },
    username () {
      return this.userData.filter(param => param.key === 'username')[0].value
    }
  },
  methods: {
    goBack() {
      this.usersOpened ? this.$router.go(-1) : this.$router.push({path: '/doctors'})
    }
  }
}
</script>

<style >
  .container-fluid{
    /* text-align: center !important; */
  }
</style>
