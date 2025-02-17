import type { OpenChangeDetails as DialogOpenChangeDetails } from '@zag-js/dialog'
import { DialogBackdrop, type DialogBackdropProps } from './dialog-backdrop'
import { DialogCloseTrigger, type DialogCloseTriggerProps } from './dialog-close-trigger'
import { DialogContent, type DialogContentProps } from './dialog-content'
import { useDialogContext, type DialogContext } from './dialog-context'
import { DialogDescription, type DialogDescriptionProps } from './dialog-description'
import { DialogPositioner, type DialogPositionerProps } from './dialog-positioner'
import { DialogRoot, type DialogRootProps } from './dialog-root'
import { DialogTitle, type DialogTitleProps } from './dialog-title'
import { DialogTrigger, type DialogTriggerProps } from './dialog-trigger'

export const Dialog = {
  Root: DialogRoot,
  Backdrop: DialogBackdrop,
  CloseTrigger: DialogCloseTrigger,
  Content: DialogContent,
  Description: DialogDescription,
  Positioner: DialogPositioner,
  Title: DialogTitle,
  Trigger: DialogTrigger,
}

export {
  DialogBackdrop,
  DialogCloseTrigger,
  DialogContent,
  DialogDescription,
  DialogPositioner,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  useDialogContext,
}

export type {
  DialogBackdropProps,
  DialogCloseTriggerProps,
  DialogContentProps,
  DialogContext,
  DialogDescriptionProps,
  DialogOpenChangeDetails,
  DialogPositionerProps,
  DialogRootProps,
  DialogTitleProps,
  DialogTriggerProps,
}
