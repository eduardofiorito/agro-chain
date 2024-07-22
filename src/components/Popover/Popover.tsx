'use client'

import * as Popover from '@radix-ui/react-popover'
import { BarChart4, BadgeCheck, ChevronDown } from 'lucide-react'
import Link from 'next/link'
import Card from '../Card'
import React from 'react'

function PopoverMenu() {
  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className="flex cursor-pointer items-center justify-center text-sm uppercase"
          aria-label="Menu"
        >
          Soluções
          <ChevronDown />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="focus:shadow-outline rounded-16 w-[360px] border border-black-300 bg-black-500 p-16 shadow-black-300 will-change-transform"
          sideOffset={5}
        >
          <div className="grid grid-cols-2 gap-4">
            <Card>
              <Link
                href="/certifications-and-sustainability"
                className="flex h-full flex-col items-center justify-center gap-8 p-16 text-neutral-100 hover:bg-black-600"
              >
                <BadgeCheck />
                <p className="text-center">
                  Sustentabilidade <span>Certificações</span>
                </p>
              </Link>
            </Card>

            <Card>
              <Link
                href="/monitoring"
                className="flex h-full flex-col items-center justify-center gap-8 p-16 text-neutral-100 hover:bg-black-600"
              >
                <BarChart4 />
                Monitoramento
              </Link>
            </Card>

            <Card>
              <a
                href="#solution"
                className="flex h-full flex-col items-center justify-center gap-8 p-16 text-neutral-100 hover:bg-black-600"
              >
                <BadgeCheck />
                <p className="text-center">Solução</p>
              </a>
            </Card>

            <Card>
              <a
                href="#test"
                className="flex h-full flex-col items-center justify-center gap-8 p-16 text-neutral-100 hover:bg-black-600"
              >
                <BadgeCheck />
                <p className="text-center">Demonstração</p>
              </a>
            </Card>
          </div>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default PopoverMenu
