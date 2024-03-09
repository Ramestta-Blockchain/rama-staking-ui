
import tooltipd from '../icons/tooltipd.svg'
import tooltipl from '../icons/tooltipl.svg'
import cardarrow from '../icons/cardarrow.svg';


export const cardHome = [
    {
        CardTitle: 'TOTAL VALIDATORS',
        CardData: '105',
        TooltipForLight: tooltipl,
        TooltipForDark: tooltipd,
        
    },
    {
        CardTitle: 'Total Stake',
        CardData: '3,600,306,912 RAMA',
        CardSmall: '$0.00',
        TooltipForLight: tooltipl,
        TooltipForDark: tooltipd,
    },
    {
        CardTitle: 'Total Rewards Distributed',
        CardData: '896,701,310 RAMA',
        TooltipForLight: tooltipl,
        TooltipForDark: tooltipd,
    },
    {
        CardTitle: 'BOR BLOCK HEIGHT',
        CardData: '52,915,827',
        TooltipForLight: tooltipl,
        TooltipForDark: tooltipd,
        arrow:cardarrow,
        url:'/bor'
        
    },
    {
        CardTitle: 'HEIMDALL BLOCK HEIGHT',
        CardData: '17,368,093',
        TooltipForLight: tooltipl,
        TooltipForDark: tooltipd,
        arrow:cardarrow,
        url:'/heimdall'
    },
    {
        CardTitle: 'LAST CHECKPOINT',
        CardData: '57,112',
        CardSmall: '45 minutes ago',
        TooltipForLight: tooltipl,
        TooltipForDark: tooltipd,
        arrow:cardarrow,
        url:'/checkpoints'
    },
    {
        CardTitle: 'CHECKPOINT INTERVAL',
        CardData: '22 Minutes',
        TooltipForLight: tooltipl,
        TooltipForDark: tooltipd,
    },
    {
        CardTitle: 'PERFORMANCE BENCHMARK',
        CardData: '94.73',
        TooltipForLight: tooltipl,
        TooltipForDark: tooltipd,
    },

]

