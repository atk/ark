import { normalizeProps, useMachine } from '@zag-js/solid'
import { connect, Context, machine } from '@zag-js/splitter'
import { createMemo, createUniqueId, mergeProps } from 'solid-js'
import { useEnvironmentContext } from '../environment'
import type { Optional } from '../types'

export type UseSplitterProps = Optional<Context, 'id'>
export type UseSplitterReturn = ReturnType<typeof useSplitter>

export const useSplitter = (props: UseSplitterProps) => {
  const getRootNode = useEnvironmentContext()
  const context = mergeProps({ id: createUniqueId(), getRootNode }, props)
  const [state, send] = useMachine(machine(context), { context })

  return createMemo(() => connect(state, send, normalizeProps))
}