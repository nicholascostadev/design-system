import React from 'react'
import Link from 'next/link'
import styles from  './button.module.scss'

import { VariantProps, cva } from 'class-variance-authority'

export type ButtonVariants = 'primary' | 'secondary' | 'tertiary' | 'ghost'
export type ButtonSizes = 'small' | 'medium' | 'large'

const buttonVariants = cva(styles.button, {
  variants: {
    variant: {
      primary: styles.primary,
      secondary: styles.secondary,
      tertiary: styles.tertiary
    },
    size: {
      small: styles.small,
      medium: styles.medium,
      large: styles.large
    }
  }
})

interface IButtonProps extends React.HTMLAttributes<any>, VariantProps<typeof buttonVariants> {
  children?: React.ReactNode
  href?: string
  isExternalLink?: boolean
  leftIcon?: any
  rightIcon?: any
  hasRightChevron?: boolean
  disabled?: boolean
  // this prop is used for ghost buttons that should be blue
  isBlue?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const Button = React.forwardRef<any, IButtonProps>(
  (
    {
      children,
      href,
      isExternalLink,
      rightIcon,
      leftIcon,
      hasRightChevron,
      type,
      isBlue,
      variant,
      size,
      ...rest
    },
    ref
  ) => {
    const LeftIcon = leftIcon
    const RightIcon = rightIcon

    if (href && !isExternalLink) {
      return (
        <Link href={href} passHref legacyBehavior>
          <a
            {...rest}
            aria-disabled={rest.disabled ?? false}
            className={buttonVariants({variant, size})}
            ref={ref}
          >
            {LeftIcon && <LeftIcon />}
            {children}
            {RightIcon && <RightIcon />}
          </a>
        </Link>
      )
    }

    if (href && isExternalLink) {
      return (
        <a
          {...rest}
          aria-disabled={rest.disabled ?? false}
          ref={ref}
          href={href}
          target={"_blank"}
          className={buttonVariants({variant, size})}
        >
          {LeftIcon && <LeftIcon />}
          {children}
          {RightIcon && <RightIcon />}
        </a>
      )
    }

    return (
      <button
        {...rest}
        aria-disabled={rest.disabled ?? false}
        ref={ref}
        type={type ?? 'button'}
        className={buttonVariants({variant, size})}
      >
        {LeftIcon && <LeftIcon />}
        {children}
        {RightIcon && <RightIcon />}
      </button>
    )
  }
)

Button.displayName = 'Button'
