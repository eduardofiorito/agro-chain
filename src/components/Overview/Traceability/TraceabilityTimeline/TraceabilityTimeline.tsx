import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'

import { formatDate, formatDayMonthAbbr, formatTime } from '@/utils/dataUtils'
import clsx from 'clsx'

function TraceabilityTimeline({ data }: DynamicTimelineProps) {
  return (
    <Timeline
      sx={{
        '& .MuiTimelineItem-root': { '&::before': { display: 'none' } },
      }}
      className="px-4 py-0"
    >
      {data.map((category, index) => (
        <div key={index}>
          <h4 className="mb-8 text-base text-neutral-400">
            {category.category}
          </h4>
          {category.records.map((record, idx) => (
            <TimelineItem key={idx}>
              <TimelineSeparator>
                <div
                  className={clsx(
                    record.success ? 'bg-primary-500' : 'bg-neutral-400',
                    'center flex h-32 w-32 items-center rounded-8 text-center text-xs font-semibold leading-none text-black-300',
                  )}
                >
                  {formatDayMonthAbbr(record.timestamp)}
                </div>
                {idx < category.records.length - 1 && (
                  <TimelineConnector className="border border-black-700" />
                )}
              </TimelineSeparator>
              <TimelineContent>
                <p className="text-base text-neutral-400">
                  {`${record.name} - ${formatDate(record.timestamp)} às ${formatTime(record.timestamp)}h`}
                </p>
                <ul>
                  <li className="list-inside list-disc text-xs text-neutral-400">
                    {record.details}
                  </li>
                  <li className="list-inside list-disc text-xs text-neutral-400">
                    Registrado por: {record.recordedBy}
                  </li>
                </ul>
              </TimelineContent>
            </TimelineItem>
          ))}
        </div>
      ))}
    </Timeline>
  )
}

export default TraceabilityTimeline
