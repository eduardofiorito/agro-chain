import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'
import clsx from 'clsx'
import { formatDate, formatTime } from '@/utils/dataUtils'
import { CheckCircle2, AlertTriangle, Clock } from 'lucide-react'
import { STAGES } from './Timeline.mock'

function CustomizedTimeline() {
  return (
    <Timeline
      sx={{
        '& .MuiTimelineItem-root': { '&::before': { display: 'none' } },
      }}
      className="px-4 py-0"
    >
      {STAGES.map((stage, index) => (
        <TimelineItem key={index}>
          <TimelineSeparator>
            <TimelineDot
              className={clsx(
                stage.completed ? 'bg-primary-500' : 'bg-neutral-400',
                'flex-items center h-20 w-20',
              )}
            ></TimelineDot>
            {index < STAGES.length - 1 && (
              <TimelineConnector className="border border-black-700" />
            )}
          </TimelineSeparator>
          <TimelineContent>
            <h4 className="text-sm font-medium text-neutral-400">
              {stage.title}
            </h4>
            <ul className="mt-8 flex flex-col gap-4">
              {stage.events.map((event, index) => (
                <li key={index} className="flex items-center gap-8">
                  {event.success === true && (
                    <CheckCircle2
                      className="min-w-[14px] text-success-500"
                      height={14}
                      width={14}
                      aria-hidden
                    />
                  )}
                  {event.success === false && (
                    <AlertTriangle
                      className="min-w-[14px] text-error-500"
                      height={14}
                      width={14}
                      aria-hidden
                    />
                  )}
                  {event.success === null && (
                    <Clock
                      className="min-w-[14px] text-neutral-500"
                      height={14}
                      width={14}
                      aria-hidden
                    />
                  )}
                  <p className="text-sm text-neutral-500">{`${event.name} - ${formatDate(event.timestamp)} às ${formatTime(event.timestamp)}`}</p>
                </li>
              ))}
            </ul>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

export default CustomizedTimeline
