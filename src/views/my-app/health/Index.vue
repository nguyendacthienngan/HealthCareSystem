<template>
  
  <div>
    <CRow>
      <CCol col="9">
        <CRow>
          <CCol sm="12" lg="4">
            <CWidgetDropdown color="primary" header="112 mg/dl" text="Avg glucose levels">
              <template #default>
                <CDropdown
                  color="transparent p-0"
                  placement="bottom-end"
                >
                  <template #toggler-content>
                    <CIcon name="cil-settings"/>
                  </template>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdown>
              </template>
              <template #footer>
                <CChartLineSimple
                  pointed
                  class="mt-3 mx-3"
                  style="height:70px"
                  :data-points="[65, 59, 84, 84, 51, 55, 40]"
                  point-hover-background-color="primary"
                  label="Members"
                  labels="months"
                />
              </template>
            </CWidgetDropdown>
          </CCol>
          <CCol sm="12" lg="4">
            <CWidgetDropdown color="info" header="140 mg" text="Avg dietary chloesterol">
              <template #default>
                <CDropdown
                  color="transparent p-0"
                  placement="bottom-end"
                  :caret="false"
                >
                  <template #toggler-content>
                    <CIcon name="cil-location-pin"/>
                  </template>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdown>
              </template>
              <template #footer>
                <CChartLineSimple
                  pointed
                  class="mt-3 mx-3"
                  style="height:70px"
                  :data-points="[1, 18, 9, 17, 34, 22, 11]"
                  point-hover-background-color="info"
                  :options="{ elements: { line: { tension: 0.00001 }}}"
                  label="Members"
                  labels="months"
                />
              </template>
            </CWidgetDropdown>
          </CCol>
          <CCol sm="12" lg="4">
            <CWidgetDropdown
              color="warning"
              header="136 lbs"
              text="Avg body wieght"
            >
              <template #default>
                <CDropdown
                  color="transparent p-0"
                  placement="bottom-end"
                >
                  <template #toggler-content>
                    <CIcon name="cil-settings"/>
                  </template>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here...</CDropdownItem>
                  <CDropdownItem disabled>Disabled action</CDropdownItem>
                </CDropdown>
              </template>
              <template #footer>
                <CChartLineSimple
                  class="mt-3"
                  style="height:70px"
                  background-color="rgba(255,255,255,.2)"
                  :data-points="[78, 81, 80, 45, 34, 12, 40]"
                  :options="{ elements: { line: { borderWidth: 2.5 }}}"
                  point-hover-background-color="warning"
                  label="Members"
                  labels="months"
                />
              </template>
            </CWidgetDropdown>
          </CCol>
        </CRow>
        <CCard>
          <CCardHeader>
            <h4>Xu hướng</h4>
            <p>Lượng calories tỏng thời gian qua</p>
          </CCardHeader>
          <CCardBody><CChartBarSimple background-color="danger"/></CCardBody>        
        </CCard>
      </CCol>
      <CCol col="3">
        <CCard>
            <CCardBody>
              <img src="../../../assets/icons/avatar.jpg" width="50px" height="50px"/>
              <h3>Thiên Ngân</h3>
              <br>
              <CRow>
                <CCol>
                  <h5>Type 1</h5>
                  <p>Diabetes</p>
                </CCol>
                <CCol>
                  <h5><strong>High risk</strong></h5>
                  <p>Risk</p>
                </CCol>
              </CRow>
              <hr>
              <h5><strong>Info</strong></h5>
              <CRow>
                <CCol><p>Gender</p></CCol>
                <CCol><strong>Male</strong></CCol>
              </CRow>
              <CRow>
                <CCol><p>Age</p></CCol>
                <CCol><strong>58</strong></CCol>
              </CRow>
              <CRow>
                <CCol><p>Height</p></CCol>
                <CCol><strong>1m58</strong></CCol>
              </CRow>
              <hr>
              <h5><strong>Allergies</strong></h5>
              <CRow>
                <CCol><p>Penicillin</p></CCol>
                <CCol><strong>High</strong></CCol>
              </CRow>
              <CRow>
                <CCol><p>Tilorane</p></CCol>
                <CCol><strong>Medium</strong></CCol>
              </CRow>
            </CCardBody>
            <CCardFooter>
              <h5><strong>Notes</strong></h5>
              <p>Knee pain, headache, not feeling good in the last call</p>
            </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
  </div>
  
</template>

<script>
import { CChartLineSimple, CChartBarSimple } from '../../charts/index.js'

export default {
  name: 'WidgetsDropdown',
  components: { CChartLineSimple, CChartBarSimple }
}
</script>
