"use client";
import { WikimediaCategoryName } from "@/types";
import { Autocomplete, Button, TextField } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download"
import CommonsLogo from "@/public/Wikimedia Commons Logo.svg"
import Image from "next/image";
import { useState } from "react";
import useSWR from "swr";

interface CategoryInputProps {
    onSave: (categories: WikimediaCategoryName[]) => void;
    alreadyIncludedCategories: WikimediaCategoryName[];
}
type WikimediaCategory = {
    category: WikimediaCategoryName
}
const CategoryInput = ({ alreadyIncludedCategories, onSave }: CategoryInputProps) => {
    const [categories, setCategories] = useState(alreadyIncludedCategories)
    const [prefix, setPrefix] = useState('')
    const url = `https://commons.wikimedia.org/w/api.php?action=query&format=json&list=allcategories&formatversion=2&acprefix=${prefix}&origin=*`
    const { data: categoryOptions, isLoading, error } = useSWR(prefix ? url : null, async (url) => {
        const response = await fetch(url)
        const json = await response.json()
        return json.query.allcategories.map((category: WikimediaCategory) => category.category)
    })
    return (
        <div>
            <Image src={CommonsLogo.src} alt={''} width={100} height={100} />
            {error && <div>Failed to load</div>}
            <Autocomplete
                id="categories"
                options={categoryOptions || []}
                filterSelectedOptions
                value=''
                onError={(e) => console.error(e)}
                loading={isLoading}
                onChange={(_, updatedUsers) => updatedUsers && setCategories([...categories, updatedUsers]) && setPrefix('')}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        label="Categories"
                        placeholder="Categories"
                        value={prefix}
                        onChange={(e) => setPrefix(e.target.value)}
                    />
                )}
            />
            <Button startIcon={<DownloadIcon />} variant="contained" onClick={() => onSave(categories)} disabled={categories.length === 0}>
                Import
            </Button>
        </div>
    );
}

export default CategoryInput;