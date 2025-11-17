interface IconButtonProps {
    onClick?: () => void;
    style?: React.CSSProperties;
    IconComponent: React.FC;
    type?: 'button' | 'submit' | 'reset';
    className?: string;
}

export function IconButton({ onClick, style, IconComponent, type = 'button', className }: IconButtonProps) {
    return (
        <button onClick={onClick} className={'icon-button ' + className} style={style} type={type}>
            <IconComponent />
        </button>
    );
}