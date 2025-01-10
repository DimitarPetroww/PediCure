import { ButtonsBlock } from "@repo/types";

const Buttons: React.FC<ButtonsBlock> = ({ button }) => {
    console.log({ button });

    return (
        <h1>button</h1>
    )
}


export default Buttons;