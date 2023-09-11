import { defineComponent } from 'vue'
import { useRouter,useRoute } from 'vue-router'
import { landingRoute } from '@/hooks'

const LandingPage = defineComponent({
  name: 'LandingPage',
  setup() {
    const router = useRouter()
    router.replace(landingRoute)
    const route = useRoute()
    return () => null
  }
})

export default LandingPage
