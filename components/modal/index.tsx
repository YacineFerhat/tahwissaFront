import React, { ReactChild, ReactFragment, ReactNode, ReactPortal } from 'react'
import { Dialog, DialogContent, Slide } from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import { AiOutlineCloseCircle } from 'react-icons/ai'
AiOutlineCloseCircle
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children?: any
  },
  ref: React.Ref<unknown>
) {
  return (
    <Slide direction="up" mountOnEnter unmountOnExit ref={ref} {...props}>
      {props.children}
    </Slide>
  )
})

interface Props {
  children: ReactNode
  isOpen: boolean
  handleClose: (e: boolean) => void
}

export const Modal = (props: Props) => {
  const { isOpen, handleClose, children } = props
  return (
    <div>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        fullWidth
        onClose={() => handleClose(false)}
        PaperProps={{
          style: { borderRadius: 16 },
        }}
      >
        <DialogContent>
          <div className="hide z-20 rounded-full bg-white pt-5 pb-10 text-center opacity-100">
            <div className="items-end flex justify-end text-right">
              <AiOutlineCloseCircle
                size={48}
                className="cursor-pointer pb-2 text-right"
                onClick={() => handleClose(false)}
              />
            </div>
            {children}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
