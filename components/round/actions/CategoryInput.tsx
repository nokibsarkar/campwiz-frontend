import { WikimediaCategoryName } from "@/types";

interface CategoryInputProps {
    onSave: (categories: WikimediaCategoryName[]) => void;
    alreadyIncludedCategories: WikimediaCategoryName[];
}
const CategoryInput = ({ }: CategoryInputProps) => {
    return (
        <div>
            <input type="text" />
            <button>Save</button>
        </div>
    );
}

export default CategoryInput;