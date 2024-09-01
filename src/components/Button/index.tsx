import { ButtonStyle } from "./styles"


interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
    title: string
    icon?: React.ReactElement;
}

export const Button = ({title, icon, ...rest}: IProps) => {
    return (
        <ButtonStyle type="button" {...rest}>
           {icon}
           {title}
        </ButtonStyle>
    )
}