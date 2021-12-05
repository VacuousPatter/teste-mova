export const state = () => ({
  search: '',
  filterBy: '',
  formValid: false
})

export const mutations = {
  setSearch (state, val) {
    state.search = val
  },
  setFilterBy (state, val) {
    state.filterBy = val
  },
  setFormValid (state, val) {
    state.formValid = val
  }
}
