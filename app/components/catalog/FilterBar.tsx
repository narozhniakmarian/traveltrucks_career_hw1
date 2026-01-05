import { ICheckbox } from "../camper/ui/ICheckbox/ICheckbox";


export default function FilterBar() {
    return (
        <div>
            <ICheckbox variant="ac" />
            <ICheckbox variant="kitchen" />
            <ICheckbox variant="bathroom" />
            <ICheckbox variant="tv" />
            <ICheckbox variant="automatic" />
        </div>
    )
}