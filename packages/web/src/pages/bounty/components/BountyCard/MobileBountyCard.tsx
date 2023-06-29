import { UTag } from '@comunion/components'
import { CalendarOutlined, StageOutlined } from '@comunion/icons'
import { pluralize } from 'inflected'
import { format } from 'timeago.js'
import { defineComponent, PropType, onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import StartupLogo from '@/components/StartupLogo'
import { BOUNTY_TYPES_COLOR_MAP } from '@/constants'
import { getBountyStatus } from '@/pages/bounty/util'
// import { services } from '@/services'
import { BountyListItem } from '@/types'
import { getChainInfoByChainId } from '@/utils/etherscan'

export default defineComponent({
  props: {
    info: {
      type: Object as PropType<BountyListItem>,
      required: true
    },
    miniCard: {
      type: Boolean
    }
  },
  setup(props, ctx) {
    const router = useRouter()
    const date = ref<string>()
    const theChainName = getChainInfoByChainId(props.info?.chain_id || 0)?.shortName

    onMounted(() => {
      date.value = format(new Date(Number(props.info.created_at)), 'comunionTimeAgo')
    })

    const statusText = computed(() => BOUNTY_TYPES_COLOR_MAP[getBountyStatus(props.info)].label)

    const handleCard = (bountyId: number) => async () => {
      router.push(`/bounty/${bountyId}`)
    }

    const skillTagShowLength = 4
    const skillTagsList = (props.info?.skills || []).slice(0, skillTagShowLength)

    return () => (
      <div
        class={
          'bg-white cursor-pointer mb-4 py-4 px-4 hover:bg-color-hover' +
          (props.miniCard ? '' : ' border border-color-border rounded-sm')
        }
        style="transition:background ease .3s"
        onClick={handleCard(props.info.id)}
      >
        <div class="flex mb-2 items-center">
          <StartupLogo src={props.info?.startup?.logo || ''} class="h-15 mr-4 w-15" />
          <div class="flex-1">
            <div class="flex mb-2 items-center">
              <div class="flex-1">
                <UTag class="text-color2">{statusText.value}</UTag>
              </div>
              <div class="text-primary">
                <span class="mr-0.5 u-num1 ">{props.info?.reward?.token1_amount}</span>
                <span class="align-middle u-h7">{props.info?.reward?.token1_symbol}</span>
                {Number(props.info?.reward?.token2_amount) > 0 && (
                  <>
                    <span class="mx-1 text-base ">+</span>
                    <span class="mr-0.5 u-num1 ">{props.info?.reward?.token2_amount}</span>
                    <span class="align-middle u-h7">{props.info?.reward?.token2_symbol}</span>
                  </>
                )}
              </div>
            </div>
            <div class="flex justify-end items-center">
              {theChainName && (
                <img
                  src={getChainInfoByChainId((props.info as { chain_id: number }).chain_id)?.logo}
                  class="h-4 mr-1 w-4"
                />
              )}
              <span>Deposit：</span>
              <span class="text-color1  truncate">
                <span class="mr-1 u-num2">{props.info.applicant_min_deposit}</span>
                <span class="u-h7">{props.info.deposit_contract_token_symbol}</span>
              </span>
            </div>
          </div>
        </div>
        <div class="mb-2 text-color1 truncate u-h4">{props.info.title}</div>
        {/* skill tags */}
        <div class="flex flex-wrap gap-2">
          {skillTagsList.map(
            (tag: {
              tag?: {
                id: number
                name: string
                type: number
              }
            }) => {
              return (
                <UTag key={tag?.tag?.id} class="text-color1">
                  {tag?.tag?.name}
                </UTag>
              )
            }
          )}
          {props.info?.skills && props.info.skills.length > skillTagShowLength && (
            <UTag class="text-color1">+{props.info.skills.length - skillTagShowLength}</UTag>
          )}
        </div>
        <div class="flex mt-2.5 text-color3 items-center u-h7">
          <div class="flex flex-1 items-center">
            {props.info.payment_mode === 1 ? (
              <StageOutlined class="h-4 w-4" />
            ) : (
              <CalendarOutlined class="h-4 w-4" />
            )}
            <span class="ml-2 ">{props.info.payment_mode === 1 ? 'Stage' : 'Period'}</span>
            <strong class="mx-2">·</strong>
            <span class="text-color3 ">Created {date.value}</span>
            <strong class=" mx-2">·</strong>
            <span class="text-color3">
              {props.info.applicant_deposit ?? 0}{' '}
              {props.info.applicant_deposit > 1 ? pluralize('Applicant') : 'Applicant'}
            </span>
          </div>
        </div>
        {ctx.slots.default?.()}
      </div>
    )
  }
})
