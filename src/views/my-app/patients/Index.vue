<template>
  <div>
    <CRow>
      <CCol col="12" xl="12">
        <CCard>
          <CCardHeader class="">
            <div class="card-header-actions p-3 ">
                <CButton type="submit" size="sm" color="primary" class="" href="#/patients/create">
                  <CIcon :content="$options.freeSet.cilPlus"/> 
                  Create
                </CButton>
            </div>
            <h4 class="p-3 text-center">Danh sách bác sĩ</h4>
           
          </CCardHeader>
          <CCardBody>
            <CDataTable
              hover
              striped
              :items="items"
              :fields="fields"
              :items-per-page="5"
              clickable-rows
              :active-page="activePage"
              @row-clicked="rowClicked"
              :pagination="{ doubleArrows: false, align: 'center'}"
              @page-change="pageChange"
            >
              <template #status="data">
                <td>
                  <CBadge :color="getBadge(data.item.status)">
                    {{data.item.status}}
                  </CBadge>
                </td>
              </template>
            </CDataTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import { freeSet } from '@coreui/icons'

import usersData from './Data'
export default {
  name: 'Users',
  freeSet,
  data () {
    return {
      items: usersData,
      fields: [
        { key: 'username', label: 'Name', _classes: 'font-weight-bold' },
        { key: 'registered' },
        { key: 'role' },
        { key: 'status' }
      ],
      activePage: 1
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler (route) {
        if (route.query && route.query.page) {
          this.activePage = Number(route.query.page)
        }
      }
    }
  },
  methods: {
    getBadge (status) {
      switch (status) {
        case 'Active': return 'success'
        case 'Inactive': return 'secondary'
        case 'Pending': return 'warning'
        case 'Banned': return 'danger'
        default: 'primary'
      }
    },
    rowClicked (item, index) {
      this.$router.push({path: `patients/${index + 1}`})
    },
    pageChange (val) {
      this.$router.push({ query: { page: val }})
    }
  }
}
</script>
