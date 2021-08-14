<template>
  <div>
    <CRow>
      <CCol sm="6">
        <CCard>
          <CCardHeader>
            <strong>Credit Card </strong> <small>Form</small>
            <div class="card-header-actions">
              <a 
                href="https://coreui.io/vue/docs/components/form-components" 
                class="card-header-action" 
                rel="noreferrer noopener" 
                target="_blank"
              >
                <small class="text-muted">docs</small>
              </a>
            </div>
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="12">
                <CInput
                  label="Name"
                  placeholder="Enter your name"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="12">
                <CInput
                  label="Credit Card Number"
                  placeholder="0000 0000 0000 0000"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol sm="4">
                <CSelect
                  label="Month"
                  :options="[1,2,3,4,5,6,7,8,9,10,11,12]"
                />
              </CCol>
              <CCol sm="4">
                <CSelect
                  label="Year"
                  :options="[2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025]"
                />
              </CCol>
              <CCol sm="4">
                <CInput
                  label="CVV/CVC"
                  placeholder="123"
                />
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol sm="6">
        <CCard>
          <CCardHeader>
            <strong>Company </strong><small>Form</small>
          </CCardHeader>
          <CCardBody>
            <CInput
              label="Company"
              placeholder="Enter your company name"
            />
            <CInput
              label="VAT"
              placeholder="PL1234567890"
            />
            <CInput
              label="Street"
              placeholder="Enter street name"
            />
            <CRow>
              <CCol sm="8">
                <CInput
                  label="City"
                  placeholder="Enter your city"
                />
              </CCol>
              <CCol sm="4">
                <CInput
                  label="Postal code"
                  placeholder="Postal code"
                />
              </CCol>
            </CRow>
            <CInput
              label="Country"
              placeholder="Country name"
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    
  </div>
</template>

<script>
export default {
  name: 'Forms',
  data () {
    return {
      selected: [], // Must be an array reference!
      show: true,
      horizontal: { label:'col-3', input:'col-9' },
      options: ['Option 1', 'Option 2', 'Option 3'],
      selectOptions: [
        'Option 1', 'Option 2', 'Option 3',
        { 
          value: 'some value', 
          label: 'Selected option'
        }
      ],
      selectedOption: 'some value',

      formCollapsed: true,
      checkboxNames: ['Checkboxes', 'Inline Checkboxes',
                      'Checkboxes - custom', 'Inline Checkboxes - custom'],
      radioNames: ['Radios', 'Inline Radios',
                    'Radios - custom', 'Inline Radios - custom']
    }
  },
  methods: {
    validator (val) {
      return val ? val.length >= 4 : false
    }
  }
}
</script>
