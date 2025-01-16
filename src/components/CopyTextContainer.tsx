type CopyTextContainerProps = {
    text: string;
}

export default function CopyTextContainer(props: CopyTextContainerProps) {
    return (
        <div style={{
            padding: '10px',
        }}>
            { props.text }
        </div>
    )
}