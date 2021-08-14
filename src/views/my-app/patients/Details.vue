<template>
  <CRow class="d-flex justify-content-center">
    <CCol col="12" lg="10" class="">
      <CCard>
        <CCardHeader class="">
          <div class="row">
            <a href="#/patients" class="col-4">
              <CIcon :content="$options.freeSet.cilArrowLeft" /> 
            </a>
            <h4 class="text-center col-4 "><small>Thông tin của</small>  <br> {{this.username}}</h4>
              <div class="card-header-actions p-3 float-right col-4 justify-content-end row">
                <CButton type="submit" size="sm" color="danger" class="" href="#/patients/create">
                    <CIcon :content="$options.freeSet.cilTrash"/> 
                    Delete
                  </CButton>
                  <span style="color:transparent">aaa</span>
                  <CButton type="submit" size="sm" color="success" class="" href="#/patients/create">
                    <CIcon :content="$options.freeSet.cilPencil"/> 
                    Edit
                  </CButton>
              </div>  
          </div>
        </CCardHeader>
        <CCardBody>
          <CDataTable
            striped
            small
            fixed
            :items="visibleData"
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
