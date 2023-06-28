import React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import styles from './button.module.scss'

const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary
    }
  },
  defaultVariants: {
    variant: "primary"
  }
})

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export const Button = ({variant, ...props}: ButtonProps) => {
  return (
    <button
      {...props}
      className={buttonVariants({ variant })}
    >
    </button>
  )
}
