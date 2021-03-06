import React, { useContext, useMemo } from 'react'
import { Switch } from '@headlessui/react'
import ThemeContext from '../../context/ThemeContext'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const ThemeSwitcher = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const enabled = useMemo(() => theme === 'dark', [theme])

    if (!theme) {
        return (
            <div className="bg-elevation-3 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"></div>
        )
    }

    return (
        <Switch
            checked={enabled}
            onChange={() => setTheme(enabled ? 'light' : 'dark')}
            className={classNames(
                enabled ? 'bg-primary-500' : 'bg-elevation-3',
                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500'
            )}
        >
            <span
                className={classNames(
                    enabled ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-elevation-1 shadow transform ring-0 transition ease-in-out duration-200'
                )}
            >
                <span
                    className={classNames(
                        enabled ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200',
                        'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
                    )}
                    aria-hidden="true"
                >
                    {/* <span className="h-3 w-3 text-center">
                        <i className="far fa-moon h-1 w-1 text-primary-500"></i>
                    </span> */}
                    <svg className="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
                        <path d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
                <span
                    className={classNames(
                        enabled ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100',
                        'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity'
                    )}
                    aria-hidden="true"
                >
                    {/* <span className="h-3 w-3 text-center">
                        <i className="fas fa-moon h-1 w-1 text-primary-500"></i>
                    </span> */}
                    <svg className="h-3 w-3 text-primary-500" fill="currentColor" viewBox="0 0 12 12">
                        <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                    </svg>
                </span>
            </span>
        </Switch>
    )
}

export default ThemeSwitcher
