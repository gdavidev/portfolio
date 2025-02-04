export type ProgressBarProps = {
    currentPercentage: string;
}

export default function ProgressBar(props: ProgressBarProps) {
    return (
        <div className='w-full h-fit flex items-center gap-1'>
            <p className=''>{props.currentPercentage}</p>
            <div className='w-full rounded-full overflow-hidden bg-gray-400 border-primary h-3'>
                <div className='bg-primary h-full' style={{width: props.currentPercentage}} />
            </div>
        </div>
    )
}