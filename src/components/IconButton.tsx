interface IconButtonProps {
    onClick: () => void;
    style?: React.CSSProperties;
    IconComponent: React.FC;
}

export function IconButton({ onClick, style, IconComponent }: IconButtonProps) {
    return (
        <button onClick={onClick} className='icon-button' style={style}>
            <IconComponent />
        </button>
    );
}