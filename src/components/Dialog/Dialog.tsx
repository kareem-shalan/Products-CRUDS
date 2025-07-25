import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

interface MyModalProps {
    isOpen: boolean
    setIsOpen: () => void
    title: string
    children: React.ReactNode
    className?: string
}
export default function MyModal({ isOpen, title, children, setIsOpen, className }: MyModalProps) {


    return (
        <>


            <Dialog open={isOpen} as="div" className={`relative z-10 focus:outline-none  ${className}`} onClose={setIsOpen} __demoMode>
                <div className="fixed inset-0 z-10 max-w-screen overflow-y-auto backdrop-blur-xs">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            className="w-[80%] max-w-md rounded-xl bg-white p-6 backdrop-blur-2xl backdrop:shadow-2xl 
                              duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                        >
                            <DialogTitle as="h3" className="text-base/7 font-medium text-black">
                                {title}
                            </DialogTitle>
                            {children}
                        </DialogPanel>
                    </div>

                </div>
            </Dialog>
        </>
    )
}
