import { defineStore } from 'pinia'

const useLayout = defineStore('layout', {
  state: () => ({
    layout: 'DefaultLayout', // DefaultLayout | AdminLayout
  }),
  getters: {
    getLayout: (state) => state.layout,
  },
  actions: {
    updateLayout(layout: string) {
      console.log('updateLayout', layout);
      
      this.layout = layout
    },
    
  },
})

export default useLayout