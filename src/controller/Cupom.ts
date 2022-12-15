import { Vue, Component} from 'vue-property-decorator'
import NavigationBar from '@/components/NavigationBar.vue'
import MainContainer from '@/components/MainContainer.vue'

@Component({
  components: {
    NavigationBar,
    MainContainer
  }
})
export default class Cupom extends Vue{
  
}